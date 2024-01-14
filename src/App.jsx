import Content from "./Content.jsx";
import Content2 from "./Content2.jsx";
import ExpressFrontend from "./ExpressFrontend.jsx";
import Game from "./TikTakToe.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import React, { useState } from "react";

function Nav() {
	const [activeTab, setActiveTab] = useState(1);

	const changeTab = (tabNumber) => {
		setActiveTab(tabNumber);
	};

	return (
		<div className="flex-grow bg-blue-200">
			<div className="bg-gray-800 p-4">
				<button className={`px-4 py-2 mx-2 text-white focus:outline-none ${activeTab === 1 ? "bg-blue-600" : "bg-gray-600"}`} onClick={() => changeTab(1)}>
					3 Spalten
				</button>
				<button className={`px-4 py-2 mx-2 text-white focus:outline-none ${activeTab === 2 ? "bg-blue-600" : "bg-gray-600"}`} onClick={() => changeTab(2)}>
					TikTakToe
				</button>
				<button className={`px-4 py-2 mx-2 text-white focus:outline-none ${activeTab === 3 ? "bg-blue-600" : "bg-gray-600"}`} onClick={() => changeTab(3)}>
					Chat
				</button>
			</div>

			<div className="mt-4">
				{activeTab === 1 && <Content />}
				{activeTab === 2 && <Game />}
				{activeTab === 3 && <ExpressFrontend />}
			</div>
		</div>
	);
}
function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Nav />
			<Footer />
		</div>
	);
}

export default App;
