import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    }
 const handleGoogleSignIn =() => {
  var provider = new firebase.auth.GoogleAuthProvider();


         firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    const {displayName, email} = result.user;
    const singnedInUser = {name: displayName, email: email}
    setLoggedInUser(singnedInUser);
    history.replace(from);
  })
    }
    

    return (
        <div>
            
            <h4>This is a login page</h4>
            <button onClick={handleGoogleSignIn}>Google Sing in</button>
        </div>
    );
};

export default Login;