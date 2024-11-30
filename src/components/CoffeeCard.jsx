import React from 'react';

const CoffeeCard = () => {
	return (
		<div className="card text-white md:card-side lg:card-side bg-gradient-to-b from-gray-800 to-sky-600 font-semibold shadow-xl">
		{/* <figure>
			<img
				src={photo}
				alt="coffee" />
		</figure>
		<div className="flex w-full m-4 items-center justify-between">
			<div className='space-y-2'>
				<p>Name: {name}</p>
				<p>Chef: {chef}</p>
				<p>Taste: {taste}</p>
			</div>
			<div className="card-actions justify-end join join-vertical">
				<button className="btn join-item">View</button>
				<Link to={`/updateCoffee/${_id}`}>
					<button className="btn join-item">Update</button>
				</Link>
				<button
					onClick={() => handleDelete(_id)}
					className="btn join-item bg-red-500">Delete</button>
			</div>
		</div> */}
		<h1 className='text-6xl'>coffee card</h1>
	</div>
	);
};

export default CoffeeCard;