import { useState } from 'react';
import {
	createUserAuthWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

export const SignUpForm = () => {
	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords don't match");
			console.error('passwords not matching');
		}

		try {
			const { user } = await createUserAuthWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('User is already registered!');
			} else {
				alert('user creation failed with an error', error);
			}
		}
	};

	const inputChangeHandler = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					required
					type='text'
					value={displayName}
					onChange={inputChangeHandler}
					name='displayName'
				/>
			</label>
			<label>
				Email:
				<input
					required
					type='email'
					value={email}
					onChange={inputChangeHandler}
					name='email'
				/>
			</label>
			<label>
				Password:
				<input
					required
					type='password'
					value={password}
					onChange={inputChangeHandler}
					name='password'
				/>
			</label>
			<label>
				Confirm Password:
				<input
					required
					type='password'
					value={confirmPassword}
					onChange={inputChangeHandler}
					name='confirmPassword'
				/>
			</label>
			<button type='submit'>Sign Up</button>
		</form>
	);
};
