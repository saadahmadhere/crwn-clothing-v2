import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const signInHandler = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};

	return (
		<>
			<h3>sign in</h3>
			<button onClick={signInHandler}>sign in with google</button>
		</>
	);
};

export default SignIn;
