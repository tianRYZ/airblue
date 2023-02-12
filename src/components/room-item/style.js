import styled from "styled-components";

export const ItemWrapper = styled.div`
/* 由于 不同情况下 获取的接口展示 每一行(排) 展示的数据个数 可能为 3/4/5 因此width不能固定 这里需要动态的传参 如果没有传 则给其一个默认的值 */
/* width: 25%; */
width: ${props => props.ItemWidth};
box-sizing: border-box;
padding:8px;
/* flex-shrink: 0;  */
/* 不希望被压缩 */
.inner{
  width: 100%;
}

.cover{
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    /* paddign-top 是相对于宽度的66.66% */
    border-radius: 3px;
    overflow: hidden;

    > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}
 
.swiper{
  position: relative;
  cursor: pointer;
  &:hover{
    .control{
      display: flex;
    }
  }
.control{
 position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  display: none;
  justify-content: space-between;
  bottom: 0;
  color: #fff;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 83px;
      height: 100%;
       background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      &.right{
      background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      }
    }
  }

.indicator{
 position: absolute;
   z-index: 9;
   width: 30%;
   left: 0;
   right: 0;
   bottom: 10px;
   margin: 0 auto;
   .dot-item{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%; // 显示指示器的个数 
    .dot{
      width: 6px;
      height: 6px;
      background-color: #fff;
      border-radius: 50%;
    
        &.active {
          width: 8px;
          height: 8px;
          background-color: red;
        }
     }
    }
  }
}

.desc{
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color:${props => props.verifyColor}
  }

  .name{
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;  
    text-overflow: ellipsis; 
    /* 超出内容以省略号代替 */
    display: -webkit-box; 
    /* 以网页盒子模型显示元素 */
    -webkit-line-clamp: 2;  
    /* 限制最多显示2行的内容 */
    -webkit-box-orient: vertical;
    /* 设置网页盒子为垂直方向 */
  }
  .price{
    margin: 8px 0;
  }


 .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`