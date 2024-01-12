import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

app.use(express.json());

function loadData() {
	const __dirname = path.resolve(path.dirname(""));
	let filePath = __dirname + "\\backend\\Daten.json";
	let rawData = fs.readFileSync(filePath, "utf-8");

	console.log(filePath);

	return JSON.parse(rawData);
}

app.use(cors());
app.use(express.static("public"));

const daten = loadData();

app.get("/test", (req, res) => {
	res.json({ text: "Hello World!" });
});
app.listen(port, () => {
	console.log("Example app listening on port ${port}");
});

app.get("/frage", (req, res) => {
	const frage = req.query.frage;

	for (const n of daten.nachrichten) {
		if (n.frage == frage) {
			res.send(n.antwort);
			console.log("jo");
			return;
		}
	}
	res.send("Keine passende Antwort");
});

app.put("/datensatz/:id", (req, res) => {
	// Logik zum Aktualisieren eines Datensatzes nach ID
});

app.delete("/datensatz/:id", (req, res) => {
	// Logik zum Löschen eines Datensatzes nach ID
});
