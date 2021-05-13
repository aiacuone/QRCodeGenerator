import React, { useState } from 'react'
import styles from '../styles/Generator.module.scss'
import Code from '../components/Code.js'
import Head from 'next/head'

export default function generator() {
	const defaultInfo = {
		firstName: '',
		lastName: '',
		dob: '',
		number: '',
		email: '',
		time:''
	}

	const [info, setInfo] = useState(defaultInfo)
	const [generate, setGenerate] = useState(false)

	function handleChange(input, value) {
		setGenerate(false)
		const newInfo = { ...info }
		newInfo.time = Date.now()
		newInfo[input] = value
		setInfo(newInfo)
	}

	function handleGenerate(e) {
		e.preventDefault()
		setGenerate(true)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>QR Code Generator</title>
			</Head>
			<div className={styles.subContainer}>
				<p className={styles.instructions}>
					Generate your QR Code. All fields must be completed
				</p>
				<h1 className={styles.title}>GENERATOR</h1>
				<form className={styles.form} onSubmit={handleGenerate}>
					<label className={styles.label}>FIRST NAME</label>
					<input
						onChange={(e) => handleChange('firstName', e.target.value)}
						type="text"
						className={styles.input}
						required
						value={info.firstName}
					/>
					<label className={styles.label}></label>
					LAST NAME
					<input
						onChange={(e) => handleChange('lastName', e.target.value)}
						type="text"
						className={styles.input}
						required
						value={info.lastName}
					/>
					<label className={styles.label}></label>
					DATE OF BIRTH
					<input
						onChange={(e) => handleChange('dob', e.target.value)}
						type="date"
						className={styles.input}
						required
						value={info.dob}
					/>
					<label className={styles.label}></label>
					MOBILE
					<input
						onChange={(e) => handleChange('number', e.target.value)}
						type="tel"
						className={styles.input}
						required
						value={info.number}
						placeholder="07 000 000 000"
						pattern="^0\s?7\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$"
					/>
					<label className={styles.label}></label>
					EMAIL
					<input
						onChange={(e) => handleChange('email', e.target.value)}
						type="email"
						className={styles.input}
						required
						value={info.email}
					/>
					<div className={styles.buttonContainer}>
						<button type="submit" className={styles.generate}>
							Generate
						</button>
					</div>
				</form>

				<div className={styles.codeContainer}>
					{generate && <Code info={info} />}
				</div>
			</div>
		</div>
	)
}
