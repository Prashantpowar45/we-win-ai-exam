import mongoose, { Schema, Document } from 'mongoose';

// 1. USER SCHEMA
export interface IUserDoc extends Document {
  name: string;
  email: string;
  phone?: string;
  role: 'Student' | 'Admin' | 'Super Admin';
  targetExam: string;
  state: string;
  college: string;
  xp: number;
  streakDays: number;
  testsCompleted: number;
  averageScore: number;
  accuracy: number;
  createdAt: Date;
}

const UserSchema = new Schema<IUserDoc>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  role: { type: String, default: 'Student' },
  targetExam: { type: String, default: 'SSC CGL & MPSC' },
  state: { type: String, default: 'Maharashtra' },
  college: { type: String, default: 'University' },
  xp: { type: Number, default: 1000 },
  streakDays: { type: Number, default: 1 },
  testsCompleted: { type: Number, default: 0 },
  averageScore: { type: Number, default: 0 },
  accuracy: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// 2. QUESTION SCHEMA
export interface IQuestionDoc extends Document {
  category: string;
  section: string;
  subject: string;
  topic: string;
  difficulty: string;
  marks: number;
  negativeMarks: number;
  questionText: { en: string; hi: string; mr: string };
  options: { en: string[]; hi: string[]; mr: string[] };
  correctOptionIndex: number;
  explanation: { en: string; hi: string; mr: string };
  isAiGenerated: boolean;
  source: string;
  createdAt: Date;
}

const QuestionSchema = new Schema<IQuestionDoc>({
  category: { type: String, required: true },
  section: { type: String, required: true },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  difficulty: { type: String, default: 'Medium' },
  marks: { type: Number, default: 2.5 },
  negativeMarks: { type: Number, default: 0.5 },
  questionText: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
    mr: { type: String, required: true }
  },
  options: {
    en: [{ type: String }],
    hi: [{ type: String }],
    mr: [{ type: String }]
  },
  correctOptionIndex: { type: Number, required: true },
  explanation: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
    mr: { type: String, required: true }
  },
  isAiGenerated: { type: Boolean, default: false },
  source: { type: String, default: 'We_Win23 Question Bank' },
  createdAt: { type: Date, default: Date.now }
});

// 3. MOCK TEST RESULT SCHEMA
export interface ITestResultDoc extends Document {
  userId: string;
  testId: string;
  testTitle: string;
  score: number;
  maxScore: number;
  percentile: number;
  rank: number;
  accuracy: number;
  totalTimeSpentSec: number;
  createdAt: Date;
}

const TestResultSchema = new Schema<ITestResultDoc>({
  userId: { type: String, required: true },
  testId: { type: String, required: true },
  testTitle: { type: String, required: true },
  score: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  percentile: { type: Number, default: 95 },
  rank: { type: Number, default: 12 },
  accuracy: { type: Number, default: 90 },
  totalTimeSpentSec: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

// 4. CHATBOT HISTORY SCHEMA
export interface IChatHistoryDoc extends Document {
  userId: string;
  messages: { sender: 'user' | 'bot'; text: string; timestamp: Date }[];
  createdAt: Date;
}

const ChatHistorySchema = new Schema<IChatHistoryDoc>({
  userId: { type: String, required: true },
  messages: [
    {
      sender: { type: String, enum: ['user', 'bot'] },
      text: { type: String },
      timestamp: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export const UserModel = mongoose.models.User || mongoose.model<IUserDoc>('User', UserSchema);
export const QuestionModel = mongoose.models.Question || mongoose.model<IQuestionDoc>('Question', QuestionSchema);
export const TestResultModel = mongoose.models.TestResult || mongoose.model<ITestResultDoc>('TestResult', TestResultSchema);
export const ChatHistoryModel = mongoose.models.ChatHistory || mongoose.model<IChatHistoryDoc>('ChatHistory', ChatHistorySchema);
