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
						 <ItemRow title="อุปกรณ์" />
						 <ItemRow title="หนังสือ" />
						 <ItemRow title="ลิปสติก" />
						 <ItemRow title="โครมไฟ" />
						 <ItemRow title="รองเท้า" />
					</div>
				</div>
			</div>
		)
	}
}

export default Content;