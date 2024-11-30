import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";
import CoffeeCard from "../components/CoffeeCard";


const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				children: [
					{
						path:'/',
						element:<CoffeeCard></CoffeeCard>,
					}
				]
			},
			{
				path: '/addCoffee',
				element: <AddCoffee></AddCoffee>,

			},
			{
				path: 'signIn',
				element: <SignIn></SignIn>,
			},
			{
				path: 'users',
				element: <Users></Users>,
			},
			{
				path: 'signUp',
				element: <SignUp></SignUp>,
			},
		]
	}
])


export default routes;