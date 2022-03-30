import styled, {css} from "styled-components";

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

