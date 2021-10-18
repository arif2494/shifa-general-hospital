import React from 'react';

const Service = (props) => {
	const { name, img, desc } = props.service;
	return (
		<div className="bg-gray-100 p-4 rounded-2xl">
			<img src={img} alt="!" className="rounded-2xl" />
			<div className="mt-3">
				<h2 className="text-3xl text-gray-700">{name}</h2>
				<p className="text-justify my-3 text-gray-500">{desc.substring(0, 200)}..</p>
				<button className="bg-black flex text-white px-6 py-3 font-medium rounded-2xl">Learn More</button>
			</div>
		</div>
	);
};

export default Service;
