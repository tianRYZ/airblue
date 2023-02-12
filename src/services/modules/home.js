import TRequest from "..";

export function getHomeGoodPriceData() {
  return TRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return TRequest.get({
    url: '/home/highscore'
  })
}


export function getHomeDisscountData() {
  return TRequest.get({
    url: '/home/discount'
  })
}

export function getHomeLongforData() {
  return TRequest.get({
    url: '/home/longfor'
  })
}

export function getHomeHotRecommenddest() {
  return TRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomePlus() {
  return TRequest.get({
    url: '/home/plus'
  })
}