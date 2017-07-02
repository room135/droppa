import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CategoryTextList extends Component {
  	render() {
	    return (
	    <div className="CategoryTextList">
		    <div className="row">
		      	<div className="col-md-2">
	      			<h3>Catalog</h3>
					<ul className="list-group">
						<li className="list-group-item"><a href="#">Fashion</a></li>
						<li className="list-group-item"><a href="#">Electronic</a></li>
						<li className="list-group-item"><a href="#">Cosmetic</a></li>
						<li className="list-group-item"><a href="#">Food</a></li>
					</ul>
	      		</div>
	      	</div>
	    </div>
	    );
  	}
}

export default CategoryTextList;
