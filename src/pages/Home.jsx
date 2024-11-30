import React from 'react';
import { Outlet } from 'react-router-dom';
import AddCoffee from '../components/AddCoffee';
import CoffeeCard from '../components/CoffeeCard';

const Home = () => {
	return (
		<div>
			{/* Banner  */}
			{/* Heading  */}
			{/* Dynamic Nested Components  */}
	
			<div>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Home;