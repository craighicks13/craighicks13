import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
	BsGithub,
	BsTwitter,
	BsLinkedin,
	BsInstagram,
} from 'react-icons/bs';

export default function Footer() {
	const [email, setEmail] = React.useState('');
	const recaptchaRef = React.useRef(null);

	const handleChange = ({ target: { value } }) => {
		setEmail(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		recaptchaRef.current.execute();
	};

	const onReCAPTCHAChange = async (captchaCode) => {
		if (!captchaCode) {
			return;
		}

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				body: JSON.stringify({ email, captcha: captchaCode }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				// If the response is ok than show the success alert
				alert('Email registered successfully');
			} else {
				// Else throw an error with the message returned
				// from the API
				const error = await response.json();
				throw new Error(error.message);
			}
		} catch (error) {
			alert(error?.message || 'Something went wrong');
		} finally {
			// Reset the reCAPTCHA when the request has failed or succeeeded
			// so that it can be executed again if user submits another email.
			recaptchaRef.current.reset();
			setEmail('');
		}
	};

	return (
		<>
			<div className="h-36 bg-textmain text-neutral-100 mt-10 w-full py-10">
				<div className="mx-auto max-w-7xl flex flex-wrap gap-5 justify-between px-10">
					<div className="flex gap-4 text-3xl">
						<a
							href="https://github.com/craighicks13/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsGithub />
						</a>

						<a
							href="https://twitter.com/craighicks13"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsTwitter />
						</a>

						<a
							href="https://www.linkedin.com/in/craighicks13/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsLinkedin />
						</a>
						<a
							href="https://www.instagram.com/craighicks13/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsInstagram />
						</a>
					</div>
					<div></div>
					<div>&copy; Craig Hicks 2022</div>
				</div>
			</div>
		</>
	);
}
