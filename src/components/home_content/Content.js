import React, { Component } from 'react';
import CategoryTextList from './CategoryTextList';

class Content extends Component {
	render() {
		return (
			<div className="Content container">
				<h1>Hi Content</h1>
				<CategoryTextList />
			</div>
		)
	}
}

export default Content;