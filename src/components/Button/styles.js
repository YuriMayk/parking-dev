import styled, {css} from "styled-components";

export const Button = styled.button`
   transition: 300ms;
  color: ${(props) => (props.plateTyped ? "#FFFFFF" : "#9B9B9B")};
  /* background-color: ${(props) => (props.plateTyped ? "#A769B2" : "#dadada")}; */
  
  
  width: 312px;
  height: 67px;
  border-radius: 4px;
  margin: 13px auto 0 auto;
  font-size: 15px; //fontstyle Semibold
  cursor: pointer;
  
  ${(props) => (props.typeButton === "Enter") && css`
  background-color: ${(props) => ((props.plateTyped && (props.typeButton === "Enter")) ? "#28DD91" : "#dadada")};
  display: ${(props) =>
    props.visible
      ? "none"
      : "flex; justify-content: center; align-items: center;"};  
  `}

  ${(props) => (props.typeButton === "Pay") && css`
  background-color: ${(props) => ((props.plateTyped && (props.typeButton === "Pay")) ? "#A769B2" : "#dadada")};
  margin: 16px auto;
  `}

  ${(props) => (props.typeButton === "Out") && css`
  margin: 16px auto;
  
  
  ${(props) => ((props.plateTyped && (props.typeButton === "Out"))) && css`
  background-color: transparent;
  border: 2px solid #A769B2;
  color: #A769B2;`}
`}
  

 /*
      ${(props)=> (props.typeButton === "Enter") && `transition: 300ms;
  color: ${(props) => (props.plateTyped ? "#FFFFFF" : "#9B9B9B")};
  background-color: ${(props) => (props.plateTyped ? "#28DD91" : "#dadada")};
  width: 312px;
  height: 67px;
  border-radius: 4px;
  margin: 0 auto;
  font-size: 15px; //fontstyle Semibold
  cursor: pointer;
  
 `}
${(props)=> (props.typebutton === "Pay") && `transition: 300ms;
  color: ${(props) => (props.plateTyped ? "#FFFFFF" : "#9B9B9B")};
  background-color: ${(props) => (props.plateTyped ? "#A769B2" : "#dadada")};
  width: 312px;
  height: 67px;
  border-radius: 4px;
  margin: 0 auto;
  font-size: 15px; //fontstyle Semibold
  cursor: pointer;
  display: ${(props) =>
    props.visible
      ? "none"
      : "flex; justify-content: center; align-items: center;"};`}
 */
  `