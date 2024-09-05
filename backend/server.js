// server.js
import express from "express";
import app from "./app.js";
import dotenv from "dotenv";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); // Load environment variables

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, './Frontend/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './Frontend/build/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
