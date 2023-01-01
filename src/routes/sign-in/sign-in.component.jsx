import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
	auth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	useEffect(() => {
		(async () => {
			const { user } = await getRedirectResult(auth);
			console.log(user);
			if (user) {
				createUserDocumentFromAuth(user);
			}
		})();
	}, []);
	const signInHandler = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	return (
		<>
			<h3>sign in</h3>
			<button onClick={signInHandler}>sign in with google</button>
			<button onClick={signInWithGoogleRedirect}>sign in with redirect</button>
		</>
	);
};

export default SignIn;
