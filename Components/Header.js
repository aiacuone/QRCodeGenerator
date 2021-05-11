import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
	return (
		<di className={styles.container}>
			<ul>
				<li className={styles.list}> Adrian Iacuone</li>
				<li className={styles.list}> aiacuone@gmail.com</li>
				<li className={styles.list}> 07 393 961 334</li>
				<li className={styles.list}> LinkedIn</li>
			</ul>
		</di>
	)
}
