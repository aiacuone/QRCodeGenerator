import React from 'react'
var QRCode = require('qrcode.react')
import styles from '../styles/Generator.module.scss'

export default function Code({ info }) {
	let text = `Hello ${info.firstName}, 
	The date you generated the QR Code was ${timeStampDate()}, the time you generated the QR Code was ${timeStampTime()}. The information you submitted is as follows:
	Name: ${info.firstName} ${info.lastName}
	Date of Birth: ${info.dob}
	Email: ${info.email}
	Number: ${info.number}
Thank you for using my QR Code Generator. All my information and projects can be accessed via the links located within the header of the application. Im very greatful for the opportunity and look forward to your response`

	function handleDownload() {
		const canvas = document.getElementById('code')
		const pngUrl = canvas
			.toDataURL('image/png')
			.replace('image/png', 'image/octet-stream')
		let downloadLink = document.createElement('a')
		downloadLink.href = pngUrl
		downloadLink.download = 'code.png'
		document.body.appendChild(downloadLink)
		downloadLink.click()
		document.body.removeChild(downloadLink)
	}

	function timeStampDate() {
		let dateObj = new Date(info.time)

		let day = dateObj.getDate()
		let month = dateObj.getMonth() + 1
		let year = dateObj.getFullYear()

		return `${day}/${month}/${year}`
	}

	function timeStampTime() {
		let dateObj = new Date(info.time)

		let hours = dateObj.getHours()
		let minutes = dateObj.getMinutes()
		let seconds = dateObj.getSeconds()

		return `${hours}:${minutes}:${seconds}`
	}

	return (
		<div className={styles.code}>
			<QRCode value={text} id="code" size={280} />
			<button className={styles.download} onClick={handleDownload}>
				Download
			</button>
		</div>
	)
}
