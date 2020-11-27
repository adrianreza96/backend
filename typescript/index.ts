import express from 'express';
import bodyParser  from 'body-parser';
import path  from 'path';

import { Routes } from "./routes/index";

// rest of the code remains same
const app = express()
.use(bodyParser.urlencoded({extended:true}))
.use(bodyParser.json())
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});