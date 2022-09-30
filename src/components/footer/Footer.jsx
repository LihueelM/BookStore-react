import {AiOutlineInstagram , AiOutlineGithub,AiOutlineLinkedin} from "react-icons/ai"
import './Footer.css'
const Footer = () => {

    return(
        <footer>
            <div className="informacion-personal">
                <h2>Front end developer</h2>
                <h4>© 2022 Lihueel Mansilla</h4>
            </div>
            <div className="links">
                <h3>Redes</h3>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/lihumansilla/"><AiOutlineInstagram /></a>
                    </li>
                    <li>
                        <a href="https://github.com/LihueelM"><AiOutlineGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lihueelemansilla/"><AiOutlineLinkedin /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )

}

export default Footer;