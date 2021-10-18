import React from 'react';
import doctor from '../../img/doctor-potrait.png';
const HomeAbout = () => {
	return (
		<div>
			<div className="container mx-auto my-4">
				<div className="grid grid-cols-2">
					<div className="flex items-center flex-col justify-center w-10/12 text-center">
						<h2 className="text-3xl font-medium text-gray-500">About</h2>
						<h2 className="text-5xl font-medium my-3 text-gray-600">Shifa General Hospital</h2>
						<p className="italic text-gray-400 mb-3">
							One of the world's leading hospitals providing safe & compassionate care at its best for
							everyone.
						</p>
						<p className="text-gray-600 text-lg mb-3">
							Shifa is one of the largest and most recognized private healthcare brands in Bangladesh.
							Known for its pioneering works in setting-up the first super-specialty Cardiac hospital
							within country. Shifa is also widely acknowledged for bringing high quality diagnostic &
							specialized consultation facilities under a single roof through its now ubiquitous centers
							in all corners of Bangladesh. Around 2.1
						</p>
						<button className="bg-black flex text-white px-6 py-3 font-medium ">Read More</button>
					</div>
					<div className="flex items-center  justify-center ">
						<img src={doctor} alt="!" className="h-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;
