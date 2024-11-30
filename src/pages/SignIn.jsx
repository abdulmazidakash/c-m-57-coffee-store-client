import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
	return (
		<div>
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col">
				<div className="text-center">
				<h1 className="text-5xl font-bold">Sign In!</h1>
				<p className="py-6">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
					quasi. In deleniti eaque aut repudiandae et a id nisi.
				</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<form  className="card-body">

					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input type="email" placeholder="email" name='email' className="input input-bordered" required />
					</div>
					<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input type="password" placeholder="password" name='password' className="input input-bordered" required />
					<label className="label">
						<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
					</label>
					</div>
					<div className="form-control mt-6">
					<button className="btn bg-gradient-to-l from-sky-900 to-gray-700 text-white">Sign In</button>
					</div>
					<p>New to coffee drinker: <Link className='text-blue-800 font-semibold' to='/signUp'>Sign Up</Link></p>
				</form>
				</div>
			</div>
		</div>
	</div>
	);
};

export default SignIn;