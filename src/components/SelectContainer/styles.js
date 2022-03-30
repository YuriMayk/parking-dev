import styled from "styled-components";

export const Container = styled.div`
  width: 344px;
  height: 51px;
  background: #ffffff;
  border-radius: 0px 0px 4px 4px;
  margin: 20vh auto 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
