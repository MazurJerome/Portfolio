import "../style/Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
	//recuperation des propos pour savoir si on affiche les deux liens
	const accLink = props.accLink;
	const aProposLink = props.aProposLink;

	if (accLink === "hide") {
		return (
			<header>
				<nav className="navCenter">
					<NavLink className="navbar-APropos" to="/Contact" exact="true">
						Contact
					</NavLink>
					<NavLink className="navbar-APropos" to="/CV" exact="true">
						CV
					</NavLink>
					<NavLink className="navbar-APropos" to="/Projects" exact="true">
						Projects
					</NavLink>
				</nav>
			</header>
		);
	}
	if (aProposLink === "hide") {
		return (
			<header>
				<nav className="navCenter">
					<NavLink className="navbar-Accueil" to="/" exact="true">
						Accueil
					</NavLink>
				</nav>
			</header>
		);
	}

	if (accLink === "show" && aProposLink === "show") {
		return (
			<header>
				<nav>
					<NavLink className="navbar-Accueil" to="/" exact="true">
						Accueil
					</NavLink>
					<NavLink className="navbar-APropos" to="/APropos" exact="true">
						A Propos
					</NavLink>
				</nav>
			</header>
		);
	}
}
export default Header;
