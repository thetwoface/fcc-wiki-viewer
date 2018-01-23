import React, {Component} from 'react';
import RandomArticleButton from './RandomArticleButton';
import './SearchForm.css';

export default class SearchForm extends Component {
	handleChange = (e) => {
		this.props.onSearchTextChange(e.target.value);
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.onSearchSubmit();
	};

	render() {
		return (
			<form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>

				<div className="search-input-group form-group mr-sm-2 mb-2">
					<label className="sr-only" htmlFor="searchInput">Search Wikipedia</label>
					<input type="text" value={this.props.searchText} onChange={this.handleChange}
						className="form-control form-control-lg w-100" id="searchInput" placeholder='Search Wikipedia'/>
				</div>

				<button type="submit" className="btn btn-primary btn-lg mr-sm-2 mb-2">Search</button>

				<RandomArticleButton/>
			</form>
		);
	}
}
