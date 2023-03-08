import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import Button from '../shared/button'
import Form, { Input, Textarea, FormGroup } from '../shared/form'
import { FormWrap } from './contact-form.stc'

const ContactForm = ({ inputStyle, textareaStyle, url }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});

	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
		}
	};
	const onSubmit = (data, e) => {
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: url,
			data
		})
			.then(res => {
				handleServerResponse(true, "Message envoyé !", form);
			})
			.catch(err => {
				handleServerResponse(false, err.response.data.error, form);
			});
	}

	return (
		<FormWrap>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-row">
					<FormGroup className="halfwidth">
						<Input
							type="text"
							id="name"
							placeholder="Votre nom"
							{...register("name", {
								required: "Ce champ est requis",
							})}
							{...inputStyle}
						/>
						{errors.name && <span className="error">{errors.name?.message}</span>}
					</FormGroup>
					<FormGroup className="halfwidth">
						<Input
							type="email"
							id="email"
							placeholder="Votre email"
							{...register("email", {
								required: "Ce champ est requis",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: "Adresse email invalide",
								},
							})}
						/>
						{errors.email && <span className="error">{errors.email?.message}</span>}
					</FormGroup>
				</div>
				<div className="form-row">
					<FormGroup {...textareaStyle}>
						<Textarea
							id="message"
							placeholder="Message"
							{...register("message", {
								required: "Ce champ est requis",
								minLength: { value: 10, message: "10 caractères minimum" }
							})}
						/>
						{errors.message && <span className="error">{errors.message?.message}</span>}
					</FormGroup>
				</div>
				<div className="form-row">
					<FormGroup>
						<Button type="submit" disabled={serverState.submitting}>Envoyer</Button>
						{serverState.status && (
							<p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
								{serverState.status.msg}
							</p>
						)}
					</FormGroup>
				</div>
			</Form>
		</FormWrap>
	)
}

ContactForm.propTypes = {
	inputStyle: PropTypes.object,
	textareaStyle: PropTypes.object
}

ContactForm.defaultProps = {
	inputStyle: {
		responsive: {
			xsmall: {
				mb: '20px'
			}
		}
	},
	textareaStyle: {
		mt: '40px',
		mb: '40px',
		responsive: {
			xsmall: {
				mt: '25px',
				mb: '25px'
			}
		}
	}
}

export default ContactForm
