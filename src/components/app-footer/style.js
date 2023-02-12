import styled from "styled-components";

export const FooterWrapper = styled.div`
margin-top: 100px;
border-top: 1px solid #ebebeb;
.wrapper{
  width: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 48px 24px;
}
  .service{
    display: flex;
    .item{
      flex: 1;
      .name{
        margin-bottom: 16px;
      }
      .list {
        .iteoo{
          margin-top:6px;
          color: #727272;
          font-weight: 600;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }

  .statement{
    margin-top: 32px;
    border-top: 1px solid #ebebeb;
    padding: 16px;
    color: #767676;
    text-align: center;
  }
`