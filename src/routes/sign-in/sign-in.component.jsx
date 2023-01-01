import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { SignUpForm } from '../sign-up-form/sign-up-form.component';

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
	auth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	useEffect(() => {
		(async () => {
			const response = await getRedirectResult(auth);
			if (response?.user) {
				createUserDocumentFromAuth(response.user);
			}
		})();
	}, []);
	const signInHandler = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	return (
		<>
			<h3>Sign in</h3>
			<button onClick={signInHandler}>sign in with google</button>
			<button onClick={signInWithGoogleRedirect}>sign in with redirect</button>
			<SignUpForm />
		</>
	);
};

export default SignIn;
