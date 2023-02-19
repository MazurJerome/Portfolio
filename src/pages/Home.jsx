import Header from "../components/Header";
import Footer from "../components/Footer";
import Biographie from "../components/Biographie";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<Header />
			<Biographie />
			<Footer />
		</div>
	);
}

export default Home;
