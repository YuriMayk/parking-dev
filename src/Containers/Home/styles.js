import styled, { css } from "styled-components";

export const ContainerConfim = styled.div`
  width: 339px;
  height: 294px;
  background-color: white;
  position: absolute;
  border-radius: 0px 0px 4px 4px;
  margin: 10vh 7vw;
  display: flex;
  flex-direction: column;
  transition: 300ms;
  padding-bottom: 40px;
  z-index: 50;
  


  `;

export const ParagraphConfirm = styled.p`
      margin: auto;
    text-align: center;
    color: #4a4a4a;


    ${(props) =>
    props.className === "Plate" &&
      css`
      margin: 3px auto 24px auto;
        font-size: 38px;
        line-height: 100%;
        color: #00bcd4;
      `}

`