import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import OverView from '../OverView/OverView';
import Services from '../Services/Services';

const Home = () => {
	return (
		<div>
			{/* banner */}
			<Banner />
			{/* short about  */}
			<HomeAbout />
			{/* all services */}
			<Services />
			{/* simple overview */}
			<OverView />
		</div>
	);
};

export default Home;
