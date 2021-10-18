import React from 'react';
import patient from '../../img/icons/patient.png';
import doctor from '../../img/icons/doctor.png';
import nurse from '../../img/icons/nurse.png';
import lab from '../../img/icons/test-tube.png';
const OverView = () => {
	return (
		<div className="overView">
			<div className="container mx-auto">
				<div className="grid-cols-4 grid  justify-items-center">
					<div className="mt-24  flex items-center flex-col justify-center ">
						<img src={patient} alt="!" className="w-20" />
						<p className="text-4xl font-medium text-white mt-2">5K Patient Treated</p>
					</div>
					<div className="mt-24  flex items-center flex-col justify-center ">
						<img src={doctor} alt="!" className="w-20" />
						<p className="text-4xl font-medium text-white mt-2">50 Doctor</p>
					</div>
					<div className="mt-24  flex items-center flex-col justify-center ">
						<img src={nurse} alt="!" className="w-20" />
						<p className="text-4xl font-medium text-white mt-2">76 Staff</p>
					</div>
					<div className="mt-24  flex items-center flex-col justify-center ">
						<img src={lab} alt="!" className="w-20" />
						<p className="text-4xl font-medium text-white mt-2">3 Stablished Lab</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverView;
