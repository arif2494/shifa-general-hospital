import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PageHeader from '../PageHeader/PageHeader';

const ServiceDetails = () => {
	const [ service, setService ] = useState({});
	const { id } = useParams();
	useEffect(
		() => {
			fetch('https://raw.githubusercontent.com/arif2494/hospital-data/main/data.json')
				.then((res) => res.json())
				.then((data) => {
					const d = data?.find(t=>t.id === parseInt(id))
					setService(d)
				});
		},
		[ id ]
	);


	return (
		<div>
			<PageHeader>Service Details</PageHeader>
			<div className="container mx-auto my-6">
				<div>
					<h1 className="text-4xl text-gray-700 text-center my-6">Read the Service Details</h1>
					<div className="grid grid-cols-2 gap-4">
						<div className="flex justify-center items-center">
							<img src={service?.img} alt="!" className="rounded-2xl" />
						</div>
						<div>
							<h2 className="text-4xl text-gray-600  my-3">{service?.name}</h2>
							<p className="text-lg text-gray-600">{service?.desc}</p>
							<h3 className="text-gray-600 text-3xl my-3">We Offer you these test</h3>
							<ul className="tick-list list-inside list-none text-lg text-gray-600">
								<li>{service?.tests?.one}</li>
								<li>{service?.tests?.two}</li>
								<li>{service?.tests?.three}</li>
								<li>{service?.tests?.four}</li>
								<li>{service?.tests?.five}</li>
								<li>{service?.tests?.six}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
