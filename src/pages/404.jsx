import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import "../styles/Error.css";

function Error() {
	return (
		<div>
			<Header accLink="show" aProposLink="show" />
			<div className="error-container">
				<h1 className="error">404</h1>
				<p className="error-message">
					Oups! La page que vous demandez n'existe pas.
				</p>
				<NavLink className="error-home" to="/" exact="true">
					Retourner sur la page d’accueil
				</NavLink>
			</div>
			<Footer />
		</div>
	);
}

export default Error;
