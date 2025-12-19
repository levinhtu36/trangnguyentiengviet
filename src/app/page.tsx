'use client';

import { useState, useEffect } from 'react';
import VietnamMap from '@/components/VietnamMap';
import GamePlay from '@/components/GamePlay';
import { stagesInfo, getStageQuestions, Question } from '@/data/questions';

type GameMode = 'home' | 'map' | 'play';
type PlayerMode = 1 | 2;

interface StageProgress {
  [key: number]: boolean;
}

export default function Home() {
  const [gameMode, setGameMode] = useState<GameMode>('home');
  const [playerMode, setPlayerMode] = useState<PlayerMode>(1);
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [stageProgress, setStageProgress] = useState<StageProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('trangNguyenProgress');
    if (saved) {
      setStageProgress(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('trangNguyenProgress', JSON.stringify(stageProgress));
    }
  }, [stageProgress, isLoaded]);

  const handleSelectMode = (mode: PlayerMode) => {
    setPlayerMode(mode);
    setGameMode('map');
  };

  const handleSelectStage = (stageId: number) => {
    const questions = getStageQuestions(stageId);
    setCurrentQuestions(questions);
    setCurrentStage(stageId);
    setGameMode('play');
  };

  const handleCompleteStage = () => {
    setStageProgress(prev => ({
      ...prev,
      [currentStage]: true
    }));
    setGameMode('map');
  };

  const handleBackToMap = () => {
    setGameMode('map');
  };

  const handleBackToHome = () => {
    setGameMode('home');
  };

  const handleResetProgress = () => {
    setStageProgress({});
    localStorage.removeItem('trangNguyenProgress');
  };

  // Check if stage is unlocked
  const isStageUnlocked = (stageId: number): boolean => {
    if (stageId === 1) return true;
    return stageProgress[stageId - 1] === true;
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-yellow-600 animate-pulse">
          Đang tải...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-24 h-12 bg-white rounded-full opacity-60 animate-bounce-gentle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-20 right-20 w-32 h-16 bg-white rounded-full opacity-50 animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-40 left-1/4 w-20 h-10 bg-white rounded-full opacity-40 animate-bounce-gentle" style={{ animationDelay: '1s' }} />

      {gameMode === 'home' && (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 animate-slide-up">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 drop-shadow-lg mb-4">
              TRẠNG NGUYÊN
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-600 drop-shadow-md">
              TIẾNG VIỆT
            </h2>
            <p className="text-xl text-gray-700 mt-4 font-semibold">
              Phiêu lưu Thành Ngữ - Tục Ngữ
            </p>
          </div>

          {/* Game mascot/decoration */}
          <div className="mb-12 relative">
            <div className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce-gentle">
              <span className="text-7xl">📚</span>
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-star-twinkle">
              <span className="text-2xl">⭐</span>
            </div>
          </div>

          {/* Game mode buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            <button
              onClick={() => handleSelectMode(1)}
              className="btn-game btn-primary min-w-[200px] flex items-center justify-center gap-3"
            >
              <span className="text-3xl">👤</span>
              <span>Chơi 1 người</span>
            </button>
            <button
              onClick={() => handleSelectMode(2)}
              className="btn-game btn-secondary min-w-[200px] flex items-center justify-center gap-3"
            >
              <span className="text-3xl">👥</span>
              <span>Chơi 2 người</span>
            </button>
          </div>

          {/* Reset button */}
          {Object.keys(stageProgress).length > 0 && (
            <button
              onClick={handleResetProgress}
              className="mt-8 text-gray-500 hover:text-red-500 underline transition-colors"
            >
              Chơi lại từ đầu
            </button>
          )}

          {/* Footer */}
          <div className="mt-12 text-center text-gray-600">
            <p>Dành cho trẻ em 9-10 tuổi</p>
            <p className="text-sm mt-2">Học thành ngữ qua bản đồ Việt Nam</p>
          </div>
        </div>
      )}

      {gameMode === 'map' && (
        <VietnamMap
          playerMode={playerMode}
          stageProgress={stageProgress}
          isStageUnlocked={isStageUnlocked}
          onSelectStage={handleSelectStage}
          onBack={handleBackToHome}
        />
      )}

      {gameMode === 'play' && (
        <GamePlay
          stageId={currentStage}
          stageName={stagesInfo.find(s => s.id === currentStage)?.name || ''}
          questions={currentQuestions}
          playerMode={playerMode}
          onComplete={handleCompleteStage}
          onBack={handleBackToMap}
        />
      )}
    </main>
  );
}
