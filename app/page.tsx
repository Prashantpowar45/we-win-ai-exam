'use me';
'use client';

import React, { useState } from 'react';
import { Language, MockTest, UserAnswer } from '@/lib/types';
import { SAMPLE_MOCK_TESTS } from '@/lib/mockExamData';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Dashboard } from '@/components/Dashboard';
import { ExamCategories } from '@/components/ExamCategories';
import { ExamInterface } from '@/components/ExamInterface';
import { TestResultModal } from '@/components/TestResultModal';
import { AiTutorModal } from '@/components/AiTutorModal';
import { Leaderboard } from '@/components/Leaderboard';
import { GamificationModal } from '@/components/GamificationModal';
import { AdminPanel } from '@/components/AdminPanel';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<'home' | 'categories' | 'leaderboard'>('home');
  
  // Modals and Active Test state
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [completedTestResult, setCompletedTestResult] = useState<{
    test: MockTest;
    userAnswers: Record<string, UserAnswer>;
    totalTimeSpentSec: number;
  } | null>(null);

  const [aiTutorOpen, setAiTutorOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [gamificationOpen, setGamificationOpen] = useState(false);

  const handleStartTest = (testId?: string) => {
    const targetTest = SAMPLE_MOCK_TESTS.find(t => t.id === testId) || SAMPLE_MOCK_TESTS[0];
    setActiveTest(targetTest);
  };

  const handleSubmitTest = (userAnswers: Record<string, UserAnswer>, totalTimeSpentSec: number) => {
    if (!activeTest) return;
    setCompletedTestResult({
      test: activeTest,
      userAnswers,
      totalTimeSpentSec
    });
    setActiveTest(null);
  };

  // If in active test execution mode, render full-screen Exam Engine
  if (activeTest) {
    return (
      <ExamInterface
        test={activeTest}
        language={language}
        onLanguageChange={setLanguage}
        onSubmitTest={handleSubmitTest}
        onCancelTest={() => setActiveTest(null)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-win-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenAiTutor={() => setAiTutorOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenGamification={() => setGamificationOpen(true)}
        onNavigate={(sec) => setActiveSection(sec as any)}
      />

      {/* Main Content views */}
      {activeSection === 'home' && (
        <>
          <Hero
            language={language}
            onStartTest={handleStartTest}
            onExploreCategories={() => setActiveSection('categories')}
            onOpenAiTutor={() => setAiTutorOpen(true)}
          />

          <Dashboard
            language={language}
            onStartTest={handleStartTest}
            onOpenGamification={() => setGamificationOpen(true)}
          />

          <ExamCategories
            language={language}
            onStartTest={handleStartTest}
          />

          <Leaderboard language={language} />
        </>
      )}

      {activeSection === 'categories' && (
        <div className="pt-6">
          <ExamCategories
            language={language}
            onStartTest={handleStartTest}
          />
        </div>
      )}

      {activeSection === 'leaderboard' && (
        <div className="pt-6">
          <Leaderboard language={language} />
        </div>
      )}

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {completedTestResult && (
        <TestResultModal
          test={completedTestResult.test}
          userAnswers={completedTestResult.userAnswers}
          totalTimeSpentSec={completedTestResult.totalTimeSpentSec}
          language={language}
          onClose={() => setCompletedTestResult(null)}
          onRetake={() => {
            const currentTest = completedTestResult.test;
            setCompletedTestResult(null);
            setActiveTest(currentTest);
          }}
        />
      )}

      <AiTutorModal
        isOpen={aiTutorOpen}
        onClose={() => setAiTutorOpen(false)}
        language={language}
      />

      <GamificationModal
        isOpen={gamificationOpen}
        onClose={() => setGamificationOpen(false)}
      />

      <AdminPanel
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />
    </main>
  );
}
