import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
			<div className="logo">Company Name</div>
			<div className="nav-links">
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#services">Services</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	);
};

export default Navbar;
