import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appoinment from './Components/Appoinment/Appoinment';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import ServiceProvider from './context/ServiceProvider';

function App() {
	return (
		<ServiceProvider>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<PrivateRoute path="/services/:id">
							<ServiceDetails />
						</PrivateRoute>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/appoinment">
							<Appoinment />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="*">
							<PageNotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</ServiceProvider>
	);
}

export default App;
