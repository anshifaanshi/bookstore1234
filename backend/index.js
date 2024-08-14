import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import booksroute from './routes/booksroute.js'; // Ensure the path is correct
import { Book } from './model/models.js';

const app = express();
const PORT = 3001;
const URL = 'mongodb+srv://anshifajamsher:8uBbXQZT2ScTgl7F@cluster0.twfjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
app.use(cors());
app.use('/', booksroute); // The base path for booksroute

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("App connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
