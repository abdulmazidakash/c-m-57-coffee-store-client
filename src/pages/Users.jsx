import React from 'react';

const Users = () => {
	return (
		<div className="container mx-auto mt-2 mb-8">
			{/* <button className="text-2xl font-semibold text-center my-4 btn bg-gradient-to-l from-sky-800 to-rose-800 text-white">Users: {users.length}</button> */}
			<div className="overflow-x-auto bg-gradient-to-r from-slate-900 to-sky-800 font-semibold rounded-lg text-white">
				<table className="table text-center">
					{/* head */}
					<thead className="font-bold bg-gradient-to-l from-purple-900 to-violet-900">
					<tr className="text-white">
						<th>Sl</th>
						<th>Name</th>
						<th>Email</th>
						<th>Created Time</th>
						<th>Login</th>
						<th>Action</th>
					</tr>
					</thead>
					<tbody>
					{/* row 1 */}
					{/* {
						users.map(user => <tr key={user._id}>
							<th>{user._id.slice(20,26)}</th>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.createdAt}</td>
							<td>{user.lastSignInTime}</td> */}
							<td className="space-x-2">
								<button className="btn btn-sm">E</button>
								<button className="btn btn-sm">X</button>
							</td>
						{/* </tr>) */}
					{/* } */}
					</tbody>
				</table>
			</div>

		</div>
	);
};

export default Users;