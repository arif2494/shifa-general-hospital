import React from 'react';

const Service = (props) => {
	const { name, img } = props.service;
	return (
		<div>
			<img src={img} alt="!" />
			<h2>{name}</h2>
		</div>
	);
};

export default Service;
