import React from 'react';
import PageHeader from '../PageHeader/PageHeader';

const Appoinment = () => {
	return (
		<div>
			<PageHeader>Make an appoinment</PageHeader>
			<div className="container mx-auto">
				<h2 className="text-2xl text-gray-600 text-center my-6">Please submit this from for your appoinment</h2>
				<div className="my-6">
					<section className="text-gray-600 body-font ">
						<div className="px-5 ">
							<div className="lg:w-1/2 md:w-2/3 mx-auto">
								<div className="flex flex-wrap -m-2">
									<div className="p-2 w-1/2">
										<div className="">
											<label htmlFor="name" className="leading-7 text-sm text-gray-600">
												Name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
											/>
										</div>
										<div className="">
											<label htmlFor="phone" className="leading-7 text-sm text-gray-600">
												Phone
											</label>
											<input
												type="number"
												id="phone"
												name="phone"
												className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
											/>
										</div>
									</div>
									<div className="p-2 w-1/2">
										<div className="">
											<label htmlFor="email" className="leading-7 text-sm text-gray-600">
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
											/>
										</div>
										<div className="">
											<label htmlFor="date" className="leading-7 text-sm text-gray-600">
												Appoinment Date
											</label>
											<input
												type="date"
												id="date"
												name="date"
												className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
											/>
										</div>
									</div>
									<div className="p-2 w-full">
										<div className="">
											<label htmlFor="message" className="leading-7 text-sm text-gray-600">
												Message
											</label>
											<textarea
												id="message"
												name="message"
												className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
											/>
										</div>
									</div>
									<div className="p-2 w-full">
										<button className="flex mx-auto bg-black  text-white px-6 py-3 font-medium ">
											Book Your Appoinment
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Appoinment;
