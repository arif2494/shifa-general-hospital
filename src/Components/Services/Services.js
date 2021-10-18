import React from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
	const { services } = useService();
	return (
		<div className="bg-gray-200">
			<div className="container mx-auto">
				<h2 className="text-black py-3 px-6 mb-3 text-4xl  rounded-fulls text-center my-6">
					Our Different type of services
				</h2>
				<div>{services.map((service) => <Service service={service} />)}</div>
			</div>
		</div>
	);
};

export default Services;
