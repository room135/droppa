import React, { Component } from 'react';
import ItemRow from './ItemRow'

class Content extends Component {
	render() {
		return (
			<div className="Content container">
				<h1>Hi Content</h1>
				<ItemRow />
			</div>
		)
	}
}

export default Content;