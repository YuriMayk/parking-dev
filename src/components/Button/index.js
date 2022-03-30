import React from "react";

import { Button as Btn } from "./styles";



const Button = React.forwardRef((props,refButton)=> {
    return <Btn ref={refButton} typeButton={props.typeButton}error={props.error} finishRegister={props.finishRegister} visible={props.visible} plateTyped={props.plateTyped} {...props}>{props.children}</Btn>
}) 

    

export default Button