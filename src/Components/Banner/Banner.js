import React from 'react';

const Banner = () => {
	return (
		<div className="hero-banner flex items-center justify-center flex-col">
			<h2 className="bg-black text-white py-3 px-6 mb-3 text-4xl bg-opacity-50 rounded-full">We Provide Total</h2>
			<h2 className="bg-green-500 text-white py-3 px-6 mb-3 text-4xl bg-opacity-50 rounded-full">
				Health Care Solution
			</h2>
			<p className="font-medium text-lg">
				Every day we try to saves lives who believes on us. Your health is our responsibility.
			</p>
		</div>
	);
};

export default Banner;
