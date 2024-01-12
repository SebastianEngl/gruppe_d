import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function ExpressFrontend() {
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

export default ExpressFrontend;
