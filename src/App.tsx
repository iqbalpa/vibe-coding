import React from "react";
import "./styles/main.css";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
	return (
		<div className="app">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Services />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
