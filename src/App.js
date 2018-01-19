import React, {Component} from 'react';
import './App.css';
import SearchForm from './SearchForm';

class App extends Component {
	render() {
		return (
			<main>
				<div className="container">
					<div className="row">
						<div className="col">
							<SearchForm/>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
