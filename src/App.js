import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from './pages/dashboard/Dashboard';
import Blog from "./pages/blog/Blog";
import Checkout from './pages/payment/Checkout';
import useToken from './services/useToken';


function App() {
	const { token, setToken } = useToken();
	if(!token) {
		return <SignIn setToken={setToken} />
	}
	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" exact element={<Blog />} />
					<Route path="/login" exact element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
					<Route path="/investlist" element={<Dashboard />} />
					<Route path="/review" element={<Checkout />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App; 
