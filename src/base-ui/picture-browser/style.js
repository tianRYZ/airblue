import styled from "styled-components";


export const BrowserWrapper = styled.div`
position: fixed;
z-index: 999;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgb(33,33,33);
opacity: 1;
display: flex;
flex-direction: column;
/* 为了实现点击图片进来之后 中间是自适应的 上下则固定 需要flex
 */
.top{
  position: relative;
  height: 86px;
  .close {
    position: absolute;
    top: 15px;
    right: 25px;
  }
}

.picturelist{
position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 /* 这里加flex 是为了让picc中的图片居中 */
 flex: 1;
 overflow: hidden;
  .control {
   position: absolute;
   z-index: 1;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   display: flex;
   justify-content: space-between;
   color: #fff;
   .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 74px;
   }
  }
 .piccu{
 position: relative;
 height: 100%;
 overflow: hidden;
 width: 100% !important;
 max-width: 105vh !important;
 img {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   margin: 0 auto;
   height: 100%;
   user-select: none;
  }
  }

  /* 过度动画 */
   .fade-enter {
    transform: translate(${props => props.isNext ? "100%" : "-100%"});
    opacity: 0;
   }

  .fade-enter-active {
    opacity: 1;
    transform: translate(0);
    transition: all 150ms ease;
   }

   .fade-exit {
     opacity: 1;
   }

  .fade-exit-active {
    opacity: 0;
    transition: all 150ms ease;
  }
}
.preview{
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 10px;
  .info{
    position: absolute;
    bottom: 20px;
    max-width: 105vh;
    color: #fff;
    .desc{
      display: flex;
      justify-content: space-between;
      .toggle{
        cursor: pointer;
      }
    }
  .viewlist{
    margin-top: 3px;
    overflow: hidden;
    transition: height .3s ease;
    .item{
      margin-right: 15px;
      cursor: pointer;
      img{
        height: 67px;
        opacity: .5;
      }
      &.active{
        img{
          opacity: 1;
        }
      }
    }
  }
  }
}
`