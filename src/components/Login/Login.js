import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireebase.config';
const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: '',
        password: '',
        error: '',
        success: false,
    });
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
            
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
            const {displayName, photoURL, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL
            }
            setUser(signedInUser);
            console.log(displayName, photoURL, email);
            });
    }
    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.name === 'email'){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name ==='password'){
        const isPasswordValid = e.target.value.length > 8;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFormValid = isPasswordValid && passwordHasNumber;
        }
        if(isFormValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] =e.target.value;
        setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {
    var user = userCredential.user;
    const newUserInfo ={...user};
    newUserInfo.error = '';
    newUserInfo.success =true;
    setUser(newUserInfo);
  })
  .catch((error) => {
    const newUserInfo ={...user};
    newUserInfo.error =error.message;
    setUser(newUserInfo);
    var errorMessage = error.message;
    newUserInfo.success =false;
    console.log(errorMessage);

  });
        }
        e.preventDefault();
    }
    return (
        <div>
            <p>Name: {user.name}</p>
           <form onSubmit={handleSubmit}>
            <input type="text" name="name" onBlur={handleBlur} placeholder="your name here"/>
            <br/>
           <input type="text" onBlur={handleBlur} name="email" placeholder="your email address" required/>
            <br/>
            <input type="password" onBlur={handleBlur} name="password" id="" placeholder="your password" required/>
            <br/>
            <input type="submit" value="Submit"/>
            <p style={{color: 'red'}}>{user.error}</p>
            {
                user.success && <p style={{color: 'green'}}>user created successfully</p>
            }
           </form>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            {
                user.isSignedIn && 
                <div>
                <p>Welcome, {user.name}</p>
                <p>Your email: {user.email}</p>
                <img src={user.photoURL} alt=""/>
                </div>
            }
           
        </div>
    );
};

export default Login;