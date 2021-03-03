producefitlist <- function(data, whichmodels = 'all') {
  
  ids = unique(data$id)
  normTypes = c('raw', 'norm', 'expnorm', 'expnormsimple')
  choiceTypes = c('chance', 'luce', 'softmax', 'egreedy', 'emax', 'egreedyscaled', 'emaxscaled')
  possible_models = expand.grid(normTypes, choiceTypes)
  possible_models = possible_models[order(possible_models$Var1), ]
  if(whichmodels != 'all') {
    
    tofit = possible_models[whichmodels, ]
    # normTypes = normTypes[normTypes %in% tofit[, 1]]
    # choiceTypes = choiceTypes[choiceTypes %in% tofit[, 2]]
    combinations = expand.grid(ids, paste0(tofit[,1], '_', tofit[,2]))
    tmp  = strsplit(as.character(combinations[,2]), split='_')
    combinations[,2] = sapply(tmp, function(x) x[1])
    combinations[,3] = sapply(tmp, function(x) x[2])
  } else {
    combinations = expand.grid(ids, normTypes, choiceTypes)
  }
  model_list = paste0('modelfit_', combinations[,1], '_', combinations[,2],'_', combinations[,3])
  
  paramTable = list(
    'raw' = c(),
    'norm' = c('sigma'),
    'expnorm' = c('sigma', 'gamma', 'normexp'), 
    'expnormsimple' = c('normexp'), 
    'chance' = c(), 
    'softmax' = c('beta'), 
    'egreedy' = c('epsilon'), 
    'emax' = c('beta', 'epsilon'), 
    'egreedyscaled' = c('epsilon_base', 'epsilon_theta'), 
    'emaxscaled' = c('beta', 'epsilon_base', 'epsilon_theta')
    )
  
  for(m in 1:nrow(combinations)) { 
    
    combinations[m ,4] = paste0(c(paramTable[[as.character(combinations[m,2])]], 
                                  paramTable[[as.character(combinations[m,3])]]), 
                                       collapse = ',')
    
  }
  
  out = cbind(model_list, params = combinations[, 4])
  
}