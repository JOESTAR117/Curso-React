import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

import { Rodape } from "./FooterStyled";

function Footer(){
    return(
        <Rodape>
            <ul>
                <li><AiOutlineFacebook /></li>
                <li><AiOutlineInstagram /></li>
                <li><AiOutlineGithub /></li>
                <li><AiOutlineLinkedin /></li>
            </ul>
            <p>Rodape</p>
        </Rodape>
    )
}

export default Footer