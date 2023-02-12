import styled from "styled-components";

export const SectionWrapper = styled.div`
display: flex;
width: 850px;
height: 66px;
border-radius:32px;
border: 1px solid #ddd;
background-color: #fff;
.item{
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 32px;
  .info{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 0 32px;
    cursor: pointer;
    .title{
      font-size: 12px;
      font-weight: 800;
      color: #222;
      padding-bottom: 2px;
    }
    .desc{
      font-size: 14px;
      color: #666;
    }
  }
      .divider {
      height: 32px;
      width: 1px;
      background-color: #ddd;
    }

    &:hover {
      background-color: #eee;
    }
}
`