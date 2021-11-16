import { useEffect, useState } from 'react';

// load service data
const useServices = () => {
	const [ services, setServices ] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/arif2494/hospital-data/5f003b808c2576f71572fa44c1754b1a37199ea4/data.json'
		)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return { services };
};

export default useServices;
