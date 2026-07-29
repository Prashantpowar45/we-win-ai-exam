import { NextRequest, NextResponse } from 'next/server';
import { EXPANDED_QUESTION_BANK } from '@/lib/mockExamData';
import { Question } from '@/lib/types';

let inMemoryQuestionBank: Question[] = [...EXPANDED_QUESTION_BANK];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const section = searchParams.get('section');
    const difficulty = searchParams.get('difficulty');
    const search = searchParams.get('search');

    let filtered = [...inMemoryQuestionBank];

    if (category && category !== 'all') {
      filtered = filtered.filter(q => q.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (section && section !== 'all') {
      filtered = filtered.filter(q => q.section.toLowerCase().includes(section.toLowerCase()));
    }

    if (difficulty && difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
    }

    if (search && search.trim()) {
      const qStr = search.toLowerCase();
      filtered = filtered.filter(
        q =>
          q.questionText.en.toLowerCase().includes(qStr) ||
          q.topic.toLowerCase().includes(qStr) ||
          q.subject.toLowerCase().includes(qStr)
      );
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      questions: filtered
    });

  } catch (error) {
    console.error('API Error in GET /api/questions:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newQuestion: Question = {
      ...body,
      id: `q-custom-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      createdAt: new Date().toISOString()
    };

    inMemoryQuestionBank = [newQuestion, ...inMemoryQuestionBank];

    return NextResponse.json({
      success: true,
      message: 'Question added to Database successfully!',
      question: newQuestion
    }, { status: 201 });

  } catch (error) {
    console.error('API Error in POST /api/questions:', error);
    return NextResponse.json({ success: false, error: 'Failed to insert question' }, { status: 500 });
  }
}
