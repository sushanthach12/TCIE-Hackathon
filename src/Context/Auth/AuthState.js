import React from 'react'
import AuthContext from './AuthContext'

const AuthState = (props) => {

	const handleLogin = async (credentials) => {

		const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: credentials.email, password: credentials.password })
		})

		const response = await res.json();
		return response
	}

	const getUser = async (token) => {
		const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/getUser`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'authToken' : `${token}`
			}
		})

		const response = await res.json()
		return response
	}

	return (
		<AuthContext.Provider value={{handleLogin, getUser}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState