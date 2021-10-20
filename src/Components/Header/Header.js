import React from 'react';
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import OffcanvasMenu from 'react-offcanvas-menu-component';


const Header = () => {
	const { user ,logOut} = useAuth()
	const photo = user?.photoURL
		const location = useLocation();
	return (
		// navbar
		<div className=" bg-black sticky top-0">
			<header className="mx-auto container">
				<nav className='py-6'>
					<ul className="list-none flex justify-between">
						<div className="inline-block ">
						<div className='hidden lg:block '>
								<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-4" to="/">
									Home
								</NavLink>
							</li>
							<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-4" to="/about">
									About
								</NavLink>
							</li>
							<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-4" to="/appoinment">
									Appoinment
								</NavLink>
							</li>
						{
							user?.email ? 	<li className="inline-block   text-2xl text-white ">
								<button className='hover:bg-gray-600 px-6 ' onClick={logOut}>Logout</button>
							</li> : 	<li className="inline-block  ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-4" to="/login">
									Login
								</NavLink>
							</li>
						}
							<li className="inline-block   text-2xl text-white px-6">
								
									{user?.displayName}
							
							</li>
						</div>
						</div>
						<div className="inline-block flex items-center">
							<li className="inline-block ">
								<NavLink className=" hover:bg-gray-600 text-2xl text-white px-6 py-4" to="/">
									SHEFA GENERAL HOSPITAL
								</NavLink>
							</li>
							{/* show photo if have */}
							{
								photo && <li className="inline-block ">
								<img src={photo} alt="!" className='w-12 rounded-full' />
							</li>
							}
						</div>
					</ul>
				</nav>
			</header>
				{/* off canvas */}
			<div className="lg:hidden block">
				<OffcanvasMenu
					Link={Link} // react-router-dom Link
					location={location} // location parameter passed from Router
					config={{
						width: 300, // you can modify default width
						push: true // if you want to enable push feature
					}}
					// this is where you create your menu items
					menu={[
						// basic menu item
						{ text: 'Home', link: '/' },
						{ text: '	Appoinment', link: '/appoinment' },
						{ text: 'About', link: '/about' },
						{ text: '	Login', link: '/login' },
	
					]}
				
				/>
			</div>
		</div>
	);
};

export default Header;
