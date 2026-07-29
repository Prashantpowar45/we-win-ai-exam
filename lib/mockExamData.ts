import { MockTest, LeaderboardUser, Badge, Question } from './types';

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

export const EXPANDED_QUESTION_BANK: Question[] = [
  // SECTION 1: QUANTITATIVE APTITUDE
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
  {
    id: 'q-quant-3',
    category: 'Bank Exams',
    section: 'Quantitative Aptitude',
    subject: 'Quantitative Aptitude',
    topic: 'Simple & Compound Interest',
    difficulty: 'Hard',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 60,
    questionText: {
      en: 'The difference between simple interest and compound interest on a sum of money at 10% per annum for 2 years is ₹631. Find the principal sum.',
      hi: '10% प्रति वर्ष की दर से 2 वर्षों के लिए किसी राशि पर साधारण ब्याज और चक्रवृद्धि ब्याज का अंतर ₹631 है। मूलधन ज्ञात कीजिए।',
      mr: '१०% प्रतिवर्ष दराने २ वर्षांसाठी एका रक्कमेवरील सरळव्याज आणि चक्रवाढव्याज यांतील फरक ६३१ रुपये आहे. तर ती मूळ रक्कम शोधा.'
    },
    options: {
      en: ['₹63,100', '₹60,000', '₹65,000', '₹62,500'],
      hi: ['₹63,100', '₹60,000', '₹65,000', '₹62,500'],
      mr: ['₹६३,१००', '₹६०,०००', '₹६५,०००', '₹६२,५००']
    },
    correctOptionIndex: 0,
    explanation: {
      en: 'Difference formula for 2 years: Diff = P * (R/100)^2. Here 631 = P * (10/100)^2 => 631 = P * 1/100 => P = ₹63,100.',
      hi: '2 वर्ष का अंतर सूत्र: Diff = P * (R/100)^2 => 631 = P * 1/100 => P = ₹63,100.',
      mr: '२ वर्षांच्या फरकाचे सूत्र: Diff = P * (R/100)^2 => ६३१ = P * १/१०० => P = ₹६३,१००.'
    }
  },

  // SECTION 2: REASONING
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
  {
    id: 'q-reason-2',
    category: 'SSC Exams',
    section: 'Reasoning',
    subject: 'Reasoning',
    topic: 'Coding-Decoding',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 40,
    questionText: {
      en: 'If "SYSTEM" is coded as "SYSMET" and "NEARER" as "AENRER", then how is "FRACTION" coded?',
      hi: 'यदि "SYSTEM" को "SYSMET" और "NEARER" को "AENRER" के रूप में कोडित किया जाता है, तो "FRACTION" को कैसे कोडित किया जाएगा?',
      mr: 'जर "SYSTEM" चे सांकेतिक रूप "SYSMET" असेल आणि "NEARER" चे "AENRER" असेल, तर "FRACTION" कसे लिहिले जाईल?'
    },
    options: {
      en: ['CARFTINO', 'CARFNOIT', 'ARFCNOIT', 'FRACNOIT'],
      hi: ['CARFTINO', 'CARFNOIT', 'ARFCNOIT', 'FRACNOIT'],
      mr: ['CARFTINO', 'CARFNOIT', 'ARFCNOIT', 'FRACNOIT']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'Word is divided into two equal parts of 4 letters. First half FRAC reversed to CARF; Second half TION reversed to NOIT. Result = CARFNOIT.',
      hi: 'शब्द को 4 अक्षरों के दो भागों में विभाजित किया गया है। पहला भाग FRAC उल्टा होकर CARF बनता है; दूसरा भाग TION उल्टा होकर NOIT बनता है। उत्तर: CARFNOIT.',
      mr: 'शब्दाचे ४ अक्षरांचे दोन भाग केले आहेत. पहिला भाग FRAC उलट करून CARF होतो; दुसरा भाग TION उलट करून NOIT होतो. उत्तर = CARFNOIT.'
    }
  },
  {
    id: 'q-reason-3',
    category: 'State Exams',
    section: 'Reasoning',
    subject: 'Reasoning',
    topic: 'Blood Relation',
    difficulty: 'Easy',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 35,
    questionText: {
      en: 'Pointing to a photograph, a man said, "I have no brother or sister but that man\'s father is my father\'s son." Whose photograph was it?',
      hi: 'एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, "मेरा कोई भाई या बहन नहीं है, लेकिन उस आदमी का पिता मेरे पिता का बेटा है।" वह तस्वीर किसकी थी?',
      mr: 'एका फोटोकडे दाखवत एक माणूस म्हणाला, "मला भाऊ किंवा बहीण नाही, पण त्या माणसाचे वडील हे माझ्या वडिलांचा मुलगा आहेत." तर तो फोटो कोणाचा होता?'
    },
    options: {
      en: ['His own photograph', 'His son\'s photograph', 'His father\'s photograph', 'His nephew\'s photograph'],
      hi: ['उसकी अपनी तस्वीर', 'उसके बेटे की तस्वीर', 'उसके पिता की तस्वीर', 'उसके भतीजे की तस्वीर'],
      mr: ['त्याचा स्वतःचा फोटो', 'त्याच्या मुलाचा फोटो', 'त्याच्या वडिलांचा फोटो', 'त्याच्या पुतण्याचा फोटो']
    },
    correctOptionIndex: 1,
    explanation: {
      en: '"My father\'s son" = the man himself (since he has no siblings). So "that man\'s father = myself". Therefore, the photograph is of his son.',
      hi: '"मेरे पिता का बेटा" = वह व्यक्ति स्वयं। अतः उस आदमी का पिता = वह स्वयं। इसलिए फोटो उसके बेटे की है।',
      mr: '"माझ्या वडिलांचा मुलगा" = तो माणूस स्वतः (कारण त्याला भाऊ-बहीण नाहीत). म्हणून त्या मुलाचे वडील = तो स्वतः. उत्तर: त्याच्या मुलाचा फोटो.'
    }
  },

  // SECTION 3: ENGLISH / VERBAL ABILITY
  {
    id: 'q-eng-1',
    category: 'SSC Exams',
    section: 'English / Verbal Ability',
    subject: 'English',
    topic: 'Error Detection',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 35,
    questionText: {
      en: 'Select the option that contains a grammatical error: "Neither the principal nor the teachers was present at the meeting."',
      hi: 'व्याकरण की दृष्टि से अशुद्ध भाग चुनें: "Neither the principal nor the teachers was present at the meeting."',
      mr: 'व्याकरणाच्या दृष्टीने चुकीचा भाग निवडा: "Neither the principal nor the teachers was present at the meeting."'
    },
    options: {
      en: ['Neither the principal', 'nor the teachers', 'was present', 'at the meeting'],
      hi: ['Neither the principal', 'nor the teachers', 'was present', 'at the meeting'],
      mr: ['Neither the principal', 'nor the teachers', 'was present', 'at the meeting']
    },
    correctOptionIndex: 2,
    explanation: {
      en: 'When subjects are joined by "neither... nor", the verb agrees with the subject closest to it. "teachers" is plural, so it should be "were present".',
      hi: 'जब विषय "neither... nor" से जुड़ते हैं, तो क्रिया निकटतम विषय के अनुसार होती है। "teachers" बहुवचन है, इसलिए "were present" होना चाहिए।',
      mr: 'जेव्हा विषय "neither... nor" द्वारे जोडले जातात, तेव्हा क्रियापद जवळच्या विषयानुसार बदलते. "teachers" हे अनेकवचनी असल्याने "were present" असावे.'
    }
  },
  {
    id: 'q-eng-2',
    category: 'SSC Exams',
    section: 'English / Verbal Ability',
    subject: 'English',
    topic: 'Synonyms & Antonyms',
    difficulty: 'Easy',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 30,
    questionText: {
      en: 'Select the most appropriate SYNONYM of the given word: "METICULOUS"',
      hi: 'दिए गए शब्द का सबसे उपयुक्त पर्यायवाची चुनें: "METICULOUS"',
      mr: 'खालील शब्दाचा अचूक समानार्थी शब्द निवडा: "METICULOUS"'
    },
    options: {
      en: ['Careless', 'Painstaking / Careful', 'Hasty', 'Ignorant'],
      hi: ['Careless (लापरवाह)', 'Painstaking / Careful (सावधान)', 'Hasty (जल्दबाज)', 'Ignorant (अज्ञानी)'],
      mr: ['Careless (निष्काळजी)', 'Painstaking / Careful (अत्यंत बारीक लक्ष देणारा)', 'Hasty (घाईगडबडीचा)', 'Ignorant (अज्ञानी)']
    },
    correctOptionIndex: 1,
    explanation: {
      en: 'Meticulous means showing great attention to detail; very careful and precise. Synonym: Painstaking / Careful.',
      hi: 'Meticulous का अर्थ है विवरणों पर बहुत ध्यान देने वाला; अत्यंत सावधान। पर्यायवाची: Painstaking / Careful.',
      mr: 'Meticulous म्हणजे कामात बारीक लक्ष देणारा व अचूकता ठेवणारा. समानार्थी शब्द: Painstaking / Careful.'
    }
  },

  // SECTION 4: GENERAL KNOWLEDGE & CURRENT AFFAIRS (2020-2026)
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
  },
  {
    id: 'q-gk-2',
    category: 'SSC Exams',
    section: 'General Knowledge / Current Affairs',
    subject: 'General Awareness',
    topic: 'Indian Constitution & Polity',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 30,
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
      en: 'Article 352 deals with National Emergency due to war, external aggression, or armed rebellion. Article 356 relates to President\'s Rule and Article 360 relates to Financial Emergency.',
      hi: 'अनुच्छेद 352 युद्ध, बाह्य आक्रमण या सशस्त्र विद्रोह के आधार पर राष्ट्रीय आपातकाल से संबंधित है।',
      mr: 'कलम ३५२ हे युद्ध, परकीय आक्रमण किंवा सशस्त्र बंडखोरीच्या आधारे राष्ट्रीय आणीबाणी लागू करण्याचा अधिकार देते.'
    }
  },
  {
    id: 'q-gk-3',
    category: 'State Exams',
    section: 'General Knowledge / Current Affairs',
    subject: 'Maharashtra General Knowledge',
    topic: 'Maharashtra Geography',
    difficulty: 'Medium',
    marks: 2.5,
    negativeMarks: 0.5,
    timeLimitSec: 30,
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
      en: 'Godavari is the longest river in Maharashtra originating at Trimbakeshwar (Nashik) and is called Dakshin Ganga.',
      hi: 'गोदावरी महाराष्ट्र की सबसे लंबी नदी है जो नासिक से निकलती है।',
      mr: 'गोदावरी ही महाराष्ट्रातील सर्वात मोठी नदी असून तिचा उगम त्र्यंबकेश्वर (नाशिक) येथे होतो.'
    }
  }
];

export const SAMPLE_MOCK_TESTS: MockTest[] = [
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
      { id: 'sec-quant', name: 'Quantitative Aptitude', questionCount: 3, marks: 50 },
      { id: 'sec-reasoning', name: 'Reasoning', questionCount: 3, marks: 50 },
      { id: 'sec-english', name: 'English / Verbal Ability', questionCount: 2, marks: 50 },
      { id: 'sec-gk', name: 'General Knowledge / Current Affairs', questionCount: 3, marks: 50 }
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
