import React from "react";
import Logo from "../../assets/logo/icon.png";
import "./styles.css"

function home(){
    return(
        <body>
        <header className="cabecalho">
        <img src={Logo} alt="Logotipo TheiaXP" class="cabecalho__logo" />
        <a href="/" class="menu-cabecalho">Home</a>
        <a href="#" class="menu-cabecalho">Members</a>
        </header>

        <h1>Select Scan Type</h1>

        
        
    </body>
    )
}
export default home;