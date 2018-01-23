import React, {Component} from 'react';
import './App.css';
import SearchForm from './SearchForm';
import PageList from './PagesList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
			pages: []
		};
	}

	handleSearchTextChange = (newSearchText) => {
		this.setState({
			searchText: newSearchText
		});
	};

	handleSearchSubmit = () => {
		if (this.state.searchText && this.state.searchText.length > 0) {
			const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
			const query = api + this.state.searchText;

			fetch(query, {
				method: 'GET',
				headers: new Headers({
					'Api-User-Agent': 'fcc-wiki-viewer/1.0 (https://github.com/thetwoface/fcc-wiki-viewer/)'
				})
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
					throw new Error('Network response was not ok: ' + res.statusText);
				})
				.then((data) => {
					let pages = [];
					for (let key in data.query.pages) {
						if (data.query.pages.hasOwnProperty(key)) {
							const page = data.query.pages[key];
							pages.push({
								id: page.pageid,
								title: page.title,
								extract: page.extract
							})
						}
					}

					this.setState({
						pages: pages
					});
				})
				.catch(function (error) {
					console.error('There has been a problem with your fetch operation: ', error.message);
				});
		}
		else {
			this.setState({
				pages: []
			});
		}
	};

	render() {
		return (
			<main>
				<div className="container">
					<div className="row mt-2">
						<div className="col">
							<SearchForm searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange}
								onSearchSubmit={this.handleSearchSubmit}/>
						</div>
					</div>
					<div className="row mt-2">
						<div className="col">
							<PageList pages={this.state.pages}/>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default App;
