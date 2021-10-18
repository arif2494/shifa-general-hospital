import React from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
	const { services } = useService();
	return (
		<div className="bg-gray-200 pb-6">
			<div className="container mx-auto">
				<h2 className="text-black py-3 px-6 mb-3 text-4xl  rounded-fulls text-center my-6">
					Our Different type of services
				</h2>
				<div className="grid grid-cols-3 gap-4">
					{services.map((service) => <Service key={service.id} service={service} />)}
				</div>
			</div>
		</div>
	);
};

export default Services;
