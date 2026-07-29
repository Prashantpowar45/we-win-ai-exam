import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'We Win | AI-Powered Government Exam & Aptitude Platform',
  description: 'Practice real exam-like mock tests for SSC CGL, IBPS PO, RRB, UPSC, MPSC & State Exams with AI step-by-step solutions, mistake analysis, and national rankings.',
  keywords: ['We Win', 'Mock Test', 'SSC CGL', 'IBPS PO', 'MPSC', 'Police Bharti', 'Current Affairs 2026', 'Aptitude'],
  openGraph: {
    title: 'We Win | AI Mock Test Platform',
    description: 'Master Competitive Government Exams with AI Precision.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-win-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
