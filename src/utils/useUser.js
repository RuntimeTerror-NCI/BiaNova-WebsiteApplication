import { useState } from 'react';

export default function useUser() {
	const getUser = () => {
		const usernameString = sessionStorage.getItem('username');
		const username = JSON.parse(usernameString);
		return username;
	};

	const [user, setUser] = useState(getUser());

	const saveUser = username => {
		sessionStorage.setItem('username', JSON.stringify(username));
		setUser(username.user);
	};

	return {
		setUser: saveUser,
		user,
	};
}
