import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import logo from '../images/logo.svg'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Introduction</title>
			</Head>
			<div className={styles.main}>
				<img src={logo} className={styles.logo} />
				<div className={styles.subContainer}>
					<h1 className={styles.welcome }>WELCOME</h1>
					<p className={styles.description}>
						Welcome to my QR Code Generator. This project is to demonstrate the
						ability to generate a QR Code, using Next JS.
					</p>
					<Link href="/generator">
						<p className={styles.continue}>CONTINUE</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
