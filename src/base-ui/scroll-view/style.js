import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
.scroll{
  overflow: hidden;
  .scroll-content{
    display: flex;
    transition:transform 200ms ease;
  }
}


.control{
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0,0,0,.08);
  background-color: rgba(255,255,255,0.9);
  box-shadow: 0 0 0 1px transparent,0 0 0 4px transparent,rgba(0,0,0,0.18);;
  transition: transform 0.25s ease;
  cursor: pointer;
  &.left{
    left: 0;
    top:50%;
    transform: translate(-50%,-50%);
  }
  &.right{
    right:0;
    top:50%;
    transform: translate(50%,-50%);
  }
  &:hover{
    background-color: white;
  }
}

`