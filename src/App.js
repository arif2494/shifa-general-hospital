import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appoinment from './Components/Appoinment/Appoinment';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ServiceProvider from './context/ServiceProvider';

function App() {
	return (
		<ServiceProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/appoinment">
						<Appoinment />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</ServiceProvider>
	);
}

export default App;
