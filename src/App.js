import './App.css';
import Home from './Components/Home/Home';
import ServiceProvider from './context/ServiceProvider';

function App() {
	return (
		<ServiceProvider>
			<Home />
		</ServiceProvider>
	);
}

export default App;
