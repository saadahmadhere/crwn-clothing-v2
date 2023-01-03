import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

// import FormInput from '../../components/form-input/form-input.component';

const Authentication = () => {
	// const defaultFormFields = {
	// 	email: '',
	// 	password: '',
	// };

	// const [formFields, setFormFields] = useState(defaultFormFields);
	// const { email, password } = formFields;

	// useEffect(() => {
	// 	(async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response?.user) {
	// 			createUserDocumentFromAuth(response.user);
	// 		}
	// 	})();
	// }, []);

	// const resetFormFields = () => {
	// 	setFormFields(defaultFormFields);
	// };

	// const signInHandler = async () => {
	// 	const { user } = await signInWithGooglePopup();
	// 	createUserDocumentFromAuth(user);
	// };

	// const inputChangeHandler = (event) => {
	// 	const { name, value } = event.target;
	// 	setFormFields({ ...formFields, [name]: value });
	// };

	// const handleSignIn = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		const res = await signInWithEmailAndPassword(auth, email, password);
	// 		resetFormFields();
	// 		console.log(res);
	// 	} catch (error) {
	// 		alert('Facing error in loggin in:', error);
	// 	}
	// };

	return (
		<div className='authentication-container'>
			{/* <h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSignIn}>
				<FormInput
					label='email'
					required
					type='text'
					value={email}
					onChange={inputChangeHandler}
					name='email'
				/>
				<FormInput
					label='password'
					required
					type='password'
					value={password}
					onChange={inputChangeHandler}
					name='password'
				/>
				<Button type='submit'>Sign In</Button>
			</form> */}
			<SignInForm />
			<SignUpForm />
			{/* <button onClick={signInHandler}>sign in with google</button> */}
			{/* <button onClick={signInWithGoogleRedirect}>sign in with redirect</button> */}
		</div>
	);
};

export default Authentication;
