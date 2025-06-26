import mongoose from 'mongoose';

// Schema define karna
const surveySchema = new mongoose.Schema({
  sessionId: String,
  answers: Object,
  status: String,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

// Model banake export karna
const Survey = mongoose.model('Survey', surveySchema);
module.exports = Survey;
