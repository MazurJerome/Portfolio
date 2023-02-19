import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<p>Portfolio développeur web</p>
			<nav className="navCenter">
				<NavLink className="navbar" to="/" exact="true">
					Accueil
				</NavLink>
				<NavLink className="navbar" to="/Contact" exact="true">
					Contact
				</NavLink>
				<NavLink className="navbar" to="/CV" exact="true">
					CV
				</NavLink>
				<NavLink className="navbar" to="/Projects" exact="true">
					Projects
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
