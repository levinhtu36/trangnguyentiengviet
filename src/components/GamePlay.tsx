'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Question } from '@/data/questions';

interface GamePlayProps {
  stageId: number;
  stageName: string;
  questions: Question[];
  playerMode: 1 | 2;
  onComplete: () => void;
  onBack: () => void;
}

type GamePhase = 'ready' | 'bell' | 'answering' | 'result' | 'complete';
type Player = 'A' | 'B' | null;

export default function GamePlay({
  stageId,
  stageName,
  questions,
  playerMode,
  onComplete,
  onBack
}: GamePlayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<GamePhase>('ready');
  const [activePlayer, setActivePlayer] = useState<Player>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const [scores, setScores] = useState({ A: 0, B: 0 });
  const [bellLocked, setBellLocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [secondChancePlayer, setSecondChancePlayer] = useState<Player>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Timer for answering phase
  useEffect(() => {
    if (phase === 'answering' && playerMode === 2) {
      setTimeLeft(5);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Time's up - treat as wrong answer
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [phase, activePlayer]);

  const handleTimeUp = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // If there's a second chance player, give them the turn
    if (secondChancePlayer) {
      setActivePlayer(secondChancePlayer);
      setSecondChancePlayer(null);
      setPhase('answering');
      setTimeLeft(5);
    } else {
      // No one answered correctly, move to next question
      setIsCorrect(false);
      setPhase('result');
      setTimeout(() => moveToNextQuestion(), 2000);
    }
  }, [secondChancePlayer]);

  const handleBellPress = useCallback((player: Player) => {
    if (bellLocked || phase !== 'bell') return;

    // Lock bells immediately (< 0.2s)
    setBellLocked(true);
    setActivePlayer(player);
    setSecondChancePlayer(player === 'A' ? 'B' : 'A');
    setPhase('answering');

    // Play bell sound effect (visual feedback for now)
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 500);
  }, [bellLocked, phase]);

  const handleAnswerSelect = useCallback((answer: string) => {
    if (phase !== 'answering' || (playerMode === 2 && !activePlayer)) return;
    if (selectedAnswer !== null) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correct;
    setIsCorrect(correct);

    if (playerMode === 2) {
      if (correct) {
        // Correct answer - add score and move on
        setScores(prev => ({
          ...prev,
          [activePlayer!]: prev[activePlayer as 'A' | 'B'] + 1
        }));
        setPhase('result');
        setTimeout(() => moveToNextQuestion(), 2000);
      } else {
        // Wrong answer - give second chance to other player
        if (secondChancePlayer) {
          setTimeout(() => {
            setActivePlayer(secondChancePlayer);
            setSecondChancePlayer(null);
            setSelectedAnswer(null);
            setIsCorrect(null);
            setPhase('answering');
            setTimeLeft(5);
          }, 1500);
        } else {
          // No second chance available
          setPhase('result');
          setTimeout(() => moveToNextQuestion(), 2000);
        }
      }
    } else {
      // Single player mode
      setPhase('result');
      setTimeout(() => moveToNextQuestion(), 2000);
    }
  }, [phase, playerMode, activePlayer, selectedAnswer, currentQuestion, secondChancePlayer]);

  const moveToNextQuestion = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setPhase(playerMode === 2 ? 'bell' : 'answering');
      setActivePlayer(null);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setBellLocked(false);
      setSecondChancePlayer(null);
    } else {
      // Game complete
      setPhase('complete');
    }
  }, [currentIndex, totalQuestions, playerMode]);

  const startGame = () => {
    setPhase(playerMode === 2 ? 'bell' : 'answering');
  };

  // Keyboard controls for 2-player mode
  useEffect(() => {
    if (playerMode !== 2) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase === 'bell') {
        if (e.key === 'a' || e.key === 'A') {
          handleBellPress('A');
        } else if (e.key === 'l' || e.key === 'L') {
          handleBellPress('B');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, playerMode, handleBellPress]);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          <span className="text-xl">←</span>
          <span className="font-bold">Thoát</span>
        </button>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-red-600">
            Màn {stageId}: {stageName}
          </h1>
        </div>
        <div className="text-right">
          <span className="bg-yellow-400 px-4 py-2 rounded-full font-bold text-yellow-900">
            Câu {currentIndex + 1}/{totalQuestions}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-2xl mx-auto mb-6">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Score board for 2 players */}
      {playerMode === 2 && (
        <div className="flex justify-center gap-8 mb-6">
          <div className={`text-center px-6 py-3 rounded-xl ${activePlayer === 'A' ? 'bg-red-500 text-white scale-110' : 'bg-red-100 text-red-700'} transition-all`}>
            <div className="text-sm font-bold">Người chơi A</div>
            <div className="text-3xl font-bold">{scores.A}</div>
          </div>
          <div className={`text-center px-6 py-3 rounded-xl ${activePlayer === 'B' ? 'bg-blue-500 text-white scale-110' : 'bg-blue-100 text-blue-700'} transition-all`}>
            <div className="text-sm font-bold">Người chơi B</div>
            <div className="text-3xl font-bold">{scores.B}</div>
          </div>
        </div>
      )}

      {/* Main game area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Ready phase */}
        {phase === 'ready' && (
          <div className="text-center animate-slide-up">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
              <span className="text-6xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Sẵn sàng chưa?</h2>
            <p className="text-gray-600 mb-2">
              {playerMode === 1
                ? 'Trả lời đúng để hoàn thành màn chơi!'
                : 'Bấm chuông nhanh để giành quyền trả lời!'}
            </p>
            {playerMode === 2 && (
              <p className="text-sm text-gray-500 mb-6">
                Phím A = Người chơi A | Phím L = Người chơi B
              </p>
            )}
            <button
              onClick={startGame}
              className="btn-game btn-primary"
            >
              Bắt đầu! 🚀
            </button>
          </div>
        )}

        {/* Bell phase (2 players only) */}
        {phase === 'bell' && playerMode === 2 && (
          <div className="text-center">
            {/* Question display */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 max-w-2xl mx-auto animate-slide-up">
              <div className="text-sm text-gray-500 mb-2">Câu {currentIndex + 1}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                {currentQuestion.question}
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8 text-yellow-600 animate-pulse">
              🔔 BẤM CHUÔNG! 🔔
            </h2>

            <div className="flex justify-center gap-8 md:gap-16">
              {/* Player A Bell */}
              <button
                onClick={() => handleBellPress('A')}
                disabled={bellLocked}
                className={`bell-button bg-gradient-to-b from-red-400 to-red-600 ${bellLocked ? 'disabled' : 'hover:from-red-300 hover:to-red-500'}`}
              >
                🔔
              </button>

              {/* Player B Bell */}
              <button
                onClick={() => handleBellPress('B')}
                disabled={bellLocked}
                className={`bell-button bg-gradient-to-b from-blue-400 to-blue-600 ${bellLocked ? 'disabled' : 'hover:from-blue-300 hover:to-blue-500'}`}
              >
                🔔
              </button>
            </div>

            <div className="flex justify-center gap-16 mt-4">
              <span className="font-bold text-red-600">A (phím A)</span>
              <span className="font-bold text-blue-600">B (phím L)</span>
            </div>
          </div>
        )}

        {/* Answering phase */}
        {(phase === 'answering' || phase === 'result') && (
          <div className="w-full max-w-2xl mx-auto">
            {/* Timer for 2-player mode */}
            {playerMode === 2 && phase === 'answering' && (
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                    timeLeft <= 2 ? 'bg-red-500 text-white animate-pulse' : 'bg-yellow-400 text-yellow-900'
                  }`}
                >
                  {timeLeft}
                </div>
              </div>
            )}

            {/* Active player indicator */}
            {playerMode === 2 && activePlayer && (
              <div className={`text-center mb-4 py-2 rounded-xl ${
                activePlayer === 'A' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
              }`}>
                <span className="font-bold">Người chơi {activePlayer} trả lời!</span>
              </div>
            )}

            {/* Question */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 animate-slide-up">
              <div className="text-sm text-gray-500 mb-2">
                {currentQuestion.source}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
                {currentQuestion.question}
              </div>
            </div>

            {/* Answer options */}
            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => {
                let optionClass = 'answer-option';
                if (selectedAnswer !== null) {
                  if (option === currentQuestion.correct) {
                    optionClass += ' correct';
                  } else if (option === selectedAnswer) {
                    optionClass += ' incorrect';
                  }
                  optionClass += ' disabled';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={selectedAnswer !== null}
                    className={optionClass}
                  >
                    <span className="inline-block w-8 h-8 rounded-full bg-gray-200 text-center leading-8 mr-3 font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Result feedback */}
            {phase === 'result' && (
              <div className={`mt-6 p-4 rounded-xl text-center text-xl font-bold animate-slide-up ${
                isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {isCorrect ? (
                  <span>🎉 Đúng rồi! Giỏi lắm! 🎉</span>
                ) : (
                  <span>😅 Chưa đúng! Đáp án đúng là: {currentQuestion.correct}</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Complete phase */}
        {phase === 'complete' && (
          <div className="text-center animate-slide-up">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
                <span className="text-7xl">🏆</span>
              </div>
              {/* Confetti effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <span className="inline-block animate-confetti text-2xl" style={{ animationDelay: '0s' }}>🎊</span>
                <span className="inline-block animate-confetti text-2xl" style={{ animationDelay: '0.1s' }}>⭐</span>
                <span className="inline-block animate-confetti text-2xl" style={{ animationDelay: '0.2s' }}>🎉</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-yellow-600">
              🎉 HOÀN THÀNH! 🎉
            </h2>

            {playerMode === 2 && (
              <div className="mb-6">
                <div className="text-xl mb-4">Kết quả:</div>
                <div className="flex justify-center gap-8">
                  <div className={`px-8 py-4 rounded-xl ${scores.A > scores.B ? 'bg-yellow-400 scale-110' : 'bg-red-100'}`}>
                    <div className="font-bold">Người chơi A</div>
                    <div className="text-3xl font-bold">{scores.A} điểm</div>
                    {scores.A > scores.B && <div className="text-yellow-800">🏆 Chiến thắng!</div>}
                  </div>
                  <div className={`px-8 py-4 rounded-xl ${scores.B > scores.A ? 'bg-yellow-400 scale-110' : 'bg-blue-100'}`}>
                    <div className="font-bold">Người chơi B</div>
                    <div className="text-3xl font-bold">{scores.B} điểm</div>
                    {scores.B > scores.A && <div className="text-yellow-800">🏆 Chiến thắng!</div>}
                  </div>
                </div>
                {scores.A === scores.B && (
                  <div className="mt-4 text-xl text-purple-600 font-bold">🤝 Hòa nhau!</div>
                )}
              </div>
            )}

            <p className="text-gray-600 mb-6">
              Bạn đã hoàn thành màn {stageId}: {stageName}!
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={onBack}
                className="btn-game bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Quay lại
              </button>
              <button
                onClick={onComplete}
                className="btn-game btn-primary"
              >
                Tiếp tục 🗺️
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bell press effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
          <div className="text-8xl animate-ping">🔔</div>
        </div>
      )}
    </div>
  );
}
