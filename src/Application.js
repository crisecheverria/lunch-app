import React, {Component} from 'react';
import {auth, database} from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
  state = {
    currentUser: null,
    restaurants: null
  }

  restaurantsRef = database.ref('/restaurants');

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({currentUser});

      this
        .restaurantsRef
        .on('value', (snapshot) => {
          this.setState({
            restaurants: snapshot.val()
          });
        });
    });
  }

  render() {
    const {currentUser, restaurants} = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          {!currentUser && <SignIn/>}
          {currentUser && <div>
            <NewRestaurant/>
            <Restaurants restaurants={restaurants}/>
            <CurrentUser user={currentUser}/>
          </div>
}
        </div>
      </div>
    );
  }
}

export default Application;
