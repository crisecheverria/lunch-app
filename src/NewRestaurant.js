import React, {Component} from 'react';
import {object} from 'prop-types';
import './NewRestaurant.css';
import {database} from './firebase';

class NewRestaurant extends Component {
  state = {
    name: ''
  };

  restaurantsRef = database.ref('/restaurants');

  handleSubmit = (event) => {
    event.preventDefault();
    this
      .restaurantsRef
      .push({name: this.state.name});
  }

  render() {
    const {name} = this.state;

    return (
      <form className="NewRestaurant">
        <input
          type="text"
          value={name}
          placeholder="Name of Fine Establishment"
          onChange={(event) => this.setState({name: event.target.value})}/>
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: object
};

export default NewRestaurant;
