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
			<div className="sm:grid grid-flow-col auto-cols-max gap-5 w-full justify-between px-10 pt-5 h-36 bg-textmain text-neutral-100 mt-10 pb-5 items-end">
				{/* <div className="">
					<form
						id="newsletter_form"
						method="post"
						onSubmit={handleSubmit}
					>
						<div className="text-sm">
							Sign up for my Newsletter!! I will send you updates and
							stuff.
						</div>
						<div className="grid grid-flow-col items-center gap-5 justify-self-start">
							<input
								onChange={handleChange}
								type="text"
								id="email"
								name="email"
								required
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
								placeholder="Email"
								className="text-neutral-600 px-5 h-6 rounded"
								title="Please enter a valid email abd@xyz.com"
							/>
							<ReCAPTCHA
								ref={recaptchaRef}
								size="invisible"
								sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
								onChange={onReCAPTCHAChange}
							/>
							<button className="btn" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div> */}
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
				<div>&copy; Craig Hicks 2022</div>
			</div>
		</>
	);
}
