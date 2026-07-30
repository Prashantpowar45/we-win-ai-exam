import mongoose, { Schema, Document } from 'mongoose';

export interface IUserDoc extends Document {
  name: string;
  email: string;
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

export const UserModel = mongoose.models.User || mongoose.model<IUserDoc>('User', UserSchema);
export const QuestionModel = mongoose.models.Question || mongoose.model<IQuestionDoc>('Question', QuestionSchema);
