import React from "react";

import { Input } from "./styles";

const TextBox = React.forwardRef((props,ref) => {

    return <Input 
    ref={ref} 
    error={props.error} 
    finishRegister={props.finishRegister} 
    visible={props.visible} 
    plateTyped={props.plateTyped} 
    onChange={props.onChange} 
    type={"text"} 
    placeholder={"abc-1234"} 
    maxLength={7} 
    pattern={props.pattern} pagechanged={props.pagechanged}>{props.children}</Input>
})

export default TextBox