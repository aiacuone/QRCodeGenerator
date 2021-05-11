import React, { useState, useEffect } from 'react'
import styles from '../styles/Generator.module.css'

export default function generator() {
	const defaultInfo = {
		firstName: '',
		lastName: '',
		dob: '',
		phone: '',
		email: '',
	}

	const [info, setInfo] = useState(defaultInfo)

	function handleChange(input, value) {
		let newInfo = { ...info }
		newInfo[input] = value
		setInfo(newInfo)
	}

	useEffect(() => {
		console.log(info)
	})

	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<input
					onChange={(e) => handleChange('firstName', e.target.value)}
					type="text"
					className={styles.input}
				/>
				<input
					onChange={(e) => handleChange('lastName', e.target.value)}
					type="text"
					className={styles.input}
				/>
				<input
					onChange={(e) => handleChange('dob', e.target.value)}
					type="date"
					className={styles.input}
				/>
				<input
					onChange={(e) => handleChange('phone', e.target.value)}
					type="number"
					className={styles.input}
				/>
				<input
					onChange={(e) => handleChange('email', e.target.value)}
					type="email"
					className={styles.input}
				/>
			</form>
		</div>
	)
}
