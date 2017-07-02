import React, { Component } from 'react';
import ItemRow from './ItemRow'
import CategoryTextList from './CategoryTextList';
import CategoryIconList from './CategoryIconList';

class Content extends Component {
	render() {
		return (
			<div className="Content container">
				<CategoryIconList />
				<div className="row">
					<div className="col-md-2">
						<CategoryTextList />
					</div>
					<div className="col-md-10">
						<ItemRow />
					</div>
				</div>
			</div>
		)
	}
}

export default Content;