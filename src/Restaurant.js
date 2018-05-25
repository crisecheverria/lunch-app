import React, {Component} from 'react';
import {string, object, func} from 'prop-types';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render() {
    const {name, votes, handleSelect, handleDeselect} = this.props;

    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <ul>
          {votes && map(votes, (vote, key) => <li key={key}>{vote}</li>
          )}
        </ul>
        <button onClick={handleSelect}>
          Yeah, I'd go there!
        </button>
        <button className="destructive" onClick={handleDeselect}>
          Nah, nevermind
        </button>
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
