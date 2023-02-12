import styled from "styled-components"


export const HeaderWrapper = styled.div`
  /* display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box; */
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 19;
    transition: all 250ms ease; //背景切换时动画
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? "rgba(238,238,238,0)" : "rgba(238,238,238,1)"};
    background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
    .top {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 24px;
   }
  }

  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }
`

// 记得给header添加头部固定 z-index设置

export const SearchAreaholder = styled.div`
height:${props => props.isSearch ? "100px" : "0"};
  transition: height 250ms ease;
`