
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

interface QuizProps {
  questions: QuizQuestion[];
  sectionName: string;
}

const Quiz = ({ questions, sectionName }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  
  const handleAnswer = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const nextQuestion = () => {
    console.log('Next question clicked, current index:', currentQuestionIndex, 'total questions:', questions.length);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Finishing quiz, showing results');
      // Ensure we show results when finishing the quiz
      setShowResults(true);
    }
  };
  
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(-1));
    setShowResults(false);
  };
  
  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };
  
  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-6">Quiz Results</h3>
        
        <div className="mb-8 text-center">
          <div className="text-6xl font-bold mb-2 gradient-text">
            {score}/{questions.length}
          </div>
          <div className="text-xl">
            {score === questions.length ? (
              <p>Congratulations, full pot! 🎉</p>
            ) : score >= questions.length * 0.7 ? (
              <p>Great job! 👍</p>
            ) : score >= questions.length * 0.5 ? (
              <p>Good effort! 👌</p>
            ) : (
              <p>Keep learning! 📚</p>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div 
              className="bg-gradient-to-r from-pink to-orange h-2.5 rounded-full" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold mb-4">Review Your Answers:</h4>
        <div className="space-y-4 mb-6">
          {questions.map((question, index) => (
            <div key={index} className="border-b pb-3">
              <p className="font-medium">{index + 1}. {question.question}</p>
              <div className="ml-4 mt-2">
                <p className="flex items-center">
                  {selectedAnswers[index] === question.correctAnswer ? (
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                  ) : (
                    <XCircle className="text-red-500 mr-2" size={18} />
                  )}
                  <span className="font-medium">Your answer:</span> {question.options[selectedAnswers[index]]}
                </p>
                {selectedAnswers[index] !== question.correctAnswer && (
                  <p className="flex items-center text-green-600 mt-1">
                    <CheckCircle className="mr-2" size={18} />
                    <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <Button onClick={resetQuiz} className="w-full">Try Again</Button>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">{sectionName} Pop Quiz</h3>
        <div className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">{currentQuestion.question}</h4>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full px-4 py-3 text-left rounded-md transition ${
                selectedAnswers[currentQuestionIndex] === index
                  ? 'bg-pink text-white'
                  : 'bg-gray-50 hover:bg-pink/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        <Button 
          onClick={nextQuestion}
          disabled={selectedAnswers[currentQuestionIndex] === -1}
          className="min-w-[100px]"
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
        </Button>
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-pink to-orange h-2 rounded-full transition-all" 
            style={{ 
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
