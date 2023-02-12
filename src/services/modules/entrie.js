import TRequest from "..";

/**
 * 
 * @param {*} offset     当前页数 
 * @param {*} size        多少条/页
 * @returns 
 */
export function getCurrentPageData({ offset = 0, size = 20 }) {
  return TRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}