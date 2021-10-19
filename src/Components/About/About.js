import React from 'react';
import about from '../../img/about.png';
import health from '../../img/health.jpg';
import PageHeader from '../PageHeader/PageHeader';
const About = () => {
	return (
		<div>
			<PageHeader>About Us</PageHeader>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-4">
					<div>
						<img src={about} alt="!" />
					</div>
					<div className="flex items-center">
						<div className="m-2">
							<h4 className="text-2xl text-gray-600">Welcome to Shefa General Hospital</h4>
							<h2 className="text-4xl text-gray-800 my-3">
								Shefa holds the privilage of being Chicago's first choice hospital
							</h2>
							<p className="text-xl text-gray-600 my-3">
								Since its founding we become an integral part of the city, advancing our mission of
								providing access to compassionate care to our communities. Today patients find care that
								combines world-class medicine with compassion.
							</p>
							<ul className="tick-list list-inside">
								<li className="my-2 text-xl text-gray-600">
									Medicenter is a people centered environment – which means you are at the center of
									everything we do and every decision we make.
								</li>
								<li className="my-2 text-xl text-gray-600">
									We are your partner for health, helping your live well by bringing the best in
									medicine and healthcare to your door.
								</li>
								<li className="my-2 text-xl text-gray-600">
									We provide fast, effective and affordable immediate care for non-life threatening
									illnesses. Most patients are seen, treated and released in about 60 minutes.
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* 2nd grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
					<div className="flex items-center">
						<div className="m-2">
							<h4 className="text-2xl text-gray-600">For mom and baby</h4>
							<h2 className="text-4xl text-gray-800 my-3">Leading Edge Care</h2>
							<p className="text-xl text-gray-600 my-3">
								We offer care through delivery and post-natal treatment to ensure you a happy and the
								best possible birthing experience.
							</p>
							<ul className="tick-list list-inside">
								<li className="my-2 text-xl text-gray-600">
									It is the people who make Medicenter what it is and we are extremely proud of the
									archievements of our staff.
								</li>
								<li className="my-2 text-xl text-gray-600">
									No appointment needed, most patients are seen, treated and released in about 60
									minutes. Certified and experienced MD physicians not nurses and on site diagnostic
									tests with lab.
								</li>
								<li className="my-2 text-xl text-gray-600">
									We all work together to help our patients through recovery, providing the best
									possible care.
								</li>
							</ul>
						</div>
					</div>
					<div>
						<img src={health} alt="!" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
