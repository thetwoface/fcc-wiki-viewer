import React, {Component} from 'react';
import RandomArticleButton from './RandomArticleButton';

export default class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};
	}

	handleChange = (e) => {
		this.setState({value: e.target.value});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>

				<div className="form-group mr-sm-2 mb-2">
					<label className="sr-only" htmlFor="searchInput">Search Wikipedia</label>
					<input type="text" value={this.state.value} onChange={this.handleChange}
						className="form-control form-control-lg" id="searchInput" placeholder='Search Wikipedia'/>
				</div>

				<button type="submit" className="btn btn-primary btn-lg mr-sm-2 mb-2">Search</button>

				<RandomArticleButton/>
			</form>
		);
	}
}
