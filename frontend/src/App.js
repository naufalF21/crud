import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import 'bulma/css/bulma.min.css';

function App() {
	return (
		<Router>
			<div className="container">
				<div className="columns">
					<div className="column is-half is-offset-one-quarter">
						<Routes>
							<Route exact path="/" element={<ProductList />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
