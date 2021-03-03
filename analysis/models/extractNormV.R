extractNormV <- function(data, modeldir = 'models/fits/out/', 
                         whichmodels=NULL, trans='logit') { 
  
  source('models/baseModel.R')
  models = list.files(modeldir, pattern = '.RData')
  if(!is.null(whichmodels)) {
    models = models[grepl(pattern = paste0(whichmodels, collapse = '|'), models)]
  }
  RatingSim <- data.frame()
  for(model in 1:length(models)) {
    cat('extracting normalized values:', model,'/',length(models), '.\n')
    
    thismodel = mget(load(paste0(modeldir, models[model])))
    mstr = gsub('.RData', '', models[model])
    trueparams = transformParams(thismodel$bestparams, thismodel$paramNames, trans)
    thisdata = data[data$id==thismodel$id & data$trial_type=='rating', ]
    normV = sapply(baseModel(mstr, thisdata, trueparams, toreturn = 'normV'), paste0, collapse=',')
    chosenNorm = c()
    for(t in 1:nrow(thisdata)) {
      raw = as.numeric(strsplit(thisdata$stars[t], split = ',')[[1]])
      choiceInd = match(thisdata$chosen_rating[t], raw)
      norm = as.numeric(strsplit(normV[t], split = ',')[[1]])
      chosenNorm[t] = norm[choiceInd]
    }
    RatingSim <- rbind(RatingSim, data.frame(id = thisdata$id, 
                                             trial = thisdata$trial, 
                                             meanStarsNoChoice = thisdata$mean_rating_no_choice,
                                             chosen_rating = thisdata$chosen_rating,
                                             chosenNorm = chosenNorm, 
                                             rawV = thisdata$stars, 
                                             normV = normV, 
                                             mType = thismodel$mType))
  }
  
  return(RatingSim)

}
