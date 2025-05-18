import React from "react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="company-name">Company Name</div>
				<div className="social-icons">
					<a href="#" aria-label="Facebook">
						📘
					</a>
					<a href="#" aria-label="Twitter">
						🐦
					</a>
					<a href="#" aria-label="LinkedIn">
						💼
					</a>
					<a href="#" aria-label="Instagram">
						📸
					</a>
				</div>
			</div>
			<div className="footer-copyright">© {currentYear} Company Name. All rights reserved.</div>
		</footer>
	);
};

export default Footer;
