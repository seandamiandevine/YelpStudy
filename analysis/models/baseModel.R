baseModel <- function(mstr, data, params, toreturn = 'cp') { 
  
  # Parameter specification #### 
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
  
  # Value normalization ####
  cp = c()
  maxcp = c()
  normV = list()
  for(t in 1:nrow(data)) { 
    targetValue = data$chosen_rating[t]
    choiceIdx = match(data$chosen_name[t], strsplit(data$names[t], ', ')[[1]])
    theseValues  = as.numeric(strsplit(data$stars[t], ',')[[1]])[-choiceIdx]
    theseValues = c(targetValue, theseValues) # place target at front
    
    scaledValues = theseValues
    switch(normType, 
           'raw' = {
             # no parameters
           }, 
           'norm' = {
             # Khaw et al., 2017, PNAS 
             for(i in 1:length(scaledValues)){
               scaledValues[i] = theseValues[i]/(1+(sigma*sum(theseValues[-i])))
             }
           }, 
           'expnorm' = {
             # Carandini et al., 2010, Nat. Rev. Neuro., Eq. 10
             # numers = theseValues^normexp
             # denom = as.numeric(sigma^normexp + sum(numers))
             # scaledValues = gamma * (numers/denom)
             for(i in 1:length(scaledValues)) {
               numers = theseValues[i]^normexp
               denom = sigma^normexp * sum(theseValues[-i]^normexp)
               scaledValues[i] = gamma * (numers/denom)
               }
           }, 
           'expnormsimple' = {
             scaledValues = (theseValues^normexp)/((mean(theseValues))^normexp)
           }, 
           {errorCondition(paste0('Error normalizing non-target ratings. Last values were: ', theseValues))}
    )
    theseValues = scaledValues
    normV[[t]] = append(theseValues[-1], theseValues[1], choiceIdx-1) # put values back in original order
    targetValue = theseValues[1] 
    
    # Action Selection ####
    switch(choiceType, 
           'chance' = {
             cp[t] = 1/length(theseValues)
             maxcp[t] = cp[t]
           }, 
           'luce' = {
             cp[t] = targetValue/sum(theseValues)
             maxcp[t] = max(theseValues)/sum(theseValues)
           }, 
           'softmax' = {
             cp[t] = 1/(1+sum(exp(-beta*(targetValue-theseValues[-1]))))
             maxIndex = match(max(theseValues), theseValues)
             maxcp[t] = 1/(1+sum(exp(-beta*(theseValues[maxIndex]-theseValues[-maxIndex]))))
           }, 
           'egreedy' = {
             cp[t] = epsilon*(targetValue==max(theseValues)) + (1-epsilon) * (1/length(theseValues))
             maxcp[t] = epsilon + (1-epsilon) * (1/length(theseValues))
           }, 
           'emax' = {
             softcp = 1/(1+sum(exp(-beta*(targetValue-theseValues[-1]))))
             cp[t] =  epsilon*(targetValue==max(theseValues)) + (1-epsilon)*softcp
             maxIndex = match(max(theseValues), theseValues)
             maxsoftcp = 1/(1+sum(exp(-beta*(theseValues[maxIndex]-theseValues[-maxIndex]))))
             maxcp[t] = epsilon + (1-epsilon)*maxsoftcp
           }, 
           'egreedyscaled' = {
             effective_epsilon = min(epsilon_base + 1/(epsilon_theta*length(theseValues)), 1)
             cp[t] = (effective_epsilon*(targetValue==max(theseValues)))+((1-effective_epsilon)*(1/length(theseValues)))
             maxcp[t] = effective_epsilon+((1-effective_epsilon)*(1/length(theseValues)))
           }, 
           'emaxscaled' = {
             softcp = 1/(1+sum(exp(-beta*(targetValue-theseValues[-1]))))
             effective_epsilon = min(epsilon_base + 1/(epsilon_theta*length(theseValues)), 1)
             cp[t]= (effective_epsilon*(targetValue==max(theseValues)))+((1-effective_epsilon)*softcp)
             maxIndex = match(max(theseValues), theseValues)
             maxsoftcp = 1/(1+sum(exp(-beta*(theseValues[maxIndex]-theseValues[-maxIndex]))))
             maxcp[t] = effective_epsilon + (1-effective_epsilon)*maxsoftcp
           }, 
           {errorCondition('Error selecting actions...')}
    )
    cp[t] = min(cp[t], 1-1e-16)
    cp[t] = max(cp[t], 1e-16)
  }
  
 switch (toreturn,
   'cp' = {out = cp}, 
   'normV' = {out = normV}, 
   'maxcp' = {out = maxcp},
   'cp_maxcp' = {out=list('cp' = cp, 'maxcp' = maxcp)}, 
   'cp_normV' = {out=list('cp' = cp, 'normV' = normV)},
   'all'= {out = list('cp' = cp, 'maxcp' = maxcp, 'normV' = normV)}, 
   {errorCondition('Specify what you want to return: cp, normV, maxcp, cp_maxcp, cp_normV, or all')}
   
 )
  
  return(out)
}

