import React from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';
import PageHeader from '../PageHeader/PageHeader';

const ServiceDetails = () => {
	const { id } = useParams();
	const { services } = useService();
	const found = services.find((service) => service.id === parseInt(id));
	const { name, desc, img, tests } = found;
	const [ a, b, c, d, e, f ] = tests;
	return (
		<div>
			<PageHeader>Service Details</PageHeader>
			<div className="container mx-auto my-6">
				<div>
					<h1 className="text-4xl text-gray-700 text-center my-6">Read the Service Details</h1>
					<div className="grid grid-cols-2 gap-4">
						<div className="flex justify-center items-center">
							<img src={img} alt="!" className="rounded-2xl" />
						</div>
						<div>
							<h2 className="text-4xl text-gray-600  my-3">{name}</h2>
							<p className="text-lg text-gray-600">{desc}</p>
							<h3 className="text-gray-600 text-3xl my-3">We Offer you these test</h3>
							<ul className="tick-list list-inside list-none text-lg text-gray-600">
								<li>{a}</li>
								<li>{b}</li>
								<li>{c}</li>
								<li>{d}</li>
								<li>{e}</li>
								<li>{f}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
