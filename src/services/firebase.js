import firebase from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAVtzodDEpwehfSVu0gVhnh5csRgR5a6rs',
    authDomain: 'finlary-60d38.firebaseapp.com',
    databaseURL: 'https://finlary-60d38.firebaseio.com',
    projectId: 'finlary-60d38',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { auth, db };
