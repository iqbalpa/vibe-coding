import React from "react";
import { Service } from "../../types";

const services: Service[] = [
	{
		icon: "🚀",
		title: "Digital Strategy",
		description: "Comprehensive digital solutions to grow your business",
	},
	{
		icon: "💡",
		title: "Innovation",
		description: "Cutting-edge technology solutions for modern challenges",
	},
	{
		icon: "🤝",
		title: "Consulting",
		description: "Expert guidance to optimize your business processes",
	},
];

const Services: React.FC = () => (
	<section id="services" className="services">
		<h2>Our Services</h2>
		<div className="services-grid">
			{services.map((service, index) => (
				<div key={index} className="service-card">
					<div className="service-icon">{service.icon}</div>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
				</div>
			))}
		</div>
	</section>
);

export default Services;
