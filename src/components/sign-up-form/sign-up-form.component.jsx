import { useState } from 'react';
import {
	createUserAuthWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
import { useUserContext } from '../../contexts/user.context';

const SignUpForm = () => {
	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const { setCurrentUser } = useUserContext();

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
			setCurrentUser(user);
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
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					required
					type='text'
					value={displayName}
					onChange={inputChangeHandler}
					name='displayName'
				/>

				<FormInput
					label='Email'
					required
					type='email'
					value={email}
					onChange={inputChangeHandler}
					name='email'
				/>

				<FormInput
					label='Password'
					required
					type='password'
					value={password}
					onChange={inputChangeHandler}
					name='password'
				/>

				<FormInput
					label='Confirm Password'
					required
					type='password'
					value={confirmPassword}
					onChange={inputChangeHandler}
					name='confirmPassword'
				/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
