import * as actionTypes from './constant'

const initialState = {
  detailInfo: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return { ...state, detailInfo: action.detailInfo }
    default:
      return state;
  }
}


export default reducer
