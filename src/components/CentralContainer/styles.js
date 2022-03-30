import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  width: 344px;
  height: 51px;
  background: #ffffff;
  border-radius: 0px 0px 4px 4px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ContainerError = styled.div`
  transition: 4000ms;
  width: 312px;
  height: 32px;
  background-color: #ff174526;
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;
  align-items: center;
  margin: 0 auto 16px auto;
  border-radius: 4px;

  ${(props) =>
    props.error === false
      ? css`
          transition: 4000ms;
          display: none;
        `
      : css`
          display: flex;
        `};
`;

export const ErrorImage = styled.img`
  height: 20px;
  width: 20px;
`;

export const ImageLoading = styled.img`
  margin: 10vh auto 0 auto;
  width: 25%;
  transition: 3000ms;
  display: ${(props) => (props.visible ? "initial" : "none")};
  ${(props) =>
    props.finishRegister &&
    css`
      display: none;
    `};
  ${(props) =>
    (props.finishRegister && (props.pagechanged !== true))
      ? css`
          animation: none;
        `
      : css`
          animation: rotation 2s infinite linear;

          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(359deg);
            }
          }
        `};
        ${(props) =>
    props.pagechanged === true
      ? css`
          display: none;
        `
      : ``}
`;
export const ImageFinish = styled.img`
  margin: 10vh auto 0 auto;
  width: 25%;
  transition: 1000ms;
  display: ${(props) => (props.finishRegister ? "initial" : "none")};
  ${(props) =>
    props.pagechanged === true
      ? css`
          display: none;
        `
      : `display:visible`}

  ${(props) =>
    props.finishRegister
      ? `animation:none`
      : ` animation:rotation 2s infinite linear;
    
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }`};
`;

export const Container = styled.div`
  width: 344px;
  background: #ffffff;
  border-radius: 0px 0px 4px 4px;
  margin: 20vh auto 20vh auto;
  display: flex;
  flex-direction: column;
  transition: 300ms;
  padding-bottom: 40px;
  ${(props) =>
    props.selectedPage === "selected" &&
    css`
      margin: 13vh auto 20vh auto;
    `}

  p {
    font-weight: 400, Regular;
    font-style: normal;
    font-size: 16px;
    color: #9b9b9b;
    display: flex;
    margin: 7vh 0 7px 16px;
    
  }

  button#exit {
    border: #a769b2;
  }
`;

export const Paragraph = styled.p`
  ${(props) =>
    props.visible &&
    `
  font-style: Regular;
  font-size: 16px;
  line-height: 100%;
  justify-content: center;
  color: #4A4A4A;`}

${(props)=> (props.pagechanged)&& css`
justify-content: flex-start;
margin-bottom: 7px;
`}


`;
export const P = styled.span`
  word-wrap: break-word;
  margin-left: 7px;
  font-size: 12px;
  color: #ff1745ad;
`;

export const UnderButton = styled.button`
  transition-duration: 300ms;
  ${(props) =>
    props.id === "under-selected"
      ? `background-color: #4dd0e1;
    width: 172px;
    height: 3px;`
      : `
    background-color: #f2f2f2;
    width: 172px;
    height: 3px;`};
  /* 
   ${(props) =>
    props.isUnder
      ? `
background-color: #4dd0e1;
    width: 172px;
    height: 3px;
    
`
      : ` background-color: #f2f2f2;
    width: 172px;
    height: 3px;
    `} */
`;

export const Button = styled.button`
  width: 172px;
  height: 48px;
  transition-duration: 300ms;

  ${(props) =>
    props.id === "selected"
      ? `color: #4dd0e1;
    background-color: #ffffff; `
      : ` color: #9b9b9b;
    background-color: #f2f2f2;`}
`;

export const Input = styled.input`
  background-color: #fffbe6;
  color:#9B9B9B;
  width: 312px;
  height: 67px;
  border-radius: 4px;
  margin: 0 auto 13px auto;
  font-size: 24px; //fontstyle Regular
  line-height: 100%;
  text-align: Center;
  cursor: pointer;
  border: 1px solid #CCCCCC;
  text-transform: uppercase;
 // ${props => props.visible ? "visibility:hidden" : "visibility:hidden"};
  ${(props)=> (props.pagechanged && (props.plateTyped === false))&& css` visibility:visible;`}
  
  ${props => ((props.plateTyped) && (props.error === false)) && css`color:#000000`};
  
    
  ${(props)=> ((props.plateTyped) && (props.error === true))&& css`color:#FF0068`};

`;
