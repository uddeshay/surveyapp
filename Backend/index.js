import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

//  MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/surveydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(' MongoDB connected'))
  .catch(err => console.log(' DB connection error:', err));

//  Survey Schema and Model
const surveySchema = new mongoose.Schema({
  sessionId: String,
  answers: Object,
  status: String,
  submittedAt: { type: Date, default: Date.now }
});
const Survey = mongoose.model('Survey', surveySchema);

//  POST API to receive survey data
app.post('/api/survey', async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json({ message: 'Survey saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Survey failed to save' });
  }
});

//  Start the server

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
