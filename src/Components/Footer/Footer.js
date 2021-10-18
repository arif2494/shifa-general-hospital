import React from 'react';
import logo from '../../img/icons/logo.png';
const Footer = () => {
	return (
		<div className="bg-black text-white">
			<footer className="py-16">
				<div className="container mx-auto">
					<div className="grid grid-cols-4 divide-x-2 divide-yellow-600">
						<div className="px-8">
							<h3 className="text-2xl mb-4">Our Pages</h3>
							<ul className="list-none text-lg">
								<li>Home</li>
								<li>About</li>
								<li>Appoinment</li>
							</ul>
						</div>
						<div className="col-span-2 px-8 flex flex-col items-center">
							<img src={logo} alt="!" className="w-20" />
							<p className="text-justify">
								Shifa General Hospital is one of the largest and most recognized private healthcare
								brands in Bangladesh. Known for its pioneering works in setting-up the first
								super-specialty Cardiac hospital within country. Labaid is also widely acknowledged for
								bringing high quality diagnostic & specialized consultation facilities
							</p>
						</div>
						<div className="px-8 text-right">
							<h3 className="text-2xl mb-4">Quick Contacts</h3>
							<ul className="list-none text-lg">
								<li>
									<a href="tel:215457422">+88 215457422</a>
								</li>
								<li>
									<a href="mailto:shefa@gmail.com">shefa@gmail.com</a>
								</li>
								<li>121 King Street, Dakkhin Badda 3000, Bangladesh</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
