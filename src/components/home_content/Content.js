import React, { Component } from 'react';
import CategoryTextList from './CategoryTextList';
import CategoryIconList from './CategoryIconList';

class Content extends Component {
	render() {
		return (
			<div className="Content container">
				<h1>Hi Content</h1>
				<CategoryIconList />
				<CategoryTextList />
			</div>
		)
	}
}

export default Content;