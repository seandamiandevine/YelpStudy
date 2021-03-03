# Setup -------------------------------------------------------------------
# setwd
setwd("~/Desktop/Ongoing/Yelp/analysis/full") # linux
rm(list=ls()) # clear environment 
library(dplyr); library(reshape2) # for data manipulation 
library(ggplot2); library(ggpubr) # for plotting 
library(lme4); library(sjPlot)    # for MLM
library(stringr)                  # Misc.

# Load Data ---------------------------------------------------------------
d = do.call(rbind, lapply(paste0('data/', list.files('data/')), read.csv, 
                          header = TRUE, stringsAsFactors = F))


# Get Demographics --------------------------------------------------------
demopre = 
  d %>% 
  summarise(n = length(unique(id)), 
            mage = mean(age[age < 100], na.rm = T), 
            sdage = sd(age[age < 100], na.rm = T), 
            pfemale= sum(grepl('female', (tolower(gender))))/length(gender))


# Exclude -----------------------------------------------------------------
# check and remove catch trials 
ncatch = 3 # have to get at least 3 right
catch <- 
  d[d$is_catch_trial==1,] %>% 
  group_by(id, trial) %>% 
  mutate(highest_rating = max(as.numeric(unlist(strsplit(stars, split=','))))) %>% 
  summarise(caught = ifelse(is.na(chosen_rating), 0, ifelse(chosen_rating == highest_rating, 1, 0)), 
            trial_type = trial_type) %>% ungroup()

d = d[d$id %in% (catch %>% group_by(id) %>% summarise(keep = sum(caught) >= ncatch) %>% filter(keep))$id,]

d <- d[d$is_catch_trial == 0, ] # remove catch trials
d = d[is.na(d$targetrt)==F, ]   # remove timeouts

demopost = 
  d %>% 
  summarise(n = length(unique(id)), 
            mage = mean(age[age < 100], na.rm = T), 
            sdage = sd(age[age < 100], na.rm = T), 
            pfemale= sum(grepl('female', (tolower(gender))))/length(gender))

# store predictors' relative rankings 
for(i in 1:nrow(d)) { 
  
  r = sort(unique(unlist(strsplit(d$stars[i], split=','))), decreasing = T)
  nr = as.numeric(sort(unique(unlist(strsplit(d$nrevs[i], split=','))), decreasing = T))
  p =  as.numeric(sort(unique(unlist(strsplit(d$prices[i], split=','))), decreasing = T))
  if(d$trial_type[i] == 'choice') {
    d[i, 'choice_ind'] = match(d$chosen_rating[i], r)
    d[i, 'rating_ind'] = NA
    d[i, 'target_chosen'] = ifelse(d$chosen_rating[i]== max(as.numeric(r)), 1, 0)
  } else {
    d[i, 'choice_ind'] = NA
    d[i, 'rating_ind'] = match(d$chosen_rating[i], r)
    d[i, 'target_chosen'] = NA
  }
  
  d[i, 'nrev_ind'] = match(d$chosen_nrev[i], nr)
  d[i, 'price_ind'] = match(d$chosen_price[i], p)
  d[i, 'nrev_dev'] = d$chosen_nrev[i] - median(nr)
  
}


# Model-Free --------------------------------------------------------------
# * Analyse ----
# * * Choice ---- 
choice_m <- 
  d %>% 
  filter(trial_type == 'choice') %>% 
  glmer(target_chosen ~ mean_rating + log(chosen_nrev) + chosen_price + num_options + 
          (mean_rating + log(chosen_nrev) + chosen_price + num_options|id), 
        family = 'binomial', data=.)

exp(fixef(choice_m)) # OR

# * * Rating ----
# store ratings without highlighted resto
for(i in 1:nrow(d)) { 
  # 
  # if(d[i, 'trial_type'] == 'choice') { 
  #   d[i, 'mean_rating_no_choice'] =  NA
  #   next 
  # }
  
  stars = as.numeric(strsplit(d$stars[i], split=',')[[1]])
  names = strsplit(d$names[i], split=', ')[[1]]
  choiceIdx = match(d$chosen_name[i], names)
  stars_no_choice = stars[-choiceIdx]
  d[i, 'mean_rating_no_choice'] = mean(stars_no_choice)
}

rating_m <- 
  d %>% 
  filter(trial_type == 'rating') %>% 
  lmer(rating ~ mean_rating_no_choice + log(chosen_nrev) + chosen_price + chosen_rating +  num_options + 
         (mean_rating_no_choice  + log(chosen_nrev) + chosen_price + chosen_rating + num_options|id), 
       data=.)


# * Visualise ----
# * * Make HTML Table of Both Models ----
tab_model(choice_m, rating_m, show.re.var = F, show.icc = F, 
          pred.labels = c('Intercept', 'Average Star', 'Number of Reviews (ln)', 'Chosen Price',
                          'Choice Set Size', 
                          'Average Star (exc. Rated)', 'Average Star (Rated)'),
          dv.labels = c("Target Chosen", "Expected Satisfaction"), 
          order.terms = c(1, 2, 6, 7, 3, 4, 5),
          file = 'output/choice_rating_mlm.html')

# * * Fit Nuisance Rating Model ----
m0_rating <- 
  d %>% 
  filter(trial_type == 'rating') %>% 
  lmer(rating ~ log(chosen_nrev) + chosen_price + chosen_rating +  num_options + 
         (log(chosen_nrev) + chosen_price + chosen_rating + num_options|id), 
       data=.)

# * * Plot Effects Against Mean Star Ratings ----
choice_mean_star_plot <- 
  d %>% 
  filter(trial_type == 'choice') %>% 
  mutate(starbin=ntile(mean_rating, 5)) %>%
  group_by(starbin) %>%
  mutate(starbin = mean(mean_rating)) %>% 
  group_by(id, starbin) %>% 
  summarise(ptarget = mean(target_chosen)) %>% 
  ggplot(aes(x = starbin, y = ptarget)) + 
  stat_summary(fun.y = mean, geom='point', position=position_dodge(0.9)) + 
  stat_summary(fun.data = mean_se, geom='errorbar', position=position_dodge(0.9), width=0.2) + 
  stat_summary(fun.y = mean, geom='line', position=position_dodge(0.9)) + 
  scale_y_continuous(labels = scales::percent_format(accuracy = 1)) + 
  scale_x_continuous(limits = c(2, 5)) + 
  labs(x = 'Average Choice Set Rating\n', y = '% Target Chosen') + 
  theme_bw() 

rating_mean_star_plot_resid <- 
  d %>% 
  filter(trial_type == 'rating') %>% 
  mutate(rating_resid = resid(m0_rating), 
         starbin=ntile(mean_rating_no_choice, 5)) %>%
  group_by(starbin) %>%
  mutate(starbin = mean(mean_rating_no_choice)) %>% 
  ggplot(aes(x = starbin, y = rating_resid)) + 
  stat_summary(fun.y = mean, geom='point', position=position_dodge(0.9)) + 
  stat_summary(fun.data = mean_se, geom='errorbar', position=position_dodge(0.9), width = 0.1) + 
  stat_summary(fun.y = mean, geom='line', position=position_dodge(0.9)) + 
  scale_x_continuous(limits = c(2, 5))  + 
  labs(x = 'Average Star Rating Exc.\nRestaurant People "End Up At"', y = 'Expected Satisfaction\nResidual') + 
  theme_bw() 

# * * Save Plots ----
pdf('output/modelfree_meanstar.pdf', width = 15, height = 5)
print(
  ggarrange(choice_mean_star_plot, rating_mean_star_plot_resid, 
          labels = c('a', 'b'))
)
dev.off()


# Model-Based -------------------------------------------------------------
# * Fit Model Parameters-----
# quickfit for all models: ~1 hour
source('models/fitnorm.R')
modelfits <- fitnorm(d[d$trial_type == 'choice',], 
                     verbose = T, 
                     whichmodels = c(1, 2, 23), # just luce 
                     trans = 'logit',
                     savedir='models/fits/out_luce/'
                     )

# write.csv(modelfits, 'models/modelfits_quickfit.csv')
# modelfits <- read.csv('models/modelfits.csv')

# * Visualise Model Fits ####
# Goodness of Fit
bestBIC_subject_prop <- 
  modelfits %>%
  #filter(mType %in% c('expnormsimple_luce', 'raw_luce', 'expnorm_chance')) %>% 
  mutate(mType= ifelse(mType=='expnormsimple_luce', 'Normalized Value', 
                       ifelse(mType=='raw_luce', 'Raw Value', 
                              'Chance'))) %>% 
  group_by(id, mType) %>% 
  summarise(mbic = min(bic)) %>%
  group_by(id) %>% 
  filter(mbic == min(mbic)) %>% 
  group_by(mType) %>% 
  mutate(count = n(), 
         mType = gsub('_', '\n', mType)) %>% 
  ggplot(aes(x=reorder(mType,-count))) +
  geom_bar(stat="count", color='black', fill='grey') + 
  labs(x = '', y = 'Number of subjects for which\nmodel has smallest BIC') +
  theme_bw()

bestBIC_subject_hist <- 
  modelfits %>%
  filter(mType %in% c('expnormsimple_luce', 'raw_luce')) %>% 
  mutate(mType = ifelse(mType=='expnormsimple_luce', 'Normalized Value', 'Raw Value')) %>% 
  group_by(id) %>% 
  summarise(diff = bic[mType == 'Raw Value'] - bic[mType=='Normalized Value']) %>%
  ungroup() %>% 
  arrange(by=diff) %>% 
  mutate(id = 1:length(id)) %>% 
  ggplot(aes(x= id, y = diff, fill=diff)) +
  geom_bar(stat="identity", color='black') + 
  labs(x = 'Participant', y = 'Raw BIC - Normalized BIC', 
       fill = 'BIC Difference') +
  theme_bw()

# * Simulate Choices on Rating Trials ####
source('models/normsim.R')
SimNorm <- simulateChoicesPerSubject(d, 
                                     modeldir = 'models/fits/out_luce/', 
                                     nSim = 100, 
                                     trans='logit', 
                                     savedir = 'models/simulations/luce_const/')

SimNormModels <- simulateChoicesPerModel(d[d$trial_type=='rating', ], 
                                         modelfits = modelfits,  
                                         nSim = 10, 
                                         savedir = 'models/simulations/luce/', 
                                         whichmodels = c('expnormsimple_luce', 
                                                         'raw_luce', 
                                                         'raw_chance'))

# * Visualise Choice Simulations ####
SimNormPlot_Choices_allVal <- 
  SimNorm %>% 
  #filter(mType %in% c('expnormsimple_luce', 'raw_luce', 'expnorm_chance')) %>% 
  mutate(mType = ifelse(mType=='expnormsimple_luce', 'Normalized Value', 
                        ifelse(mType == 'raw_luce', 'Raw Value', 
                        'Chance')), 
         mType = factor(mType, levels = c('Chance', 'Raw Value', 'Normalized Value')), 
         starbin = ntile(meanStars, 5), 
         maxChosen = as.numeric(maxChosen)) %>% 
  group_by(starbin) %>% 
  mutate(starbinlab = mean(as.numeric(as.character(meanStars)))) %>%
  ggplot(aes(x = starbinlab,  y = maxChosen, colour = mType)) + 
  stat_summary(fun.y = mean, geom='point') + 
  stat_summary(fun.data = mean_se, geom='errorbar', width=0.1) + 
  stat_summary(fun.y = mean, geom='line') + 
  scale_x_continuous(limits = c(2, 5)) + 
  scale_color_brewer(palette = 'Dark2') + 
  labs(x = 'Mean Choice Set Rating', 
       y = '% Target Chosen\n(Simulated)', 
       colour = 'Model Type') + 
  theme_bw() 

SimNormPlot_Choices_justnorm <- 
  SimNorm %>% 
  filter(mType == 'expnormsimple_luce') %>%  
  mutate(starbin = ntile(meanStars, 5), 
         maxChosen = as.numeric(maxChosen)) %>% 
  group_by(starbin) %>% 
  mutate(starbinlab = mean(as.numeric(as.character(meanStars)))) %>%
  ggplot(aes(x = starbinlab,  y = maxChosen)) + 
  stat_summary(fun.y = mean, geom='point') + 
  stat_summary(fun.data = mean_se, geom='errorbar', width=0.1) + 
  stat_summary(fun.y = mean, geom='line') + 
  scale_x_continuous(limits = c(2, 5)) + 
  labs(x = 'Mean Choice Set Rating', 
       y = '% Target Chosen\n(Simulated)') + 
  theme_bw() 

SimNormPlot_medianparams <- 
  SimNormModels %>% 
  mutate(starbin = ntile(meanStars, 5), 
         mType = ifelse(mType == 'expnormsimple_luce', 'Normalized Value', 
                        ifelse(mType=='raw_luce', 'Raw Value', 'Chance'))) %>% 
  group_by(starbin) %>% 
  mutate(starbinlab = mean(as.numeric(as.character(meanStars)))) %>%
  group_by(mType, starbinlab) %>% 
  summarise(pMax = mean(as.numeric(as.character(maxChosen)))) %>% 
  ggplot(aes(x = starbinlab,  y = pMax, color = mType)) + 
  stat_summary(fun.y = mean, geom='point') + 
  stat_summary(fun.data = mean_se, geom='errorbar', width=0.2) + 
  stat_summary(fun.y = mean, geom='line') + 
  scale_x_continuous(limits = c(2, 5)) + 
  labs(x = 'Mean Choice Set Rating', 
       y = '% Target Chosen (Simulated)', 
       colour = 'Model Type', 
       title = 'all subjects.\nmedian parameter values') + 
  theme_bw() 

SimNormPlot_rating_overall <- 
  SimNorm %>%
  filter(mType=='expnormsimple_luce') %>% 
  mutate(meanStarsNoChoice=as.numeric(meanStarsNoChoice),
         starbin = ntile(meanStarsNoChoice, 5)) %>% 
  group_by(starbin) %>% 
  mutate(starbin = mean(meanStarsNoChoice), 
         chosenValue = as.numeric(chosenValue)) %>% 
  ggplot(aes(x = starbin, y = chosenValue)) + 
  stat_summary(fun.y = mean, geom='point') + 
  stat_summary(fun.data = mean_se, geom='errorbar', width=0.1) + 
  stat_summary(fun.y = mean, geom='line') + 
  scale_x_continuous(limits = c(2, 5)) + 
  labs(x = 'Average Star Rating Exc.\nRestaurant People "End Up At"', 
       y = 'Normalized Value') + 
  theme_bw() 

SimNormPlot_rating_all <- 
  SimNorm %>% 
  filter(mType=='expnormsimple_luce') %>% 
         #chosen_rating %in% c(3,3.5, 4, 4.5)) %>% 
  mutate(meanStarsNoChoice = as.numeric(meanStarsNoChoice),
         starbin = ntile(meanStarsNoChoice, 3)) %>% 
  group_by(starbin) %>% 
  mutate(starbin = mean(meanStarsNoChoice), 
         chosen_rating = factor(chosen_rating), 
         chosenValue = as.numeric(chosenValue)) %>% 
  ggplot(aes(x = starbin, y = chosenValue, colour=chosen_rating)) + 
  stat_summary(fun.y = mean, geom='point') + 
  stat_summary(fun.data = mean_se, geom='errorbar', width=0.1) + 
  stat_summary(fun.y = mean, geom='line') + 
  scale_x_continuous(limits = c(2, 5)) + 
  labs(x = 'Average Star Rating Exc.\nRestaurant People "End Up At"', 
       y = 'Normalized Value',
       colour='Rating of Restaurant\nPeople"End Up at"') + 
  theme_bw() 

ggarrange(bestBIC_subject_hist,
  ggarrange(SimNormPlot_Choices_justnorm, SimNormPlot_rating_overall, 
          labels = letters[2:3]), 
  labels = letters[1], 
  nrow=2)

# Supplemental Analyses ---------------------------------------------------
# Confidence 
for(i in 1:nrow(d)) { 
  
  stars = as.numeric(strsplit(d$stars[i], split=',')[[1]])
  d[i, 'targetval'] = max(stars)
}

d = d[d$trial_type!=5, ] # not sure what this is or where it came from 
d$trial_type = as.factor(d$trial_type)
conf_m <- lmer(confidence ~ trial_type + mean_rating + log(chosen_nrev) + chosen_price + num_options + 
                 chosen_rating + 
                 (trial_type + mean_rating + log(chosen_nrev) + chosen_price + num_options + chosen_rating|id),
               data = d)

tab_model(conf_m, show.re.var = F, show.icc = F, 
          pred.labels = c('Intercept', 'Trial Type',  'Average Star', 'Number of Reviews (ln)',
                          'Chosen Price','Choice Set Size', 'Chosen Star'),
          dv.labels = c("Confidence"))

