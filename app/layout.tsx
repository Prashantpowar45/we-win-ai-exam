import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'We_Win23 | AI-Powered Government Exam & Proctored Mock Test Platform',
  description: 'Practice proctored mock tests for SSC CGL, IBPS PO, RRB NTPC, UPSC, MPSC & Police Bharti with live camera monitoring, tab switch detection, and AI step-by-step solutions.',
  keywords: ['We_Win23', 'AI Mock Test', 'SSC CGL', 'IBPS PO', 'MPSC', 'Police Bharti', 'Current Affairs 2026', 'Webcam Proctoring'],
  openGraph: {
    title: 'We_Win23 | AI Proctored Examination System',
    description: 'Master Competitive Government Exams with AI Precision & Live Proctoring.',
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
