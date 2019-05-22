import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDTrFOMVKxun_JzEJ3C_hiy6JXHLPg0Zgc',
    authDomain: 'finnish-vocabulary.firebaseapp.com',
    databaseURL: 'https://finnish-vocabulary.firebaseio.com',
    projectId: 'finnish-vocabulary',
    storageBucket: 'finnish-vocabulary.appspot.com',
    messagingSenderId: '420260603402',
    appId: '1:420260603402:web:ff1b7265a3a28596',
};

firebase.initializeApp(firebaseConfig);

function SignIn() {
    const [user, setUser] = useState(null);

    const handleSignin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        setUser(result.user);
    };

    return user ? (
        <span> Steve Phuc</span>
    ) : (
        <button onClick={handleSignin} type="button">
            Please Log in
        </button>
    );
}

export default SignIn;
