import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBjzIwCtEXCgCxZdHINQWDP01JDGzPFm_8",
    authDomain: "aproject-13fd8.firebaseapp.com",
    databaseURL: "https://aproject-13fd8.firebaseio.com",
    projectId: "aproject-13fd8",
    storageBucket: "aproject-13fd8.appspot.com",
    messagingSenderId: "214699318623",
    appId: "1:214699318623:web:73a3d24da50f4fa981eaea",
    measurementId: "G-X72H6LGJBB"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
 
export default database;
