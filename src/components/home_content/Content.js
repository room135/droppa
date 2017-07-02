import React, { Component } from 'react';
import ItemRow from './ItemRow'
import CategoryTextList from './CategoryTextList';
import CategoryIconList from './CategoryIconList';

class Content extends Component {
	render() {
		return (
			<div className="Content container">
				<CategoryIconList />
				<CategoryTextList />
				<ItemRow />
			</div>
		)
	}
}

export default Content;