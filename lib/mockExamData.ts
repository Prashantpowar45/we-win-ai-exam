import { MockTest, LeaderboardUser, Badge } from './types';

export const EXAM_CATEGORIES = [
  {
    id: 'ssc',
    name: 'SSC Exams',
    subExams: ['SSC CGL Tier 1', 'SSC CHSL', 'SSC MTS', 'SSC GD', 'CPO SI'],
    icon: 'ShieldCheck',
    color: 'from-blue-600 to-indigo-600',
    count: 45
  },
  {
    id: 'bank',
    name: 'Bank & Financial Exams',
    subExams: ['IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'RBI Assistant', 'RBI Grade B'],
    icon: 'Building2',
    color: 'from-emerald-600 to-teal-600',
    count: 38
  },
  {
    id: 'railway',
    name: 'Railway Exams',
    subExams: ['RRB NTPC', 'RRB Group D', 'RRB JE', 'RRB ALP'],
    icon: 'Train',
    color: 'from-amber-600 to-orange-600',
    count: 32
  },
  {
    id: 'upsc',
    name: 'UPSC Services',
    subExams: ['UPSC Prelims Paper 1', 'UPSC CSAT Paper 2'],
    icon: 'GraduationCap',
    color: 'from-purple-600 to-violet-600',
    count: 28
  },
  {
    id: 'state',
    name: 'State Exams (Maharashtra & Others)',
    subExams: ['MPSC Rajyaseva', 'Police Bharti', 'Talathi Bharti', 'Gram Sevak', 'Forest Guard'],
    icon: 'Compass',
    color: 'from-rose-600 to-pink-600',
    count: 50
  },
  {
    id: 'aptitude',
    name: 'Aptitude & Logical Reasoning',
    subExams: ['Quant', 'Logical Reasoning', 'Verbal Ability', 'Data Interpretation', 'Coding Aptitude'],
    icon: 'BrainCircuit',
    color: 'from-cyan-600 to-blue-600',
    count: 65
  },
  {
    id: 'gk',
    name: 'General Knowledge & Current Affairs (2020-2026)',
    subExams: ['2020-2026 Events', 'Indian Constitution', 'ISRO & Defense', 'Economy & Budget', 'Maharashtra GK'],
    icon: 'Globe',
    color: 'from-amber-500 to-yellow-600',
    count: 120
  }
];

export const SAMPLE_MOCK_TESTS: MockTest[] = [
  {
    id: 'cgl-full-01',
    title: 'SSC CGL Tier 1 Full Mock Test #01',
    category: 'SSC Exams',
    subCategory: 'SSC CGL',
    durationMinutes: 60,
    totalMarks: 200,
    questionCount: 5,
    difficulty: 'Medium',
    attemptsCount: 14250,
    questions: [
      {
        id: 'q1',
        category: 'SSC Exams',
        subject: 'General Awareness',
        topic: 'Space Missions & ISRO (2020-2026)',
        difficulty: 'Medium',
        marks: 2,
        negativeMarks: 0.5,
        timeLimitSec: 45,
        questionText: {
          en: 'Which ISRO mission successfully landed on the South Pole of the Moon in 2023?',
          hi: '2023 में चंद्रमा के दक्षिणी ध्रुव पर सफलतापूर्वक उतरने वाला इसरो (ISRO) का कौन सा मिशन था?',
          mr: '२०२३ मध्ये चंद्राच्या दक्षिण धु्रवावर यशस्वीपणे उतरणारे इस्रोचे (ISRO) कोणते अभियान होते?'
        },
        options: {
          en: ['Chandrayaan-1', 'Chandrayaan-2', 'Chandrayaan-3', 'Aditya-L1'],
          hi: ['चंद्रयान-1', 'चंद्रयान-2', 'चंद्रयान-3', 'आदित्य-L1'],
          mr: ['चंद्रयान-१', 'चंद्रयान-२', 'चंद्रयान-३', 'आदित्य-L1']
        },
        correctOptionIndex: 2,
        explanation: {
          en: 'Chandrayaan-3 was launched by ISRO on July 14, 2023, and successfully soft-landed near the lunar south pole on August 23, 2023, making India the first country to land on the Moon\'s south pole.',
          hi: 'चंद्रयान-3 को ISRO ने 14 जुलाई 2023 को लॉन्च किया था और 23 अगस्त 2023 को चंद्रमा के दक्षिणी ध्रुव के पास सफलतापूर्वक उतरा। भारत चंद्रमा के दक्षिणी ध्रुव पर उतरने वाला पहला देश बना।',
          mr: 'चंद्रयान-३ हे इस्रोने १४ जुलै २०२३ रोजी प्रक्षेपित केले आणि २३ ऑगस्ट २०२३ रोजी चंद्राच्या दक्षिण धु्रवावर यशस्वीपणे उतरवले. चंद्राच्या दक्षिण धु्रवावर उतरणारा भारत हा पहिला देश ठरला.'
        }
      },
      {
        id: 'q2',
        category: 'Aptitude',
        subject: 'Quantitative Aptitude',
        topic: 'Profit & Loss',
        difficulty: 'Hard',
        marks: 2,
        negativeMarks: 0.5,
        timeLimitSec: 60,
        questionText: {
          en: 'A shopkeeper sells an article at a profit of 20%. If he had bought it for 10% less and sold it for ₹18 less, he would have gained 30%. What is the cost price of the article?',
          hi: 'एक दुकानदार किसी वस्तु को 20% लाभ पर बेचता है। यदि उसने इसे 10% कम में खरीदा होता और ₹18 कम में बेचा होता, तो उसे 30% का लाभ होता। वस्तु का क्रय मूल्य क्या है?',
          mr: 'एक विक्रेता एक वस्तू २०% नफ्याने विकतो. जर त्याने ती १०% कमी किमतीत खरेदी केली असती आणि १८ रुपये कमी किमतीत विकली असती, तर त्याला ३०% नफा झाला असता. तर त्या वस्तूची मूळ खरेदी किंमत किती?'
        },
        options: {
          en: ['₹500', '₹600', '₹550', '₹450'],
          hi: ['₹500', '₹600', '₹550', '₹450'],
          mr: ['₹५००', '₹६००', '₹५५०', '₹४५०']
        },
        correctOptionIndex: 1,
        explanation: {
          en: 'Let Cost Price = 100x. Selling Price = 120x. New Cost Price = 90x. New Selling Price = 90x * 1.3 = 117x. Given: 120x - 117x = ₹18 => 3x = 18 => x = 6. Cost Price = 100 * 6 = ₹600.',
          hi: 'माना क्रय मूल्य = 100x. विक्रय मूल्य = 120x. नया क्रय मूल्य = 90x. नया विक्रय मूल्य = 90x * 1.3 = 117x. दिया गया है: 120x - 117x = ₹18 => 3x = 18 => x = 6. क्रय मूल्य = 100 * 6 = ₹600.',
          mr: 'धरा खरेदी किंमत = १००x. विक्री किंमत = १२०x. नवीन खरेदी किंमत = ९०x. नवीन विक्री किंमत = ९०x * १.३ = ११७x. दिलेले: १२०x - ११७x = १८ => ३x = १८ => x = ६. मूळ खरेदी किंमत = १०० * ६ = ₹६००.'
        }
      },
      {
        id: 'q3',
        category: 'SSC Exams',
        subject: 'General Awareness',
        topic: 'Indian Constitution & Polity',
        difficulty: 'Medium',
        marks: 2,
        negativeMarks: 0.5,
        timeLimitSec: 40,
        questionText: {
          en: 'Which Article of the Indian Constitution empowers the President to declare a National Emergency?',
          hi: 'भारतीय संविधान का कौन सा अनुच्छेद राष्ट्रपति को राष्ट्रीय आपातकाल घोषित करने की शक्ति देता है?',
          mr: 'भारतीय राज्यघटनेतील कोणते कलम राष्ट्रपतींना राष्ट्रीय आणीबाणी घोषित करण्याचा अधिकार देते?'
        },
        options: {
          en: ['Article 352', 'Article 356', 'Article 360', 'Article 370'],
          hi: ['अनुच्छेद 352', 'अनुच्छेद 356', 'अनुच्छेद 360', 'अनुच्छेद 370'],
          mr: ['कलम ३५२', 'कलम ३५६', 'कलम ३६०', 'कलम ३७०']
        },
        correctOptionIndex: 0,
        explanation: {
          en: 'Article 352 allows National Emergency due to war, external aggression, or armed rebellion. Article 356 relates to President\'s Rule in states, and Article 360 covers Financial Emergency.',
          hi: 'अनुच्छेद 352 युद्ध, बाह्य आक्रमण या सशस्त्र विद्रोह के आधार पर राष्ट्रीय आपातकाल की अनुमति देता है। अनुच्छेद 356 राज्यों में राष्ट्रपति शासन से संबंधित है।',
          mr: 'कलम ३५२ हे युद्ध, परकीय आक्रमण किंवा सशस्त्र बंडखोरीच्या आधारे राष्ट्रीय आणीबाणी लागू करण्याचा अधिकार देते. कलम ३५६ हे राष्ट्रपती राजवटीशी संबंधित आहे.'
        }
      },
      {
        id: 'q4',
        category: 'Aptitude',
        subject: 'Logical Reasoning',
        topic: 'Syllogism',
        difficulty: 'Medium',
        marks: 2,
        negativeMarks: 0.5,
        timeLimitSec: 45,
        questionText: {
          en: 'Statements: 1. All apples are fruits. 2. Some fruits are sweet.\nConclusions: I. Some apples are sweet. II. All fruits are apples.',
          hi: 'कथन: 1. सभी सेब फल हैं। 2. कुछ फल मीठे हैं।\nनिष्कर्ष: I. कुछ सेब मीठे हैं। II. सभी फल सेब हैं।',
          mr: 'विधाने: १. सर्व सफरचंद फळे आहेत. २. काही फळे गोड आहेत.\nनिष्कर्ष: I. काही सफरचंद गोड आहेत. II. सर्व फळे सफरचंद आहेत.'
        },
        options: {
          en: ['Only I follows', 'Only II follows', 'Neither I nor II follows', 'Both I and II follow'],
          hi: ['केवल I अनुसरण करता है', 'केवल II अनुसरण करता है', 'न तो I और न ही II अनुसरण करता है', 'I और II दोनों अनुसरण करते हैं'],
          mr: ['फक्त I निष्कर्ष निघतो', 'फक्त II निष्कर्ष निघतो', 'एकही निष्कर्ष निघत नाही', 'दोन्ही निष्कर्ष निघतात']
        },
        correctOptionIndex: 2,
        explanation: {
          en: 'No direct connection between apples and sweet is guaranteed in statements. Therefore, neither conclusion I nor conclusion II definitely follows.',
          hi: 'कथनों में सेब और मीठे के बीच कोई सीधा संबंध निश्चित नहीं है। इसलिए, न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है।',
          mr: 'विधानांमध्ये सफरचंद आणि गोड यांच्यात थेट संबंध निश्चित नाही. त्यामुळे एकही निष्कर्ष निघत नाही.'
        }
      },
      {
        id: 'q5',
        category: 'State Exams',
        subject: 'Maharashtra General Knowledge',
        topic: 'Maharashtra History & Geography',
        difficulty: 'Medium',
        marks: 2,
        negativeMarks: 0.5,
        timeLimitSec: 40,
        questionText: {
          en: 'Which river is known as the "Dakshin Ganga" of Maharashtra?',
          hi: 'महाराष्ट्र की किस नदी को "दक्षिण गंगा" के नाम से जाना जाता है?',
          mr: 'महाराष्ट्रातील कोणत्या नदीला "दक्षिण गंगा" म्हणून ओळखले जाते?'
        },
        options: {
          en: ['Krishna', 'Godavari', 'Tapi', 'Bhima'],
          hi: ['कृष्णा', 'गोदावरी', 'तापी', 'भीमा'],
          mr: ['कृष्णा', 'गोदावरी', 'तापी', 'भीमा']
        },
        correctOptionIndex: 1,
        explanation: {
          en: 'Godavari is the longest river in Maharashtra and Southern India, originating at Trimbakeshwar (Nashik), and is popularly called the "Dakshin Ganga".',
          hi: 'गोदावरी महाराष्ट्र और दक्षिण भारत की सबसे लंबी नदी है, जो त्र्यंबकेश्वर (नाशिक) से निकलती है और इसे "दक्षिण गंगा" कहा जाता है।',
          mr: 'गोदावरी ही महाराष्ट्र व दक्षिण भारतातील सर्वात मोठी नदी असून तिचा उगम त्र्यंबकेश्वर (नाशिक) येथे होतो. तिला "दक्षिण गंगा" म्हटले जाते.'
        }
      }
    ]
  },
  {
    id: 'ibps-po-01',
    title: 'IBPS PO Prelims Grand Test #01',
    category: 'Bank Exams',
    subCategory: 'IBPS PO',
    durationMinutes: 60,
    totalMarks: 100,
    questionCount: 5,
    difficulty: 'Hard',
    attemptsCount: 9800,
    questions: []
  },
  {
    id: 'mpsc-rajya-01',
    title: 'MPSC Rajyaseva Prelims Mock Test #01',
    category: 'State Exams',
    subCategory: 'MPSC',
    durationMinutes: 120,
    totalMarks: 200,
    questionCount: 5,
    difficulty: 'Hard',
    attemptsCount: 11400,
    questions: []
  }
];

export const SAMPLE_LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: 'Aarav Sharma', score: 194.5, accuracy: 98.2, xp: 4850, avatar: '👨‍🎓', badge: 'National Rank 1', state: 'Maharashtra', college: 'COEP Pune' },
  { rank: 2, name: 'Priya Deshmukh', score: 191.0, accuracy: 96.5, xp: 4420, avatar: '👩‍🎓', badge: 'Quant Wizard', state: 'Maharashtra', college: 'VJTI Mumbai' },
  { rank: 3, name: 'Rohan Patel', score: 188.5, accuracy: 95.0, xp: 4100, avatar: '👨‍💼', badge: 'GK Master', state: 'Gujarat', college: 'IIT Bombay' },
  { rank: 4, name: 'Ananya Verma', score: 185.0, accuracy: 94.2, xp: 3950, avatar: '👩‍💻', badge: 'SSC Topper', state: 'Delhi', college: 'DU Delhi' },
  { rank: 5, name: 'Prashant Powar', score: 182.5, accuracy: 93.8, xp: 3800, avatar: '🚀', badge: 'Streak Legend', state: 'Maharashtra', college: 'Shivaji Univ' }
];

export const USER_BADGES: Badge[] = [
  { id: 'b1', name: 'First Test Passed', description: 'Completed your 1st mock test on We Win', icon: '🎯', unlocked: true },
  { id: 'b2', name: '7-Day Streak', description: 'Practiced continuously for 7 days', icon: '🔥', unlocked: true },
  { id: 'b3', name: 'Accuracy King', description: 'Scored 95%+ accuracy in a mock test', icon: '👑', unlocked: true },
  { id: 'b4', name: 'GK Specialist 2026', description: 'Solved 100+ Current Affairs questions', icon: '🌐', unlocked: false },
  { id: 'b5', name: 'Speed Demon', description: 'Answered 30 questions under target time', icon: '⚡', unlocked: false },
];
