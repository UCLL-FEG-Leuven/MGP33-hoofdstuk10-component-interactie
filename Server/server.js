// in package.json wordt via type="module" aangegeven dat we ES6 module syntax gebruiken
import express from "express";
import cors from "cors";
import { join } from "path";

import __dirname from "./__dirname.js";

const app = express();

// De poort is niet meer hardgecodeerd: de de host van deze server kan zelf bepalen op welke poort het moet draaien.
// Als er geen poort wordt doorgegeven dan zal de server standaard op poort 3000 draaien.
const port = process.env.PORT ? process.env.PORT : 3010;

// De static files middleware registreren
app.use("/", express.static(join(__dirname, 'public','browser')));

// CORS is vereist omdat er tijdens ontwikkeling calls komen van een andere host:port (poort 4200) naar deze host:port (poort 3009)
app.use(cors());
app.use(express.json());

// REST/WEB API - start
const myClocks = ['Europe/Brussels'];
app.get('/my-clocks', function (req, res) {
  res.json(myClocks);
})
// REST/WEB API - end

app.listen(port, () => {
  console.log(`Node-Express server listening on port ${port}`);
});