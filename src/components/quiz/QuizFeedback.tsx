import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface QuizFeedbackProps {
  isCorrect: boolean;
  correctAnswer: string;
  showFeedback: boolean;
}

const QuizFeedback: React.FC<QuizFeedbackProps> = ({
  isCorrect,
  correctAnswer,
  showFeedback
}) => {
  const { t } = useLanguage();
  
  if (!showFeedback || isCorrect) return null;
  
  return (
    <div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-md flex items-start gap-2">
      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
      <p className="text-sm text-red-800 dark:text-red-300">
        {t('incorrectAnswer')}: {correctAnswer}
      </p>
    </div>
  );
};

export default QuizFeedback;
