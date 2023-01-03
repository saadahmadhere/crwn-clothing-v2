// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import {
	getFirestore,
	doc, //retrieve the document inside our firestore database
	getDoc, // getting the document data
	setDoc, // setting the document data
} from 'firebase/firestore';

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
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, provider);

export const db = getFirestore(); // this points to our database inside our console, which helps us further in getting/setting data.

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfo = {}
) => {
	// here userAuth is the response that needs to be passed after signing up with google.
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);
	//console.log(userSnapshot);
	//console.log(userSnapshot.exists()); // this tells us whether the user is already present inside the db.

	// if user data done not exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.error('Error creating the user.💔');
		}
	}
	// if the user data exists:
	return userDocRef;

	// if it doesn't exists, then create a new user data using the above screen-shot.
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
