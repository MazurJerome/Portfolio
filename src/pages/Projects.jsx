import Header from "../components/Header";
import Footer from "../components/Footer";
import Bank from "../BDD/bank.json";
import "../style/Projects.css";

function Projects() {
	const BDD = Bank;

	return (
		<div>
			<Header accLink="show" aProposLink="hide" />
			<div>
				<h1>Projects</h1>
				<div>
					{BDD.map((element, index) => (
						<div className="contenaire">
							<div className="details">
								<a href={element.url}>
									<h2 className="titleBox" key={`h2 ${element.id} ${index}`}>
										{element.name}
									</h2>
								</a>
								<p className="description" key={`p ${element.id} ${index}`}>
									{element.description}
								</p>
							</div>
							<div className="illustration">
								<img
									className="imgGallery"
									src={`/assets/images/${element.name}.png`}
									alt={element.name}
									key={`img ${element.id} ${index}`}
								/>
								<p>{element.date}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Projects;
