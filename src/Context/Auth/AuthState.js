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

	const handleSignup = async (credentials) => {

		const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name: credentials.name, email: credentials.email})
		})

		const response = await res.json();
		return response
	}
	const handleSignin = async (credentials) => {
		const res = await fetch(`${process.env.REACT_APP_HOST}/api/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Content-Type',
				'Access-Control-Allow-Methods': 'POST'
			},
			body: JSON.stringify({name: credentials.name, email: credentials.email})
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
		<AuthContext.Provider value={{handleLogin, getUser, handleSignup, handleSignin}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState