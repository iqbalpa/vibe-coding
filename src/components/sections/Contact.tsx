import React, { useState } from "react";
import { ContactFormData } from "../../types";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section id="contact" className="contact">
			<h2>Contact Us</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<textarea
						name="message"
						placeholder="Your Message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit" className="submit-button">
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Contact;
