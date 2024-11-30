import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
	return (
		<div>
			{/* Navbar  */}
			<div>
				<Navbar></Navbar>
			</div>
			{/* Dynamic Section  */}
			<div className=''>
				<Outlet></Outlet>
			</div>
			{/* Footer  */}
			<div>
				<Footer></Footer>
			</div>

		</div>
	);
};

export default MainLayout;