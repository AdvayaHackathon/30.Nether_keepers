import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  option: string;
  index: number;
  selectedAnswer: number | null;
  correctAnswer: number;
  showFeedback: boolean;
  isDisabled: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  selectedAnswer,
  correctAnswer,
  showFeedback,
  isDisabled
}) => {
  const isSelected = selectedAnswer === index;
  const isCorrect = index === correctAnswer;
  const showIncorrectIcon = showFeedback && isSelected && !isCorrect;
  const showCorrectIcon = showFeedback && isCorrect;
  
  return (
    <div 
      className={`flex items-center space-x-2 p-2 rounded-md border ${
        showFeedback && isCorrect 
          ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' 
          : showFeedback && isSelected && !isCorrect
            ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' 
            : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={isDisabled} />
      <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
        {option}
      </Label>
      {showIncorrectIcon && <X className="h-5 w-5 text-red-500" />}
      {showCorrectIcon && <Check className="h-5 w-5 text-green-500" />}
    </div>
  );
};

export default QuizOption;
