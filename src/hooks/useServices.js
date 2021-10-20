import { useEffect, useState } from 'react';

// load service data
const useServices = () => {
	const [ services, setServices ] = useState([]);
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/arif2494/hospital-data/main/data.json')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return { services };
};

export default useServices;
