import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyA3mLYeeilMnIr2OvbOxwA3l8z-90iZ-N4",
	authDomain: "facebook-779d8.firebaseapp.com",
	projectId: "facebook-779d8",
	storageBucket: "facebook-779d8.appspot.com",
	messagingSenderId: "362450454920",
	appId: "1:362450454920:web:9a7130ec0f4e446cf5123d",
};

// check if app is already rendered
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
