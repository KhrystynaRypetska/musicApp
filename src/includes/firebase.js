
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyzZtTJxa4e7Fyr9mMcfq1yF6WrzkyQrE",
    authDomain: "music-57564.firebaseapp.com",
    projectId: "music-57564",
    storageBucket: "music-57564.appspot.com",
    appId: "1:432371692672:web:de4cf401259a9a25632265"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
    auth,
    db,
    usersCollection,
    songsCollection,
    commentsCollection,
    storage,
}