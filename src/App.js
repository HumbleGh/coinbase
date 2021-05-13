import Bluebar from "./components/Bluebar";
import Getstarted from "./components/GetStarted";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import CoinTable from "./components/CoinTable";
import Earn from "./components/Earn";
import Portfolio from "./components/Portfolio";
import Startearning from "./components/Startearning"

function App() {
	return (
		<div className="bg-white h-screen">
			<NavBar />
			<Hero />
			<CoinTable />
			<Earn />
			<Portfolio />
			<Bluebar />
			<Getstarted />
			<Startearning />
		</div>
	);
}

export default App;
