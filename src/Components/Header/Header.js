import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const { user ,logOut} = useAuth()
	return (
		<div className=" bg-black sticky top-0">
			<header className="mx-auto container">
				<nav>
					<ul className="list-none flex justify-between py-6">
						<div className="inline-block">
							<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-6" to="/">
									Home
								</NavLink>
							</li>
							<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-6" to="/about">
									About
								</NavLink>
							</li>
							<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-6" to="/appoinment">
									Appoinment
								</NavLink>
							</li>
						{
							user?.email ? 	<li className="inline-block   text-2xl text-white ">
								<button className='hover:bg-gray-600 px-6 ' onClick={logOut}>Logout</button>
							</li> : 	<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-6" to="/login">
									Login
								</NavLink>
							</li>
						}
							<li className="inline-block   text-2xl text-white px-6">
								
									{user?.displayName}
							
							</li>
						</div>
						<div className="inline-block">
							<li className="inline-block ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-6" to="/">
									SHEFA GENERAL HOSPITAL
								</NavLink>
							</li>
						</div>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
