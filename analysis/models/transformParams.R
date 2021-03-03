transformParams <- function(params, paramNames, transform='logit') { 
  
  paramTable = list(
   'beta'=  c(0, 50), 
   'epsilon'=  c(0, 1), 
   'epsilon_base'=  c(0,1), 
   'epsilon_theta'=  c(0,50), 
   'sigma'=  c(0, 100), 
   'gamma'=  c(0,100), 
   'normexp'=  c(0,20)
  )
  
  transformedParams = c()
  for(paramIdx in 1:length(params)) { 
    thisparamName = paramNames[paramIdx]
    paramRange = paramTable[[thisparamName]]
    # logit transform
    switch (transform,
      'logit' = {
        #transformedParams[paramIdx] = paramRange[1] + (paramRange[2]-paramRange[1])/(1+exp(-params[paramIdx]))
        transformedParams[paramIdx] = plogis(params[paramIdx]) * paramRange[2]
      }, 
      'gaussian' = {
        # https://people.eecs.berkeley.edu/~jordan/courses/260-spring10/lectures/lecture5.pdf
        u0 = median(paramRange)
        s0 = ((paramRange[2]-paramRange[1])/4)^2 # see Pudar Hozo et al., 2005
        x = params[paramIdx]
        s1 = s0
        
        u1 = (s0/(s0+s1))*x + (s0/(s0+s1))*u0
        s1 = (1/s0 + 1/s1)/-1
        
        transformedParams[paramIdx] = u1
      },
      'none' = {
        transformedParams = params
      },
      'priors' = {
        transformedParams[[paramIdx]] = c(
          u0 = median(paramRange),
          s0 = ((paramRange[2]-paramRange[1])/4)^2 
        )
      }, 
      {errorCondition('specify what transformation to use.')}
      )
    }
  
  return(transformedParams)
  
}
