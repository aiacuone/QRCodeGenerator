import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
	return (
    <div className={styles.container}>
      <Head>
        <title>Introduction</title>
      </Head>
      <div className={styles.main} >
        <p className={styles.title}>QR CODE GENERATOR</p>
        <p className={styles.description}>Hello, Welcome to my QR Code Generator</p>
        <Link href='/generator'><p className={styles.continue }>CONTINUE</p></Link>
      </div>
		</div>
	)
}
