import React from 'react'
import styles from '../styles/Header.module.css'
import logo from '../images/logo.svg'
import email from '../images/email.svg'
import cv from '../images/cv.svg'
import linkedin from '../images/linkedin.svg'
import phone from '../images/phone.svg'

export default function Header() {
	return (
		<di className={styles.container}>
			<img src={logo} className={styles.logo} />
			<ul className={styles.ulist}>
				<li className={styles.list}> Adrian Iacuone</li>
				<li className={styles.list}>
					<a href="mailto:aiacuone@gmail.com">
						aiacuone@gmail.com
						<img src={email} className={styles.email} />
					</a>
				</li>
				<li className={styles.list}>
					{' '}
					<a
						href="https://1drv.ms/b/s!Any2Z6OIuSuhvv5vn0Sjeo6-ZEBrUg?e=9NRsih"
						target="_blank">
						CV
						<img src={cv} className={styles.icon} />
					</a>
				</li>

				<li className={styles.list}>
					{' '}
					<a href="https://www.linkedin.com/in/adrian-iacuone/" target="_blank">
						LinkedIn
						<img src={linkedin} className={styles.icon} />
					</a>
				</li>
				<li className={styles.list}>
					{' '}
					<a href="https://aiacuone-portfolio.netlify.app/" target="_blank">
						Portfolio
						<img src={cv} className={styles.icon} />
					</a>
				</li>
				<li className={styles.list}>
					{' '}
					07 393 961 334
					<img src={phone} className={styles.icon} />
				</li>
			</ul>
		</di>
	)
}
