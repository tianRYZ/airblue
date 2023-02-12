import {
  getHomeGoodPriceData, getHomeHighScoreData, getHomeDisscountData,
  getHomeHotRecommenddest, getHomeLongforData, getHomePlus
} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDisscountData().then(res => {
    dispatch(changeDisscountAction(res))
  })
  getHomeHotRecommenddest().then(res => {
    dispatch(changeHotRecommendDestinationAction(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changLangforInfoAction(res))
  })
  getHomePlus().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hoteRecommentInfo: {},
    langforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDisscountAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendDestinationAction(state, { payload }) {
      state.hoteRecommentInfo = payload;
    },
    changLangforInfoAction(state, { payload }) {
      state.langforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    }
  },
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction,
  changeDisscountAction, changeHotRecommendDestinationAction,
  changLangforInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer