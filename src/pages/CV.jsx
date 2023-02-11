import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/CV.css";

function CV() {
	return (
		<div>
			<Header accLink="show" aProposLink="hide" />
			<div>
				<img className="imgCV" src={`/assets/images/CV.png`} alt="" />
			</div>
			<Footer />
		</div>
	);
}

export default CV;
