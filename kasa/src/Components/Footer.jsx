import logo from "../assets/Logo/logofooter.png";

function Footer(){
    return(
        <footer>
            <div className="footer">
                <img className="logo-footer" src={logo} alt="Logo de l'entreprise"/>
                <p>@2025 kasa. All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;

// Ci-dessus définition du composant Footer