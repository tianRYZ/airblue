import { getCurrentPageData } from '@/services/modules/entrie'
import * as actionTypes from './constant'

export const chngeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_lIST,
  roomList
})


export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})


// 蒙版加载中 
export const changeLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_LOADING,
  isLoading
})

// 这里是 网络请求 异步操作

export const fetchEntrieRoomListAction = (page = 0) => {
  return async dispatch => {
    dispatch(changeLoadingAction(true))
    const res = await getCurrentPageData(page * 20)
    dispatch(changeLoadingAction(false))
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(chngeCurrentPageAction(page))
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}


// export const fetchEntrieRoomListAction = () => {
//   return async (dispatch, getState) => {
//     const currentPage = getState().entrie.currentPage
//     //  拿到reducer中的当前页数
//     console.log(currentPage);
//     //这里传入的页数不能为死的
//     const res = await getCurrentPageData(currentPage)
//     console.log(res);
//     // 相当于变为同步形式了更加优雅
//     const roomList = res.list;
//     const totalCount = res.totalCount;
//     dispatch(changeRoomListAction(roomList))
//     dispatch(changeTotalCountAction(totalCount))
//   }
// }
