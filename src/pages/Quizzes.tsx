import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import QuizCard from '@/components/quiz/QuizCard';

// Sample quiz questions
const aptitudeQuizzes = [
  {
    id: 'numerical',
    titleKey: 'NumericalAptitude',
    descriptionKey: 'numericalAptitudeDesc',
    questions: [
      {
        question: 'What is 15% of 120?',
        options: ['15', '18', '24', '30'],
        correctAnswer: 1
      },
      {
        question: 'If 8 workers can complete a job in 6 days, how many days will it take 12 workers?',
        options: ['4 days', '9 days', '3 days', '12 days'],
        correctAnswer: 0
      },
      {
        question: 'A train traveling at 60 km/h takes 15 minutes to pass through a tunnel. How long is the tunnel?',
        options: ['10 km', '15 km', '20 km', '25 km'],
        correctAnswer: 1
      },
      {
        question: 'If a piece of cloth costs ₹150 for 3 meters, how much would 5 meters cost?',
        options: ['₹200', '₹225', '₹250', '₹275'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'logical',
    titleKey: 'LogicalReasoning',
    descriptionKey: 'logicalReasoningDesc',
    questions: [
      {
        question: 'Which number comes next in the series: 2, 5, 10, 17, 26, ?',
        options: ['35', '37', '39', '42'],
        correctAnswer: 1
      },
      {
        question: 'If WATCH is coded as 12345 and WATER as 12367, then how would you code TOWER?',
        options: ['68127', '68129', '67891', '67129'],
        correctAnswer: 0
      },
      {
        question: 'Complete the analogy: Bird is to Sky as Fish is to ?',
        options: ['Aquarium', 'Water', 'Scales', 'Swim'],
        correctAnswer: 1
      },
      {
        question: 'If all roses are flowers and some flowers fade quickly, then:',
        options: [
          'All roses fade quickly', 
          'Some roses fade quickly', 
          'No roses fade quickly', 
          'Cannot be determined'
        ],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 'verbal',
    titleKey: 'VerbalAbility',
    descriptionKey: 'verbalAbilityDesc',
    questions: [
      {
        question: 'Choose the word that is most nearly opposite in meaning to FRUGAL:',
        options: ['Economical', 'Extravagant', 'Prudent', 'Thrifty'],
        correctAnswer: 1
      },
      {
        question: 'Complete the sentence: Despite his _____ nature, he was able to make friends quickly.',
        options: ['Gregarious', 'Reticent', 'Loquacious', 'Extrovert'],
        correctAnswer: 1
      },
      {
        question: 'Choose the word that best completes the analogy: Ocean : Water :: Desert : ?',
        options: ['Hot', 'Mirage', 'Sand', 'Cactus'],
        correctAnswer: 2
      },
      {
        question: 'Identify the correctly spelled word:',
        options: ['Acommodation', 'Accomodation', 'Accommodation', 'Accomadation'],
        correctAnswer: 2
      }
    ]
  }
];

const topicQuizzes = [
  {
    id: 'science',
    titleKey: 'ScienceQuiz',
    descriptionKey: 'scienceQuizDesc',
    questions: [
      {
        question: 'Which gas makes up the majority of Earth\'s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 2
      },
      {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
        correctAnswer: 0
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1
      },
      {
        question: 'What is the smallest unit of matter?',
        options: ['Atom', 'Molecule', 'Cell', 'Electron'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'history',
    titleKey: 'HistoryQuiz',
    descriptionKey: 'historyQuizDesc',
    questions: [
      {
        question: 'In which year did India gain independence?',
        options: ['1945', '1947', '1950', '1952'],
        correctAnswer: 1
      },
      {
        question: 'Who was the first Prime Minister of India?',
        options: ['Mahatma Gandhi', 'Sardar Patel', 'Jawaharlal Nehru', 'B.R. Ambedkar'],
        correctAnswer: 2
      },
      {
        question: 'The Battle of Plassey was fought in which year?',
        options: ['1757', '1764', '1772', '1784'],
        correctAnswer: 0
      },
      {
        question: 'Which Mughal Emperor built the Taj Mahal?',
        options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'geography',
    titleKey: 'GeographyQuiz',
    descriptionKey: 'geographyQuizDesc',
    questions: [
      {
        question: 'Which is the longest river in India?',
        options: ['Brahmaputra', 'Ganga', 'Godavari', 'Yamuna'],
        correctAnswer: 1
      },
      {
        question: 'Which Indian state has the largest area?',
        options: ['Maharashtra', 'Madhya Pradesh', 'Uttar Pradesh', 'Rajasthan'],
        correctAnswer: 3
      },
      {
        question: 'The Himalayas are examples of what type of mountains?',
        options: ['Fold mountains', 'Block mountains', 'Volcanic mountains', 'Residual mountains'],
        correctAnswer: 0
      },
      {
        question: 'Which state in India has the highest literacy rate?',
        options: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Goa'],
        correctAnswer: 2
      }
    ]
  }
];

const Quizzes = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('aptitude');
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className={`text-3xl font-bold mb-6 text-center ${getLanguageClass()}`}>
            {t('quizzes')}
          </h1>
          
          <div className="flex justify-center mb-6 gap-2 flex-wrap">
            <Button
              variant={activeTab === 'aptitude' ? 'default' : 'outline'}
              onClick={() => setActiveTab('aptitude')}
              className={getLanguageClass()}
            >
              {t('aptitudeQuizzes')}
            </Button>
            <Button
              variant={activeTab === 'topic' ? 'default' : 'outline'}
              onClick={() => setActiveTab('topic')}
              className={getLanguageClass()}
            >
              {t('topicQuizzes')}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTab === 'aptitude'
              ? aptitudeQuizzes.map(quiz => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))
              : topicQuizzes.map(quiz => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quizzes;
