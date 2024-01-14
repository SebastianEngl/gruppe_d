import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function ExpressFrontend() {
	const [inputText, setInputText] = useState("");
	const [response, setResponse] = useState("");

	const handleInputChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSendMessage = () => {
		//useEffect(() => {
		axios
			.get("http://localhost:3000/frage?frage=" + inputText)
			.then((response) => {
				console.log(response);
				setResponse(response.data);
			})
			.catch((err) => {
				setResponse("Server nicht erreichbar");
				//console.log(err);
			});
		//}, []);
		setInputText("");
	};

	return (
		<div className="flex flex-col h-64 bg-gray-100 p-4 border border-gray-300 rounded">
			<div className="flex-grow mb-4 overflow-y-auto">
				{/* Hier wird die Antwort angezeigt */}
				{response && <div className="mb-2">Antwort: {response}</div>}
			</div>

			<div className="flex">
				{/* Eingabefeld */}
				<input type="text" value={inputText} onChange={handleInputChange} placeholder="Deine Nachricht" className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none" />

				{/* Senden-Button */}
				<button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none">
					Senden
				</button>
			</div>
		</div>
	);
}

export default ExpressFrontend;
/*function ExpressFrontend() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/frage?frage=funktionierst_du")
			.then((response) => {
				setPosts(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	console.log(posts);
	return <div>{posts}</div>;
}

export default ExpressFrontend;*/
