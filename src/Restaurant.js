import React, {Component} from 'react';
import {string, object, func} from 'prop-types';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render() {
    const {name} = this.props;
    return (
      <article className="Restaurant">
        <h3>{name}</h3>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: string,
  votes: object,
  user: object,
  handleSelect: func,
  handleDeselect: func
};

export default Restaurant;
