import { FormEvent, useState } from "react"
import second from ''

export const Contact = () => {
	const [name, setName] = useState<string>()
	const [email, setEmail] = useState<string>()
	const [message, setMessage] = useState<string>()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

	}


	const SendMessage = (name: string, email: string, message: string) => {
		Email.send({
			SecureToken: '7244f41c-0e4c-437f-a56e-820987871848',
			To: 'facundo.rocha@outlook.com',
			From: email,
			Subject: "Nuevo mensaje",
			Body: `Nombre: ${name}`
				+ `<br> Email: ${email}`
				+ `<br> Mensaje: ${message}`
		}).then(
			message => alert(message)
		);
	}

	return (
		<>
			<div className="contact-wrapper articles">
				<div className="contact-title center-title">
					<h2>Let´s work together</h2>
					<hr className="deco" />
					<h4>Contact me</h4>
				</div>
				<div className="contact-form">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="input-box">
							<input type="text" name="user_name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
							<span>Your full name</span>
						</div>
						<div className="input-box">
							<input type="email" name="user_email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
							<span>Your email</span>
						</div>
						<div className="input-box" id="textarea-box">
							<textarea id="message" name="user_message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
							<span>Your message</span>
						</div>
						<div className="input-box btn-box">
							<button className="send-btn" type="submit">Send</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
