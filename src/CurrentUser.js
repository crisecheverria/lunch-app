import React from 'react';
import {shape, string} from 'prop-types';
import {auth} from './firebase';
import './CurrentUser.css';

const CurrentUser = ({user}) => {
  return (
    <div className="CurrentUser"></div>
  );
};

CurrentUser.propTypes = {
  user: shape({displayName: string, email: string.isRequired, photoURL: string, uid: string.isRequired})
};

export default CurrentUser;
