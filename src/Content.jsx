import React, { useState } from "react";
import TikTakToe from "./TikTakToe.jsx";

function Content() {
	return (
		<main className="flex-grow bg-blue-200">
			<div className="container mx-auto p-4 ">
				<Menu />
			</div>
		</main>
	);
}

function Menu() {
	const [count, setCount] = useState(0);
	const textArray = ["Sie sind eine 0", "Sie habe 1 Gehirnzelle", "2 Gestalten Sitzen auf'm Balken", "Sie können bis 3 Zählen", "Immer noch nicht genug?", "Lassen Sie das Besser", "Selbstzerstörung Aktiviert", "OH das War keine Gute Idee", "3", "2", "1", "Selbstzerstörung Abgebrochen", "Phu das War knnap", "Oder?"];

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
		console.log(count);
	};

	const getTextForCount = () => {
		if (count < textArray.length) {
			return textArray[count];
		} else {
			return "BOOOOOOM 🧨🎇🔥";
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div className="bg-gray-300 p-4">{count}</div>
			<div className="bg-gray-100 p-4 flex">{getTextForCount()}</div>
			<div className="bg-gray-100 relative">
				<button className="bg-gray-500 text-white p-2 inset-0 w-full h-full" onClick={incrementCount}>
					Erhöhen
				</button>
			</div>
		</div>
	);
}

export default Content;
