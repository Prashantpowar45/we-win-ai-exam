export type Language = 'en' | 'hi' | 'mr';

export interface Question {
  id: string;
  questionText: {
    en: string;
    hi: string;
    mr: string;
  };
  options: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  correctOptionIndex: number;
  explanation: {
    en: string;
    hi: string;
    mr: string;
  };
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  section: 'Quantitative Aptitude' | 'Reasoning' | 'English / Verbal Ability' | 'General Knowledge / Current Affairs';
  subject: string;
  topic: string;
  marks: number;
  negativeMarks: number;
  timeLimitSec: number;
}

export interface SectionInfo {
  id: string;
  name: 'Quantitative Aptitude' | 'Reasoning' | 'English / Verbal Ability' | 'General Knowledge / Current Affairs';
  questionCount: number;
  marks: number;
}

export interface MockTest {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  durationMinutes: number;
  totalMarks: number;
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  attemptsCount: number;
  sections: SectionInfo[];
  questions: Question[];
}

export interface UserAnswer {
  questionId: string;
  selectedOptionIndex: number | null;
  status: 'answered' | 'unanswered' | 'marked_for_review' | 'marked_and_answered';
  timeSpentSec: number;
}

export interface ExamViolationLog {
  timestamp: string;
  type: 'tab_switch' | 'window_blur' | 'fullscreen_exit' | 'copy_paste_attempt';
  warningCount: number;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  score: number;
  accuracy: number;
  xp: number;
  avatar: string;
  badge: string;
  state: string;
  college: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}
