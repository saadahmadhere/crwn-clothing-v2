// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAGHOMQR1NZENLxci_LXsbnkBAC5LHS1M8',
	authDomain: 'crwn-clothing-db-10156.firebaseapp.com',
	projectId: 'crwn-clothing-db-10156',
	storageBucket: 'crwn-clothing-db-10156.appspot.com',
	messagingSenderId: '884543044948',
	appId: '1:884543044948:web:2737355128ba45446e1cc1',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
