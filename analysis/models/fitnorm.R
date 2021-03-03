# FIT ####
fitnorm <- function(d, quickfit = FALSE, verbose=FALSE, checkConverge = TRUE, 
                    usePriors = F, savedir = 'models/fits/out/', 
                    trans = 'logit', whichmodels = 'all') {
  # quickfit: 
    # TRUE = only uses one set of stating values for optimization
    # FALSE = uses every combination of starting values in paramGrid
  
  # verbose:
    # TRUE = gives id, model, x0 combination, and progress of model fitting
    # FALSE = gives progress of model fitting every 10% towards completion
  
  # checkConverge: 
    # TRUE = only chooses parameters that converged
    # FALSE = chooses parameters that produce maximum likelihood, regardless of convergence

  # transform: 
    # how optimization is contrained: 
    # logit: logit transformation -- 1/(1+exp(-x))*paramRange
    # gaussian: gaussian transformation -- [1/(√(2 π) σ) e^-((x - μ)^2/(2 σ^2))]*paramRange
    # none: unconstrained fit
 
  source('models/producefitlist.R')
  source('models/baseModel.R')
  source('models/transformParams.R')
  
  # useful functions: 
  bic = function(ll, n, k) -2 * ll + log(n) * k
  LLremovePrior = function(ll, params) { 
    priors = transformParams(rep(0, nParams), paramNames, transform = 'priors')
    for(i in 1:length(priors)) { 
      ll = ll - log(pnorm(params[i], priors[[i]][1], priors[[i]][2]))
    }
    ll
  }
  laplaceBIC <- function(ll, n, hessian) ll + (0.5*n*log(2*pi)) - 0.5*log(det(hessian))
  
  fitlist = suppressWarnings(producefitlist(d, whichmodels))
  if(quickfit) { 
    paramGrid = c(0.5)
    } else {
      paramGrid = seq(-5, 5, 2)
    }
  
  modelfits = data.frame()
  for(modelIdx in 1:nrow(fitlist)) { 
    if(sum(modelIdx == round(quantile(1:nrow(fitlist), seq(0, 1, .1)))) == 1 & verbose == F) {
      status = names(quantile(1:nrow(fitlist), seq(0, 1, .1))
                     [modelIdx == round(quantile(1:nrow(fitlist), seq(0, 1, .1)))])
      cat('------------------fitting', status, 'done.-------------------------\n')
    }
    id = strsplit(fitlist[modelIdx, 1], '_')[[1]][2]
    modelstr = fitlist[modelIdx, 1]
    mType = paste0(strsplit(modelstr, '_')[[1]][3:4], collapse = '_')
    paramNames = strsplit(fitlist[modelIdx, 2], ',')[[1]]
    nParams = length(paramNames)
    # paramSweep = rep(paramGrid, length(paramNames))
    dfit = d[d$trial_type=='choice' & d$id==id, ]
    
    # fitting specification
    if(nParams == 0) { 
      numParamIter = 1
      paramSweep = matrix(1)
      nParams = 1
    } else if(quickfit) { 
      
      paramSweep = t(matrix(rep(paramGrid, nParams)))
      
    } else {
      paramSweep = gtools::permutations(v=paramGrid, 
                                        r=nParams, 
                                        n = length(paramGrid),
                                        repeats.allowed = F)
      }
    numParamIter = nrow(paramSweep)
    bestVal = Inf 
    bestparams = NA
    bestconv = NA
    bval = NA

    if(usePriors) transform = 'none' 
    objfun = function(x)(-sum(log(baseModel(modelstr, dfit, transformParams(x, paramNames, trans))))) 
    for(paramIter in 1:numParamIter) {
      if(verbose) {
        cat(id, mType,
            '|', 'fitting x0 combo', paramIter, 'of', numParamIter,
            '|', 'model #', modelIdx, '/', nrow(fitlist), '\n')
      }
      x0 = paramSweep[paramIter,]
      opt = suppressWarnings(optim(par = x0, fn = objfun, hessian = T))
      if(checkConverge) {
        if(opt$value < bestVal & opt$convergence==0) {
          bestVal = opt$value
          bestparams = opt$par
          bestconv = opt$conv
          bestHess = opt$hessian
          }
        } else {
          if(opt$value < bestVal) {
            bestVal = opt$value
            bestparams = opt$par
            bestconv = opt$conv
            bestHess = opt$hessian
          }
        }
      }
    if(trans =='logit') { 
      trueparams = transformParams(bestparams, paramNames, 'logit')
      if(usePriors & !is.null(trueparams)) {
        trueparams = transformParams(trueparams, paramNames, 'gaussian')
        ll = LLremovePrior(-bestVal, trueparams)
      } else {
        ll = -bestVal
      } 
    } else {
      trueparams = bestparams
      ll = -bestVal
    }
   
    lapBIC = min(laplaceBIC(ll, nrow(dfit), bestHess), 1e6)
    if(is.na(lapBIC)) cat('~negative det hessian!~\n')
    if(identical(paramNames, character(0))) {paramNames = NA; trueparams=NA}
    thisfit = data.frame(
      id = rep(id, nParams), 
      mType = rep(mType, nParams), 
      params = paramNames, 
      fittedvals = bestparams, 
      trueparams = trueparams, 
      outval = rep(-bestVal, nParams), 
      outval_noprior = rep(ll, nParams), 
      convergence = rep(bestconv, nParams), 
      bic = ifelse(is.na(paramNames), 
                   bic(ll, nrow(dfit), 0), # actually 0 params, not 1
                   bic(ll, nrow(dfit), nParams)), 
      lapBIC = lapBIC
      )
    
    modelfits = rbind(modelfits, thisfit)
    modelout = baseModel(modelstr, dfit, trueparams, toreturn = 'all')

    cp = modelout$cp
    maxcp = modelout$maxcp
    normV = modelout$normV
    
    if (savedir!=FALSE) {
      if(quickfit) qf = '_quickfit' else qf = ''
      if(usePriors) transform = 'gaussian' else transform=''
      save(list=c("id", "mType", "paramNames", "bestparams", "trueparams", "bestVal", 
                  "bval", "ll", 'bestconv', "modelout", 'cp', 'maxcp', 'normV'), 
           file=paste0(savedir, 'modelfit_', id, '_', mType, qf, '_', transform, ".RData"))
    }
    on.exit(return(modelfits)) # get something if terminated
  }
  return(modelfits)
}