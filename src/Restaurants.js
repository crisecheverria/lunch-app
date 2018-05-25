import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';

class Restaurants extends Component {

  render() {
    const {restaurants} = this.props;
    return (
      <section className="Restaurants">
        {map(restaurants, (restaurant, key) => <Restaurant key={key} {...restaurant}/>)}
      </section>
    );
  }
}

Restaurants.propTypes = {
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
