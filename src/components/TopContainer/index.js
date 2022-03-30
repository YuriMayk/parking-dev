import React from "react";

import { Container } from "./styles";
import ImageParking from "../../assets/avatar_parking.png"
import ImageMenu from "../../assets/menu.png"

function openMenu () {

}


function TopContainer (){
    return <Container><img src={ImageParking} alt="logo" /><button onClick={openMenu}><img src={ImageMenu} alt="menu" /></button></Container>
}

export default TopContainer