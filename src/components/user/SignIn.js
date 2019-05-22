import React, { useState, useEffect } from 'react';
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
    const user = useAuth();

    const handleSignin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    };

    return user ? (
        <div>
            {/* <img src={user.photoURL} /> */}
            <button> {user.displayName}</button>
            <button
                type="button"
                onClick={() => {
                    firebase.auth().signOut();
                }}
            >
                LogOut
            </button>
        </div>
    ) : (
        <button onClick={handleSignin} type="button">
            Please Log in
        </button>
    );
}

function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                const user = {
                    displayName: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL,
                    uid: firebaseUser.uid,
                };
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    return user;
}

export default SignIn;
