import { createSlice } from "@reduxjs/toolkit";
/**
 * 全局页面共有一个AppHeader  但每个界面的header样式不同因此为了区分
 *  将其 固定|不固定 ,是发为首页状态保存在redux中
 */
const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      isHome: false,
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const {
  changeHeaderConfigAction
} = mainSlice.actions;

export default mainSlice.reducer