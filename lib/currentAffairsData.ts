import { CurrentAffairsItem } from './types';

export const CURRENT_AFFAIRS_2020_2026: CurrentAffairsItem[] = [
  {
    id: 'ca-isro-01',
    category: 'ISRO & Space',
    date: '2023-08-23',
    title: {
      en: 'Chandrayaan-3 Soft Lands on Moon\'s South Pole',
      hi: 'चंद्रयान-3 चंद्रमा के दक्षिणी ध्रुव पर सफलतापूर्वक उतरा',
      mr: 'चंद्रयान-३ चे चंद्राच्या दक्षिण धु्रवावर यशस्वी सॉफ्ट लँडिंग'
    },
    summary: {
      en: 'India became the 1st country to land near the lunar South Pole and 4th country to achieve a lunar soft landing after the Vikram lander deployed the Pragyan rover.',
      hi: 'विक्रम लैंडर द्वारा प्रज्ञान रोवर तैनात करने के बाद भारत चंद्रमा के दक्षिणी ध्रुव के पास उतरने वाला पहला और चंद्रमा पर सॉफ्ट लैंडिंग करने वाला चौथा देश बना।',
      mr: 'विक्रम लँडरने प्रज्ञान रोव्हर तैनात केल्यानंतर भारत चंद्राच्या दक्षिण धु्रवावर उतरणारा जगातील पहिला तर चंद्रावर लँडिंग करणारा चौथा देश ठरला.'
    },
    relatedQuestion: {
      id: 'q-ca-1',
      category: 'General Knowledge',
      section: 'General Knowledge / Current Affairs',
      subject: 'Current Affairs',
      topic: 'ISRO Missions',
      difficulty: 'Medium',
      marks: 2.5,
      negativeMarks: 0.5,
      timeLimitSec: 30,
      questionText: {
        en: 'What is the name of the rover deployed by Chandrayaan-3 on the lunar surface?',
        hi: 'चंद्रयान-3 द्वारा चंद्रमा की सतह पर तैनात रोवर का नाम क्या है?',
        mr: 'चंद्रयान-३ द्वारे चंद्राच्या पृष्ठभागावर तैनात केलेल्या रोव्हरचे नाव काय आहे?'
      },
      options: {
        en: ['Vikram', 'Pragyan', 'Aditya', 'Vyommitra'],
        hi: ['विक्रम', 'प्रज्ञान', 'आदित्य', 'व्योममित्र'],
        mr: ['विक्रम', 'प्रज्ञान', 'आदित्य', 'व्योममित्र']
      },
      correctOptionIndex: 1,
      explanation: {
        en: 'The lander module was named Vikram and the rover was named Pragyan (meaning wisdom).',
        hi: 'लैंडर मॉड्यूल का नाम विक्रम और रोवर का नाम प्रज्ञान (अर्थ: ज्ञान) था।',
        mr: 'लँडरचे नाव विक्रम आणि रोव्हरचे नाव प्रज्ञान (म्हणजे ज्ञान) असे होते.'
      }
    }
  },
  {
    id: 'ca-isro-02',
    category: 'ISRO & Space',
    date: '2023-09-02',
    title: {
      en: 'ISRO Launches Aditya-L1 Solar Mission',
      hi: 'इसरो ने आदित्य-L1 सौर मिशन लॉन्च किया',
      mr: 'इस्रोचे सूर्य अभ्यासासाठी आदित्य-L1 प्रक्षेपत'
    },
    summary: {
      en: 'India\'s first solar observatory mission Aditya-L1 was inserted into a halo orbit around the Sun-Earth Lagrange point L1 to study solar coronas and space weather.',
      hi: 'भारत का पहला सौर पर्यवेक्षण मिशन आदित्य-L1 सूर्य-पृथ्वी लैग्रेंज बिंदु L1 के चारों ओर एक प्रभामंडल कक्षा में स्थापित किया गया।',
      mr: 'भारताचे पहिले सूर्य अभ्यास मिशन आदित्य-L1 सूर्य-पृथ्वी लॅग्रेंज पॉईंट L1 भोवती यशस्वीपणे स्थापित केले गेले.'
    },
    relatedQuestion: {
      id: 'q-ca-2',
      category: 'General Knowledge',
      section: 'General Knowledge / Current Affairs',
      subject: 'Current Affairs',
      topic: 'ISRO Missions',
      difficulty: 'Medium',
      marks: 2.5,
      negativeMarks: 0.5,
      timeLimitSec: 30,
      questionText: {
        en: 'Around which Lagrange Point was India\'s Aditya-L1 spacecraft placed?',
        hi: 'भारत का आदित्य-L1 अंतरिक्ष यान किस लैग्रेंज बिंदु के चारों ओर स्थापित किया गया था?',
        mr: 'भारताचे आदित्य-L1 अंतराळयान कोणत्या लॅग्रेंज पॉईंटभोवती प्रस्थापित करण्यात आले?'
      },
      options: {
        en: ['Lagrange Point 1 (L1)', 'Lagrange Point 2 (L2)', 'Lagrange Point 3 (L3)', 'Lagrange Point 5 (L5)'],
        hi: ['लैग्रेंज बिंदु 1 (L1)', 'लैग्रेंज बिंदु 2 (L2)', 'लैग्रेंज बिंदु 3 (L3)', 'लैग्रेंज बिंदु 5 (L5)'],
        mr: ['लॅग्रेंज पॉईंट १ (L1)', 'लॅग्रेंज पॉईंट २ (L2)', 'लॅग्रेंज पॉईंट ३ (L3)', 'लॅग्रेंज पॉईंट ५ (L5)']
      },
      correctOptionIndex: 0,
      explanation: {
        en: 'Aditya-L1 was placed at L1 (Lagrange Point 1), approximately 1.5 million km from Earth, offering an unobstructed view of the Sun.',
        hi: 'आदित्य-L1 को पृथ्वी से लगभग 1.5 मिलियन किमी दूर L1 पर स्थापित किया गया था।',
        mr: 'आदित्य-L1 पृथ्वीपासून १५ लाख किमी अंतरावर L1 पॉईंटवर स्थापित करण्यात आले.'
      }
    }
  },
  {
    id: 'ca-econ-01',
    category: 'Economy & Budget',
    date: '2024-02-01',
    title: {
      en: 'Viksit Bharat Vision in Union Budget',
      hi: 'केंद्रीय बजट में विकसित भारत दृष्टिकोण',
      mr: 'केंद्रीय अर्थसंकल्पात विकसित भारत संकल्पना'
    },
    summary: {
      en: 'The Union Budget outlined the vision of Viksit Bharat by 2047, focusing on capital expenditure, infrastructure boost, and green energy investments.',
      hi: 'केंद्रीय बजट में 2047 तक विकसित भारत के दृष्टिकोण को रेखांकित किया गया, जिसमें बुनियादी ढांचे पर ध्यान केंद्रित किया गया।',
      mr: '२०४७ पर्यंत विकसित भारताचे ध्येय ठेवून अर्थसंकल्पात पायाभूत सुविधा व ग्रीन एनर्जीवर भर देण्यात आला.'
    },
    relatedQuestion: {
      id: 'q-ca-3',
      category: 'Economy',
      section: 'General Knowledge / Current Affairs',
      subject: 'Economy & Budget',
      topic: 'Union Budget',
      difficulty: 'Easy',
      marks: 2.5,
      negativeMarks: 0.5,
      timeLimitSec: 30,
      questionText: {
        en: 'What is the target year set for achieving "Viksit Bharat" (Developed India)?',
        hi: '"विकसित भारत" प्राप्त करने के लिए निर्धारित लक्ष्य वर्ष क्या है?',
        mr: '"विकसित भारत" ध्येय साध्य करण्यासाठी कोणते लक्ष्य वर्ष निश्चित करण्यात आले आहे?'
      },
      options: {
        en: ['2030', '2040', '2047', '2050'],
        hi: ['2030', '2040', '2047', '2050'],
        mr: ['२०३०', '२०४०', '२०४७', '२०५०']
      },
      correctOptionIndex: 2,
      explanation: {
        en: 'Viksit Bharat @2047 represents the vision to make India a fully developed nation by the centenary year of independence in 2047.',
        hi: 'विकसित भारत @2047 का लक्ष्य 2047 में स्वतंत्रता के शताब्दी वर्ष तक भारत को एक विकसित राष्ट्र बनाना है।',
        mr: 'स्वातंत्र्याच्या शताब्दी वर्षात म्हणजेच २०४७ पर्यंत भारताला विकसित राष्ट्र बनवण्याचे ध्येय आहे.'
      }
    }
  }
];
