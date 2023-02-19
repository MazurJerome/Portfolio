import "../styles/Biographie.css";
import { NavLink } from "react-router-dom";

function Biographie() {
	return (
		<div className="container">
			<div className="titleGlich">
				<h1 className="intro_text">
					<span aria-hidden="true">Je suis MAZUR Jérôme</span>
					Je suis MAZUR Jérôme
					<span aria-hidden="true">Je suis MAZUR Jérôme</span>
				</h1>
			</div>
			<p>
				J'ai toujours été intéressé par la technologie et la programmation,
				c'est pourquoi je me suis tourné vers ce domaine en tant que carrière.
				J'ai acquis de solides compétences en HTML, CSS et JavaScript, et j'ai
				également travaillé avec des frameworks et librairies tels que React,
				Node.js, Express et mongoDB.
			</p>
			<p>
				Au cours de ma formation, j'ai acquis de l'expérience pratique en
				travaillant sur divers &nbsp;
				<NavLink className="navlinkText" to="/Projects" exact="true">
					Projects
				</NavLink>
				, notamment en créant des applications Web à partir de zéro. J'ai
				également suivi des formations supplémentaires pour completer mes
				competences.
			</p>
			<p>
				Je suis actuellement à la recherche d'un poste, avec une preference pour
				le coté front-end avec react et je suis enthousiaste à l'idée de
				travailler dans un environnement de travail stimulant où je pourrai
				mettre en pratique&nbsp;
				<NavLink className="navlinkText" to="/CV" exact="true">
					mes compétences
				</NavLink>
				et continuer à apprendre et à me développer en tant que professionnel.
			</p>
			<p>
				Je suis convaincu que je peux apporter une contribution significative à
				une entreprise en utilisant&nbsp;
				<NavLink className="navlinkText" to="/CV" exact="true">
					mes compétences
				</NavLink>
				pour créer des applications Web efficaces et conviviales. Je suis
				également très motivé et passionné par ce domaine, ce qui me pousse à
				m'impliquer à fond dans chaque projet sur lequel je travaille.
			</p>
			<p>
				Je suis ouvert à toutes les opportunités de carrière dans le
				développement Web et je suis prêt à relever des défis et à apprendre de
				nouvelles compétences pour atteindre mes objectifs professionnels.
			</p>
		</div>
	);
}
export default Biographie;
