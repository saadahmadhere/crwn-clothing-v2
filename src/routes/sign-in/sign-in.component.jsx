import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const signInHandler = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	return (
		<>
			<h3>sign in</h3>
			<button onClick={signInHandler}>sign in with google</button>
		</>
	);
};

export default SignIn;
