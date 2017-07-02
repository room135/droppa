import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ItemRow extends Component {
  render() {
    return (
      <div className="ItemRow">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
                <img src="http://fakeimg.pl/200x200/ff0000/000" responsive/>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <label>Title</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6"> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat lacus eu aliquet feugiat. Donec mollis nibh a sagittis porta. 
                </div>
                <div className="col-md-6"> End Block </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemRow;
