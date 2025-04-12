import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup } from '@/components/ui/radio-group';
import { useLanguage } from '@/context/LanguageContext';
import QuizOption from './QuizOption';
import QuizFeedback from './QuizFeedback';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  quiz: {
    id: string;
    titleKey: string;
    descriptionKey: string;
    questions: Question[];
  };
}

const QuizCard: React.FC<QuizProps> = ({ quiz }) => {
  const { language, t } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  const handleStartQuiz = () => {
    setIsActive(true);
    setCurrentQuestion(0);
    setShowResult(false);
    setScore(0);
    setShowFeedback(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setIsCorrect(optionIndex === quiz.questions[currentQuestion].correctAnswer);
    setShowFeedback(true);
    
    if (optionIndex === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setSelectedAnswer(null);
      setShowFeedback(false);
      
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleRestart = () => {
    setIsActive(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setShowFeedback(false);
  };

  const renderQuizContent = () => {
    if (!isActive) {
      return (
        <>
          <p className={`mb-4 text-muted-foreground ${getLanguageClass()}`}>
            {t(quiz.descriptionKey)}
          </p>
          <Button onClick={handleStartQuiz} className={getLanguageClass()}>
            {t('startQuiz')}
          </Button>
        </>
      );
    }

    if (showResult) {
      return (
        <div className="space-y-4">
          <p className={`text-lg font-medium ${getLanguageClass()}`}>
            {t('quizComplete')}
          </p>
          <p className={`text-xl font-bold ${getLanguageClass()}`}>
            {t('yourScore')}: {score}/{quiz.questions.length}
          </p>
          <Button onClick={handleRestart} className={getLanguageClass()}>
            {t('tryAgain')}
          </Button>
        </div>
      );
    }

    const currentQ = quiz.questions[currentQuestion];
    return (
      <div className="space-y-4">
        <p className={`font-medium ${getLanguageClass()}`}>
          {t('question')} {currentQuestion + 1}/{quiz.questions.length}
        </p>
        <p className={`text-lg ${getLanguageClass()}`}>
          {currentQ.question}
        </p>
        
        <RadioGroup 
          value={selectedAnswer !== null ? selectedAnswer.toString() : undefined} 
          onValueChange={(value) => handleOptionSelect(parseInt(value))}
          className="space-y-2"
          disabled={showFeedback}
        >
          {currentQ.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              index={index}
              selectedAnswer={selectedAnswer}
              correctAnswer={currentQ.correctAnswer}
              showFeedback={showFeedback}
              isDisabled={showFeedback}
            />
          ))}
        </RadioGroup>
        
        <QuizFeedback
          isCorrect={isCorrect}
          correctAnswer={currentQ.options[currentQ.correctAnswer]}
          showFeedback={showFeedback}
        />
        
        <Button 
          onClick={handleNext} 
          disabled={selectedAnswer === null}
          className={getLanguageClass()}
        >
          {currentQuestion < quiz.questions.length - 1 ? t('nextQuestion') : t('finishQuiz')}
        </Button>
      </div>
    );
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className={getLanguageClass()}>
          {t(quiz.titleKey)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {renderQuizContent()}
      </CardContent>
    </Card>
  );
};

export default QuizCard;
