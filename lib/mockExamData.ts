import { MockTest, LeaderboardUser, Badge, Question } from './types';

export const EXAM_CATEGORIES = [
  {
    id: 'bsf',
    name: 'BSF Head Constable & Defense',
    subExams: ['BSF Head Constable (Ministerial)', 'BSF Tradesman', 'CISF', 'CRPF', 'Police Bharti'],
    icon: 'ShieldCheck',
    color: 'from-amber-600 via-orange-600 to-red-600',
    count: 55
  },
  {
    id: 'ssc',
    name: 'SSC Exams',
    subExams: ['SSC CGL Tier 1', 'SSC CHSL', 'SSC MTS', 'SSC GD', 'CPO SI'],
    icon: 'ShieldCheck',
    color: 'from-blue-600 via-indigo-600 to-violet-600',
    count: 45
  },
  {
    id: 'bank',
    name: 'Bank & Financial Exams',
    subExams: ['IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'RBI Assistant', 'RBI Grade B'],
    icon: 'Building2',
    color: 'from-emerald-600 via-teal-600 to-cyan-600',
    count: 38
  },
  {
    id: 'railway',
    name: 'Railway Exams',
    subExams: ['RRB NTPC', 'RRB Group D', 'RRB JE', 'RRB ALP'],
    icon: 'Train',
    color: 'from-amber-600 via-yellow-600 to-orange-600',
    count: 32
  },
  {
    id: 'upsc',
    name: 'UPSC Services',
    subExams: ['UPSC Prelims Paper 1', 'UPSC CSAT Paper 2'],
    icon: 'GraduationCap',
    color: 'from-purple-600 via-fuchsia-600 to-pink-600',
    count: 28
  },
  {
    id: 'state',
    name: 'State Exams (Maharashtra & Others)',
    subExams: ['MPSC Rajyaseva', 'Police Bharti', 'Talathi Bharti', 'Gram Sevak', 'Forest Guard'],
    icon: 'Compass',
    color: 'from-rose-600 via-pink-600 to-purple-600',
    count: 50
  },
  {
    id: 'aptitude',
    name: 'Aptitude & Logical Reasoning',
    subExams: ['Quant', 'Logical Reasoning', 'Verbal Ability', 'Data Interpretation', 'Coding Aptitude'],
    icon: 'BrainCircuit',
    color: 'from-cyan-600 via-blue-600 to-indigo-600',
    count: 65
  },
  {
    id: 'gk',
    name: 'General Knowledge & Current Affairs (2020-2026)',
    subExams: ['2020-2026 Events', 'Indian Constitution', 'ISRO & Defense', 'Economy & Budget', 'Maharashtra GK'],
    icon: 'Globe',
    color: 'from-indigo-500 via-purple-600 to-pink-600',
    count: 120
  }
];

export const EXPANDED_QUESTION_BANK: Question[] = [
  // BSF REAL EXAM QUESTIONS (FROM PDF ATTACHED)
  {
    id: 'q-bsf-1',
    category: 'BSF Head Constable & Defense',
    section: 'English / Verbal Ability',
    subject: 'English Language',
    topic: 'Para Jumbles / Sentence Rearrangement',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 50,
    questionText: {
      en: '[BSF 2023 Paper] Arrange the jumbled sentences in correct order:\nA. He wondered why she had contacted him now.\nB. They were mature adults now – very different people from the youngsters of years ago.\nC. On the one hand, he was curious to see her again; on the other hand, he was not sure if Ellen was the same as he had known in the past.\nD. As Sunday approached, George re-read Ellen\'s e-mail several times.',
      hi: '[BSF 2023 परीक्षा] वाक्यों को सही क्रम में व्यवस्थित करें:\nA. वह सोच रहा था कि उसने अब उससे क्यों संपर्क किया है।\nB. वे अब परिपक्व वयस्क थे।\nC. एक तरफ वह उसे देखने के लिए उत्सुक था, दूसरी तरफ अनिश्चित था।\nD. जैसे ही रविवार पास आया, जॉर्ज ने एलेन का ईमेल पढ़ा।',
      mr: '[BSF २०२३ परीक्षा] वाक्यांचा योग्य क्रम लावा:\nA. तिने आता त्याला का संपर्क केला असावा असा विचार तो करत होता.\nB. ते आता प्रौढ झाले होते.\nC. एका बाजूला त्याला तिला पुन्हा पाहण्याची उत्सुकता होती, तर दुसऱ्या बाजूला शंका होती.\nD. रविवार जवळ येत असताना जॉर्जने एलेनचा ईमेल पुन्हा वाचला.'
    },
    options: {
      en: ['ABDC', 'DACB', 'CADB', 'BCAD'],
      hi: ['ABDC', 'DACB', 'CADB', 'BCAD'],
      mr: ['ABDC', 'DACB', 'CADB', 'BCAD']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'Correct sequence is DACB. Paragraph begins with D (George reading Ellen\'s email as Sunday approached), followed by A (wondering why she contacted him), C (his mixed feelings), and B (reflecting on their maturity).',
      hi: 'सही क्रम DACB है। पैराग्राफ D से शुरू होता है जब जॉर्ज रविवार करीब आने पर एलेन का ईमेल पढ़ता है, फिर A, C और B आता है।',
      mr: 'योग्य क्रम DACB आहे. परिच्छेदाची सुरुवात D पासून होते, त्यानंतर A, C आणि B क्रम येतो.'
    }
  },
  {
    id: 'q-bsf-2',
    category: 'BSF Head Constable & Defense',
    section: 'English / Verbal Ability',
    subject: 'English Language',
    topic: 'Antonyms',
    difficulty: 'Easy',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 30,
    questionText: {
      en: '[BSF 2023 Paper] Choose the word OPPOSITE in meaning to the underlined word:\n"The actor came to the function with disheveled hair."',
      hi: '[BSF 2023 परीक्षा] "disheveled" शब्द का विलोम शब्द चुनें:\n"The actor came to the function with disheveled hair."',
      mr: '[BSF २०२३ परीक्षा] "disheveled" या शब्दाचा विरुद्धार्थी शब्द निवडा:'
    },
    options: {
      en: ['rumpled', 'slovenly', 'tidy', 'messy'],
      hi: ['rumpled (बिखरा हुआ)', 'slovenly (लापरवाह)', 'tidy (साफ-सुथरा / व्यवस्थित)', 'messy (अस्त-व्यस्त)'],
      mr: ['rumpled (विस्कटलेले)', 'slovenly (गलिच्छ)', 'tidy (व्यवस्थित व नीटनेटके)', 'messy (अस्तव्यस्त)']
    },
    correctOptionIndex: 2,
    explanation: {
      en: '"Disheveled" means untidy or disordered (hair/clothes). The exact opposite (antonym) is "tidy" (neat and orderly).',
      hi: '"Disheveled" का अर्थ अस्त-व्यस्त या बिखरा हुआ है। इसका विलोम शब्द "tidy" (व्यवस्थित/साफ) है।',
      mr: '"Disheveled" म्हणजे विस्कटलेले किंवा अनियंत्रित. त्याचा विरुद्धार्थी शब्द "tidy" (नीटनेटके व व्यवस्थित) आहे.'
    }
  },
  {
    id: 'q-bsf-3',
    category: 'BSF Head Constable & Defense',
    section: 'English / Verbal Ability',
    subject: 'English Language',
    topic: 'Synonyms',
    difficulty: 'Easy',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 30,
    questionText: {
      en: '[BSF 2023 Paper] Select the most appropriate SYNONYM of the underlined word:\n"They have a reputation of being neither industrious nor intelligent."',
      hi: '[BSF 2023] "industrious" का सबसे उपयुक्त पर्यायवाची शब्द चुनें:',
      mr: '[BSF २०२३] "industrious" या शब्दाचा योग्य समानार्थी शब्द निवडा:'
    },
    options: {
      en: ['Tolerant', 'Arrogant', 'Diligent', 'Negligent'],
      hi: ['Tolerant (सहनशील)', 'Arrogant (घमंडी)', 'Diligent (मेहनती / परिश्रमी)', 'Negligent (लापरवाह)'],
      mr: ['Tolerant (सहनशील)', 'Arrogant (अहंकारी)', 'Diligent (कष्टाळू / कल्पक)', 'Negligent (निष्काळजी)']
    },
    correctOptionIndex: 2,
    explanation: {
      en: '"Industrious" means hard-working and devoted. Its synonym is "Diligent".',
      hi: '"Industrious" का अर्थ मेहनती होता है। इसका पर्यायवाची "Diligent" है।',
      mr: '"Industrious" म्हणजे मेहनती व कष्टाळू. त्याचा समानार्थी शब्द "Diligent" आहे.'
    }
  },
  {
    id: 'q-bsf-4',
    category: 'BSF Head Constable & Defense',
    section: 'Reasoning',
    subject: 'General Intelligence',
    topic: 'Mathematical Operations & Coding',
    difficulty: 'Hard',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 60,
    questionText: {
      en: '[BSF 2023 Paper] In a code: "&" means +, "#" means ×, "@" means ÷, "$" means −. Find the value of:\n45 & 35 $ (14 # 7) & 63 @ 9 # 5 $ (14 $ 11) = ?',
      hi: '[BSF 2023] कोड में: "&" का अर्थ +, "#" का अर्थ ×, "@" का अर्थ ÷, "$" का अर्थ − है। मान ज्ञात कीजिए:\n45 & 35 $ (14 # 7) & 63 @ 9 # 5 $ (14 $ 11) = ?',
      mr: '[BSF २०२३] कोडमध्ये: "&" म्हणजे +, "#" म्हणजे ×, "@" म्हणजे ÷, "$" म्हणजे −. तर किंमत काढा:\n45 & 35 $ (14 # 7) & 63 @ 9 # 5 $ (14 $ 11) = ?'
    },
    options: {
      en: ['17', '27', '11', '14'],
      hi: ['17', '27', '11', '14'],
      mr: ['१७', '२७', '११', '१४']
    },
    correctOptionIndex: 3,
    explanation: {
      en: 'Replacing symbols: 45 + 35 - (14 * 7) + (63 / 9 * 5) - (14 - 11)\n= 45 + 35 - 98 + (7 * 5) - 3\n= 80 - 98 + 35 - 3 = 14.',
      hi: 'प्रतीक बदलने पर: 45 + 35 - (14 * 7) + (63 / 9 * 5) - (14 - 11) = 80 - 98 + 35 - 3 = 14.',
      mr: 'चिन्हे बदलल्यास: ४५ + ३५ - (१४ * ७) + (६३ / ९ * ५) - (१४ - ११) = ८० - ९८ + ३५ - ३ = १४.'
    }
  },
  {
    id: 'q-bsf-5',
    category: 'BSF Head Constable & Defense',
    section: 'Quantitative Aptitude',
    subject: 'Numerical Aptitude',
    topic: 'Speed & Ratio',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 45,
    questionText: {
      en: '[BSF 2023 Paper] What is the ratio of speeds of two cars, one moving at 60 km/h and the other at 5 m/s?',
      hi: '[BSF 2023] 60 किमी/घंटा और 5 मी/सेकंड की चाल से चलने वाली दो कारों की चालों का अनुपात क्या है?',
      mr: '[BSF २०२३] ६० किमी/तास आणि ५ मी/सेकंद वेगाने जाणाऱ्या दोन गाड्यांच्या वेगाचे गुणोत्तर किती?'
    },
    options: {
      en: ['10 : 3', '3 : 10', '1 : 12', '12 : 1'],
      hi: ['10 : 3', '3 : 10', '1 : 12', '12 : 1'],
      mr: ['१० : ३', '३ : १०', '१ : १२', '१२ : १']
    },
    correctOptionIndex: 0,
    explanation: {
      en: 'Convert 5 m/s to km/h: 5 * (18/5) = 18 km/h. Ratio = 60 : 18 = 10 : 3.',
      hi: '5 m/s को km/h में बदलें: 5 * 18/5 = 18 km/h। अनुपात = 60 : 18 = 10 : 3.',
      mr: '५ m/s चे km/h मध्ये रूपांतर करा: ५ * १८/५ = १८ km/h. गुणोत्तर = ६० : १८ = १० : ३.'
    }
  },

  // QUANTITATIVE APTITUDE
  {
    id: 'q-quant-1',
    category: 'SSC Exams',
    section: 'Quantitative Aptitude',
    subject: 'Quantitative Aptitude',
    topic: 'Profit & Loss',
    difficulty: 'Hard',
    marks: 2.5,
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
      en: 'Let Cost Price = 100x. Selling Price = 120x. New Cost Price = 90x. New Selling Price = 90x * 1.3 = 117x. Difference: 120x - 117x = ₹18 => 3x = 18 => x = 6. Cost Price = ₹600.',
      hi: 'माना क्रय मूल्य = 100x. विक्रय मूल्य = 120x. नया क्रय मूल्य = 90x. नया विक्रय मूल्य = 90x * 1.3 = 117x. 120x - 117x = ₹18 => 3x = 18 => x = 6. क्रय मूल्य = ₹600.',
      mr: 'धरा खरेदी किंमत = १००x. विक्री किंमत = १२०x. नवीन खरेदी किंमत = ९०x. नवीन विक्री किंमत = ९०x * १.३ = ११७x. फरक = १८ रुपये => ३x = १८ => x = ६. खरेदी किंमत = ₹६००.'
    }
  },
  {
    id: 'q-quant-2',
    category: 'SSC Exams',
    section: 'Quantitative Aptitude',
    subject: 'Quantitative Aptitude',
    topic: 'Time Speed & Distance',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 50,
    questionText: {
      en: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
      hi: 'विपरीत दिशाओं में चल रही दो ट्रेनें प्लेटफॉर्म पर खड़े एक व्यक्ति को क्रमशः 27 सेकंड और 17 सेकंड में पार करती हैं तथा वे एक-दूसरे को 23 सेकंड में पार करती हैं। उनकी चालों का अनुपात है:',
      mr: 'विरुद्ध दिशेने जाणाऱ्या दोन गाड्या प्लॅटफॉर्मवर उभ्या असलेल्या एका माणसाला अनुक्रमे २७ सेकंद आणि १७ सेकंदात ओलांडतात आणि त्या एकमेकांना २३ सेकंदात ओलांडतात. त्यांच्या वेगाचे गुणोत्तर किती?'
    },
    options: {
      en: ['1 : 3', '3 : 2', '3 : 4', '2 : 3'],
      hi: ['1 : 3', '3 : 2', '3 : 4', '2 : 3'],
      mr: ['१ : ३', '३ : २', '३ : ४', '२ : ३']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'Let speeds be x and y. Lengths = 27x and 17y. Total distance = 27x + 17y. Time to cross each other = (27x + 17y)/(x + y) = 23 => 27x + 17y = 23x + 23y => 4x = 6y => x/y = 3/2.',
      hi: 'माना चाल x और y हैं। लंबाई = 27x और 17y। पार करने का समय = (27x + 17y)/(x + y) = 23 => 4x = 6y => x/y = 3/2.',
      mr: 'धरा वेग x व y आहेत. लांबी = २७x व १७y. ओलांडण्याचा वेळ = (२७x + १७y)/(x + y) = २३ => ४x = ६y => x/y = ३/२.'
    }
  },

  // REASONING
  {
    id: 'q-reason-1',
    category: 'SSC Exams',
    section: 'Reasoning',
    subject: 'Reasoning',
    topic: 'Syllogism',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 40,
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
      en: 'No direct relation between apples and sweet is guaranteed in the statements. Hence, neither conclusion follows.',
      hi: 'कथनों में सेब और मीठे के बीच कोई सीधा संबंध निश्चित नहीं है। इसलिए, कोई भी निष्कर्ष अनुसरण नहीं करता है।',
      mr: 'विधानांमध्ये सफरचंद आणि गोड यांच्यात थेट संबंध निश्चित नाही. त्यामुळे एकही निष्कर्ष निघत नाही.'
    }
  },

  // GK 2020-2026
  {
    id: 'q-gk-1',
    category: 'SSC Exams',
    section: 'General Knowledge / Current Affairs',
    subject: 'General Awareness',
    topic: 'ISRO & Space Missions (2020-2026)',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 30,
    questionText: {
      en: 'Which ISRO mission successfully landed on the South Pole of the Moon on August 23, 2023?',
      hi: '23 अगस्त 2023 को चंद्रमा के दक्षिणी ध्रुव पर सफलतापूर्वक उतरने वाला इसरो का कौन सा मिशन था?',
      mr: '२३ ऑगस्ट २०२३ रोजी चंद्राच्या दक्षिण धु्रवावर यशस्वीपणे उतरणारे इस्रोचे कोणते अभियान होते?'
    },
    options: {
      en: ['Chandrayaan-1', 'Chandrayaan-2', 'Chandrayaan-3', 'Aditya-L1'],
      hi: ['चंद्रयान-1', 'चंद्रयान-2', 'चंद्रयान-3', 'आदित्य-L1'],
      mr: ['चंद्रयान-१', 'चंद्रयान-२', 'चंद्रयान-३', 'आदित्य-L1']
    },
    correctOptionIndex: 2,
    explanation: {
      en: 'Chandrayaan-3 successfully soft-landed near the lunar south pole on August 23, 2023. India became the first country to land on the Moon\'s south pole.',
      hi: 'चंद्रयान-3 ने 23 अगस्त 2023 को चंद्रमा के दक्षिणी ध्रुव के पास सॉफ्ट लैंडिंग की। भारत दक्षिणी ध्रुव पर उतरने वाला पहला देश बना।',
      mr: 'चंद्रयान-३ हे २३ ऑगस्ट २०२३ रोजी चंद्राच्या दक्षिण धु्रवावर यशस्वीपणे उतरले. दक्षिण धु्रवावर उतरणारा भारत हा पहिला देश ठरला.'
    }
  }
];

export const SAMPLE_MOCK_TESTS: MockTest[] = [
  {
    id: 'bsf-head-constable-01',
    title: 'BSF Head Constable (Ministerial) Real Paper 2023',
    category: 'BSF Head Constable & Defense',
    subCategory: 'BSF Constable',
    durationMinutes: 60,
    totalMarks: 100,
    questionCount: EXPANDED_QUESTION_BANK.length,
    difficulty: 'Medium',
    attemptsCount: 22100,
    sections: [
      { id: 'sec-english', name: 'English / Verbal Ability', questionCount: 3, marks: 25 },
      { id: 'sec-quant', name: 'Quantitative Aptitude', questionCount: 2, marks: 25 },
      { id: 'sec-reasoning', name: 'Reasoning', questionCount: 2, marks: 25 },
      { id: 'sec-gk', name: 'General Knowledge / Current Affairs', questionCount: 1, marks: 25 }
    ],
    questions: EXPANDED_QUESTION_BANK
  },
  {
    id: 'cgl-full-01',
    title: 'SSC CGL Proctored Full Mock Test 2026 #01',
    category: 'SSC Exams',
    subCategory: 'SSC CGL',
    durationMinutes: 60,
    totalMarks: 200,
    questionCount: EXPANDED_QUESTION_BANK.length,
    difficulty: 'Medium',
    attemptsCount: 18450,
    sections: [
      { id: 'sec-quant', name: 'Quantitative Aptitude', questionCount: 2, marks: 50 },
      { id: 'sec-reasoning', name: 'Reasoning', questionCount: 2, marks: 50 },
      { id: 'sec-english', name: 'English / Verbal Ability', questionCount: 3, marks: 50 },
      { id: 'sec-gk', name: 'General Knowledge / Current Affairs', questionCount: 1, marks: 50 }
    ],
    questions: EXPANDED_QUESTION_BANK
  }
];

export const SAMPLE_LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: 'Aarav Sharma', score: 194.5, accuracy: 98.2, xp: 4850, avatar: '👨‍🎓', badge: 'National Rank 1', state: 'Maharashtra', college: 'COEP Pune' },
  { rank: 2, name: 'Priya Deshmukh', score: 191.0, accuracy: 96.5, xp: 4420, avatar: '👩‍🎓', badge: 'Quant Wizard', state: 'Maharashtra', college: 'VJTI Mumbai' },
  { rank: 3, name: 'Rohan Patel', score: 188.5, accuracy: 95.0, xp: 4100, avatar: '👨‍💼', badge: 'GK Master', state: 'Gujarat', college: 'IIT Bombay' },
  { rank: 4, name: 'Ananya Verma', score: 185.0, accuracy: 94.2, xp: 3950, avatar: '👩‍💻', badge: 'SSC Topper', state: 'Delhi', college: 'DU Delhi' },
  { rank: 5, name: 'Prashant Powar', score: 182.5, accuracy: 93.8, xp: 3800, avatar: '🚀', badge: 'Proctored Top Rank', state: 'Maharashtra', college: 'Shivaji Univ' }
];

export const USER_BADGES: Badge[] = [
  { id: 'b1', name: 'First Test Passed', description: 'Completed your 1st proctored mock test on We_Win23', icon: '🎯', unlocked: true },
  { id: 'b2', name: '7-Day Streak', description: 'Practiced continuously for 7 days', icon: '🔥', unlocked: true },
  { id: 'b3', name: 'Proctored Verified', description: 'Passed camera & anti-cheat monitoring with 0 warnings', icon: '🛡️', unlocked: true },
  { id: 'b4', name: 'GK Specialist 2026', description: 'Solved 100+ Current Affairs questions', icon: '🌐', unlocked: false },
  { id: 'b5', name: 'Speed Demon', description: 'Answered 30 questions under target time', icon: '⚡', unlocked: false },
];
