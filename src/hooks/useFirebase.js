import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';

import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ user, setUser ] = useState(null);
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// Google sign in
	const signinUsingGoogle = () => {
		setIsLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// signup with email and password
	const signUpWithEmailAndPassword = (email, password) => {
		setIsLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// set user name
	const setUSerName = (name) => {
		setIsLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name
		});
	};
	//  Log in with email and password
	const loginWithEmailAndPassword = (email, password) => {
		setIsLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// Get Current user
	useEffect(
		() => {
			const unsubscribed = onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
				} else {
					setUser(null);
				}
				setIsLoading(false);
			});
			return () => unsubscribed;
		},
		[ user, auth ]
	);

	// logout
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => setIsLoading(false));
	};

	return {
		setIsLoading,
		isLoading,
		signinUsingGoogle,
		user,
		setUser,
		signUpWithEmailAndPassword,
		loginWithEmailAndPassword,
		logOut,
		setUSerName
	};
};

export default useFirebase;
