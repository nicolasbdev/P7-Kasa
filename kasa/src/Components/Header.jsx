import Logo from"../assets/Logo/Logo.png"
import { NavLink } from "react-router-dom"

function Header() {
	return(
		<header>
			<div>
				<img className="logo" src={Logo} />
			</div>
			<nav>
				<ul className="nav-bar">
					<NavLink to="/" className = {({isActive}) => (isActive ? "underline" : "")}>            
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to = "/about" className = {({isActive}) => (isActive ? "underline" : "")}>
                        <li>A Propos</li></NavLink>

				</ul>
			</nav>
		</header>	
	);
}

export default Header