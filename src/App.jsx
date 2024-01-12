import Content from "./Content.jsx";
import Content2 from "./Content2.jsx";
import ExpressFrontend from "./ExpressFrontend.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React from "react";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Content />
			<Content2 />
			<ExpressFrontend />
			<Footer />
		</div>
	);
}

export default App;
