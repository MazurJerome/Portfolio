import Header from "../components/Header";
import Footer from "../components/Footer";
import Biographie from "../components/Biographie";

function Home() {
	return (
		<div>
			<Header accLink="hide" />
			<Biographie />
			<Footer />
		</div>
	);
}

export default Home;
