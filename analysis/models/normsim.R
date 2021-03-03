normsim <- function(choicesets, mstr, params, nsim, verbose=F, 
                    savedir = 'models/simulations/') { 
  
  # most of this just taken from baseModel.R
  
  # Parameter specification 
  id = strsplit(mstr, '_')[[1]][2]
  normType = strsplit(mstr, '_')[[1]][3]
  choiceType = strsplit(mstr, '_')[[1]][4]
  
  ParamIdx = 1
  switch (normType,
          'raw' = {
            # no parameters
          },
          'norm' = {
            sigma = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
          }, 
          'expnorm' = { 
            sigma  = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
            gamma = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
            normexp = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
          }, 
          'expnormsimple' = {
            normexp = params[ParamIdx]
          },
          {errorCondition(paste0('Unknown normalization value : ', normType))}
  )
  
  switch (choiceType,
          'chance' = {
            # no params
          }, 
          'luce' = {
            # no params
          }, 
          'softmax' = {
            beta = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
          }, 
          'egreedy' = {
            epsilon = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
          }, 
          'emax' = {
            beta = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
            epsilon = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
          }, 
          'egreedyscaled' = {
            epsilon_base = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
            epsilon_theta = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
          }, 
          'emaxscaled' = {
            beta = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
            epsilon_base = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
            epsilon_theta = params[ParamIdx]
            ParamIdx = ParamIdx + 1 
          },
          {errorCondition(paste0('Unknown choice rule : ', choiceType))}
  )
  
  # Value normalization 
  out = list('trial' = c(), 'rating' = c(), 'cp' = c(), 'normV' = c())
  for(t in 1:length(choicesets)) { 
      rawValues =  as.numeric(strsplit(choicesets[t], ',')[[1]])
      theseValues = rawValues
      scaledValues = theseValues
      switch(normType, 
             'raw' = {
               # no parameters
             }, 
             'norm' = {
               for(i in 1:length(scaledValues)){
                 scaledValues[i] = theseValues[i]/(1+(sigma*sum(theseValues[-i])))
               }
             }, 
             'expnorm' = {
               numers = theseValues^normexp
               denom = as.numeric(sigma^normexp + sum(numers))
               scaledValues = gamma * (numers/denom)
             }, 
             'expnormsimple' = {
               scaledValues = (theseValues^normexp)/((mean(theseValues))^normexp)
             },
             {errorCondition(paste0('Error normalizing non-target ratings. Last values were: ', theseValues))}
      )
      # scaledValues[is.na(scaledValues)] <- 0
      theseValues = scaledValues
      out[['trial']] = c(out[['trial']], rep(t, length(theseValues)))
      out[['normV']] = c(out[['normV']], theseValues)
      
      for(choiceIdx in 1:length(scaledValues)) {
        
        targetValue = scaledValues[choiceIdx]
        theseValues = scaledValues[-choiceIdx]
        theseValues = c(targetValue, theseValues) # put target in front
        
        # Action Selection 
        switch(choiceType, 
               'chance' = {
                 cp = 1/length(theseValues)
               }, 
               'luce' = {
                 cp = targetValue/sum(theseValues)
               }, 
               'softmax' = {
                 cp = 1/(1+sum(exp(-beta*(targetValue-theseValues[-1]))))
               }, 
               'egreedy' = {
                 cp = epsilon*(targetValue==max(theseValues)) + (1-epsilon) * (1/length(theseValues))
               }, 
               'emax' = {
                 softcp = 1/(1+sum(exp(-beta*(targetValue-theseValues[-1]))))
                 cp =  epsilon*(targetValue==max(theseValues)) + (1-epsilon)*softcp
               }, 
               'egreedyscaled' = {
                 effective_epsilon = min(epsilon_base + 1/(epsilon_theta*length(theseValues)), 1)
                 cp = (effective_epsilon*(targetValue==max(theseValues)))+((1-effective_epsilon)*(1/length(theseValues)))
               }, 
               'emaxscaled' = {
                 softcp = 1/(1+sum(exp(-beta*(targetValue-theseValues[-1]))))
                 effective_epsilon = min(epsilon_base + 1/(epsilon_theta*length(theseValues)), 1)
                 cp = (effective_epsilon*(targetValue==max(theseValues)))+((1-effective_epsilon)*softcp)
               }, 
               {errorCondition('Error selecting actions...')}
          )
          
          cp = min(cp, 1-1e-16)
          cp = max(cp, 1e-16)
          out[['rating']] = c(out[['rating']], rawValues[choiceIdx])
          out[['cp']] = c(out[['cp']], cp)
      }
  }
  
  # Simulate 
  simulations = matrix(NA, nrow=nsim*length(choicesets), ncol = 11)
  row = 1
  for(s in 1:nsim) {
    if(verbose) {
      if(s %in% round(quantile(1:nsim))) {
        cat(round(s/nsim, 2)*100, '% complete', '\n')
      } 
    }
    
    for(t in 1:length(choicesets)) {
      noptions = sum(out[['trial']]==t)
      thischoiceIdx = sample(1:noptions, 1, prob = out[['cp']][out[['trial']]==t])
      thischoiceVal = out[['normV']][out[["trial"]] == t][thischoiceIdx]
      thiscp = out[['cp']][out[['trial']]==t][thischoiceIdx]
      otherVals = out[['normV']][out[["trial"]]==t][-thischoiceIdx]
      othercp = out[['cp']][out[['trial']]==t][-thischoiceIdx]
      maxchoiceVal = max(c(thischoiceVal, otherVals))
      maxchosen = ifelse(thischoiceVal==maxchoiceVal, 1, 0)
      meanrawstars = mean(out[['rating']][out[['trial']] == t])
      meanrawstars_nochoice =  mean(out[['rating']][out[['trial']] == t][-thischoiceIdx])
      simulations[row, ] = c(s, 
                           t,
                           noptions, 
                           thischoiceVal, 
                           thiscp,
                           paste0(otherVals, collapse = ','), 
                           paste0(othercp, collapse = ','), 
                           maxchoiceVal, 
                           maxchosen, 
                           meanrawstars, 
                           meanrawstars_nochoice)
      row = row + 1
    }
  }
  colnames(simulations) = c('simulation', 'trial', 'num_options', 
                            'chosenValue', 'chosencp', 'otherValues', 
                            'othercp', 'maxValue', 'maxChosen', 'meanStars', 
                            'meanStarsNoChoice')
  
  if(savedir!=F) {
    saveRDS(simulations, 
         file=paste0(savedir, 'modelsim_', id, '_', normType, '_', choiceType, '_', 
                     'n', nsim, '.rds'))
  }
  return(simulations)
  
}

simulateChoicesPerSubject <- function(data, modeldir = 'models/fits/out/',
                                      whichmodels = NULL, trans='logit',
                                      nSim = 100, showSubPlots = F, verbose=T,
                                      savedir = 'models/simulations/', 
                                      toreturn='all') { 
 
  source('models/transformParams.R')
  models = list.files(modeldir, pattern = '.RData')
  if(!is.null(whichmodels)) {
    models = models[grepl(pattern = paste0(whichmodels, collapse = '|'), models)]
  }
  SimNorm = data.frame() 
  for(model in 1:length(models)){ 
    cat('Simulating choices for model:', model, '/', length(models), '\n')
    
    thismodel = mget(load(paste0(modeldir, models[model])))
    mstr = gsub('.RData', '', models[model])
    d.fit = data[data$id==thismodel$id & data$trial_type=='rating', ]
    testset = d.fit$stars # use rating data as test set
    transformedParams = transformParams(thismodel$bestparams, thismodel$paramNames, trans)
    
    thissim = normsim(testset, mstr, transformedParams, nSim, verbose = verbose, savedir=savedir)
    thissim = data.frame(thissim, stringsAsFactors = F)
    
    switch (toreturn,
      'all' = {
        # only use when memory is not an issue (e.g., when simulating a subset of models)
        thissim$id = thismodel$id
        thissim$mType = thismodel$mType
        thissim$chosen_rating = rep(d.fit$chosen_rating, nSim)
        SimNorm <- rbind(SimNorm, thissim) 
      }, 
      'sum' = {
        # can't store whole matrix for each subejct, so just get pmax and move on
        library(dplyr)
        suppressMessages(
          maxp <-
            thissim %>%
            mutate(trial= as.numeric(trial),
                   maxChosen = as.numeric(maxChosen),
                   meanStars = as.numeric(meanStars)) %>%
            group_by(trial) %>%
            summarise(meanStars = unique(meanStars),
                      meanStarsNoChoice = unique(meanStarsNoChoice),
                      pMax = mean(maxChosen)) %>%
            mutate(id = thismodel$id,
                   mType = thismodel$mType)
        )
        SimNorm = rbind(SimNorm, as.data.frame(maxp))
      }
    )
   
    
    if(showSubPlots) { 
      # Visualise single model simulation if you want to
      plot(x = maxp$meanStars,
           y = maxp$pMax,
           xlab = 'Mean Choice Set Rating',
           ylab = '% Target Chosen (Simulated)',
           main = paste('id:',thismodel$id, '\n', thismodel$mType),
           ylim=c(0, 1))
      abline(glm(as.numeric(maxChosen) ~ as.numeric(meanStars), data=thissim, family = 'binomial'), col='red')
      mtext(paste('OR =', round(exp(glm(as.numeric(maxChosen) ~ as.numeric(meanStars), data=thissim)$coefficients[2]),4)),
                  side = 3, line = -0.95, adj = 0, cex = 1)
      }
   
    cat('----\n')
  }

  return(SimNorm)
  
}

simulateChoicesPerModel <- function(data, modelfits,
                                    whichmodels = NULL,nSim = 100, showSubPlots = F,
                                    verbose=T, savedir = 'models/simulations/') { 
  
  models = unique(modelfits$mType)
  if(!is.null(whichmodels)) {
    models = models[grepl(pattern = paste0(whichmodels, collapse = '|'), models)]
  }
  SimNorm = data.frame() 
  
  for(m in models) { 
    cat('----simulating model:',m,'|', match(m, models), '/', length(models), '-----\n')
    
    mstr = paste0('xx_xx_', m)
    thismodel = modelfits[modelfits$mType==m, ]
    paramNames = unique(thismodel$params)
    median_params = sapply(paramNames, function(x)
      median(thismodel$trueparam[thismodel$params==x]))
    
    testset = data$stars 
    thissim = normsim(testset, mstr, median_params, nSim, verbose = verbose, 
                      savedir=savedir)
    thissim = data.frame(thissim, stringsAsFactors = F)
    thissim$mType = m
    
    SimNorm <- rbind(SimNorm, thissim)
    
    if(showSubPlots) { 
      # Visualise single model simulation if you want to
      pmax = sapply(unique(thissim$meanStars), function(x)
        mean(as.numeric(thissim$maxChosen[thissim$meanStars==x])))
      meanStars = round(as.numeric(names(pmax)), 4)
      plot(x = meanStars,
           y = pmax,
           xlab = 'Mean Choice Set Rating',
           ylab = '% Target Chosen (Simulated)',
           main = m,
           ylim=c(0, 1),
           type='p')
      abline(glm(as.numeric(maxChosen) ~ as.numeric(meanStars), data=thissim), col='red')
      mtext(paste('OR =', round(exp(glm(as.numeric(maxChosen) ~ as.numeric(meanStars), data=thissim)$coefficients[2]),4)),
            side = 3, line = -0.95, adj = 0, cex = 1)
      }
  }
  
  return(SimNorm)
  
}
  
  
  