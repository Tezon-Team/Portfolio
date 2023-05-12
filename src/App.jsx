import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import GlobalLayout from './pages/GlobalLayout';
import Home from './pages/Home';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<GlobalLayout />}>
				<Route index element={<Home />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};
export default App;
