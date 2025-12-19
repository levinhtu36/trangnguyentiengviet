'use client';

import { useState, useEffect } from 'react';
import { stagesInfo } from '@/data/questions';

interface VietnamMapProps {
  playerMode: 1 | 2;
  stageProgress: { [key: number]: boolean };
  isStageUnlocked: (stageId: number) => boolean;
  onSelectStage: (stageId: number) => void;
  onBack: () => void;
}

export default function VietnamMap({
  playerMode,
  stageProgress,
  isStageUnlocked,
  onSelectStage,
  onBack
}: VietnamMapProps) {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animatingPath, setAnimatingPath] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
    // Animate the path
    setTimeout(() => setAnimatingPath(true), 500);
  }, []);

  const handleStageClick = (stageId: number) => {
    if (!isStageUnlocked(stageId)) return;
    setSelectedStage(stageId);
  };

  const handlePlay = () => {
    if (selectedStage) {
      onSelectStage(selectedStage);
    }
  };

  // Stage positions on the map (relative to SVG viewBox)
  const stagePositions = [
    { id: 1, x: 180, y: 100, name: "Hà Nội" },
    { id: 2, x: 200, y: 220, name: "Huế" },
    { id: 3, x: 190, y: 300, name: "Đà Nẵng" },
    { id: 4, x: 220, y: 420, name: "Nha Trang" },
    { id: 5, x: 150, y: 520, name: "Sài Gòn" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          <span className="text-xl">←</span>
          <span className="font-bold">Quay lại</span>
        </button>
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600">
            Bản đồ Việt Nam
          </h1>
          <p className="text-gray-600">
            {playerMode === 1 ? '👤 Chơi 1 người' : '👥 Chơi 2 người - Bấm chuông'}
          </p>
        </div>
        <div className="w-24"></div>
      </div>

      {/* Map Container */}
      <div className={`relative transition-all duration-1000 ${showAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {/* SVG Map */}
        <svg
          viewBox="0 0 350 650"
          className="w-full max-w-md h-auto drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
        >
          {/* Vietnam shape - simplified cute version */}
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="50%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background sea */}
          <rect x="0" y="0" width="350" height="650" fill="#87CEEB" rx="20" />

          {/* Vietnam map shape - cute cartoon style */}
          <path
            d="M 150 50
               C 200 40, 230 60, 240 100
               C 250 130, 230 160, 220 190
               C 210 220, 200 250, 210 280
               C 220 310, 230 340, 220 380
               C 210 420, 230 460, 240 500
               C 250 540, 200 580, 150 590
               C 100 600, 80 560, 90 520
               C 100 480, 120 440, 110 400
               C 100 360, 90 320, 100 280
               C 110 240, 130 200, 140 160
               C 150 120, 130 80, 150 50
               Z"
            fill="url(#mapGradient)"
            stroke="#16a34a"
            strokeWidth="3"
            className={animatingPath ? 'animate-map-path' : ''}
          />

          {/* Decorative elements */}
          {/* Rice fields pattern */}
          <g opacity="0.3">
            <path d="M 120 300 Q 150 290 180 300" stroke="#15803d" strokeWidth="2" fill="none" />
            <path d="M 130 320 Q 160 310 190 320" stroke="#15803d" strokeWidth="2" fill="none" />
            <path d="M 110 450 Q 140 440 170 450" stroke="#15803d" strokeWidth="2" fill="none" />
          </g>

          {/* Mountain decorations in the north */}
          <g>
            <path d="M 130 80 L 145 50 L 160 80 Z" fill="#166534" opacity="0.5" />
            <path d="M 170 90 L 185 60 L 200 90 Z" fill="#166534" opacity="0.4" />
          </g>

          {/* Path connecting stages */}
          <path
            d="M 180 100
               C 190 150, 200 180, 200 220
               C 200 260, 190 280, 190 300
               C 190 350, 210 380, 220 420
               C 200 470, 170 500, 150 520"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="6"
            strokeDasharray="15 10"
            strokeLinecap="round"
            className={animatingPath ? 'animate-map-path' : ''}
            style={{ animationDelay: '0.5s' }}
          />

          {/* Stage locations */}
          {stagePositions.map((stage, index) => {
            const unlocked = isStageUnlocked(stage.id);
            const completed = stageProgress[stage.id];
            const isSelected = selectedStage === stage.id;

            return (
              <g
                key={stage.id}
                onClick={() => handleStageClick(stage.id)}
                className={`cursor-pointer transition-all duration-300 ${unlocked ? 'hover:scale-110' : ''}`}
                style={{
                  transform: `translate(${stage.x}px, ${stage.y}px)`,
                  opacity: showAnimation ? 1 : 0,
                  transition: `all 0.5s ease ${index * 0.2}s`,
                }}
              >
                {/* Glow effect for unlocked stages */}
                {unlocked && !completed && (
                  <circle
                    cx="0"
                    cy="0"
                    r="30"
                    fill="rgba(250, 204, 21, 0.3)"
                    className="animate-pulse"
                  />
                )}

                {/* Stage marker */}
                <circle
                  cx="0"
                  cy="0"
                  r="22"
                  fill={completed ? '#fbbf24' : unlocked ? '#22c55e' : '#9ca3af'}
                  stroke={isSelected ? '#dc2626' : completed ? '#f59e0b' : unlocked ? '#15803d' : '#6b7280'}
                  strokeWidth={isSelected ? 4 : 3}
                  filter={unlocked ? 'url(#glow)' : ''}
                />

                {/* Stage number or icon */}
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="bold"
                  fill="white"
                >
                  {completed ? '✓' : unlocked ? stage.id : '🔒'}
                </text>

                {/* Stage name label */}
                <rect
                  x="-35"
                  y="28"
                  width="70"
                  height="22"
                  rx="11"
                  fill={completed ? '#fbbf24' : unlocked ? '#22c55e' : '#9ca3af'}
                  opacity="0.9"
                />
                <text
                  x="0"
                  y="44"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill="white"
                >
                  {stage.name}
                </text>

                {/* Bouncing animation for unlocked but not completed */}
                {unlocked && !completed && (
                  <circle
                    cx="0"
                    cy="-30"
                    r="8"
                    fill="#ef4444"
                    className="animate-bounce"
                  >
                    <animate
                      attributeName="cy"
                      values="-30;-25;-30"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Decorative boats */}
          <g className="animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
            <ellipse cx="50" cy="400" rx="15" ry="5" fill="#8B4513" />
            <path d="M 50 400 L 50 385 L 60 392 Z" fill="#f5f5dc" />
          </g>
          <g className="animate-bounce-gentle" style={{ animationDelay: '1s' }}>
            <ellipse cx="300" cy="250" rx="12" ry="4" fill="#8B4513" />
            <path d="M 300 250 L 300 238 L 308 244 Z" fill="#f5f5dc" />
          </g>

          {/* Fish in the sea */}
          <g className="animate-bounce-gentle" style={{ animationDelay: '0.3s' }}>
            <ellipse cx="280" cy="150" rx="12" ry="6" fill="#f97316" />
            <path d="M 292 150 L 300 144 L 300 156 Z" fill="#f97316" />
          </g>

          {/* Sun */}
          <circle cx="50" cy="50" r="25" fill="#fbbf24" className="animate-pulse" />
          <g className="animate-star-twinkle">
            <line x1="50" y1="15" x2="50" y2="5" stroke="#fbbf24" strokeWidth="3" />
            <line x1="50" y1="95" x2="50" y2="85" stroke="#fbbf24" strokeWidth="3" />
            <line x1="15" y1="50" x2="5" y2="50" stroke="#fbbf24" strokeWidth="3" />
            <line x1="85" y1="50" x2="95" y2="50" stroke="#fbbf24" strokeWidth="3" />
          </g>
        </svg>

        {/* Flying birds */}
        <div className="absolute top-10 left-10 text-2xl animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>🐦</div>
        <div className="absolute top-20 right-10 text-xl animate-bounce-gentle" style={{ animationDelay: '0.7s' }}>🐦</div>
        <div className="absolute top-5 right-1/3 text-lg animate-bounce-gentle" style={{ animationDelay: '1.2s' }}>🐦</div>
      </div>

      {/* Stage Info Panel */}
      {selectedStage && (
        <div className="mt-8 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 animate-slide-up">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white ${
              stageProgress[selectedStage] ? 'bg-yellow-500' : 'bg-green-500'
            }`}>
              {stageProgress[selectedStage] ? '✓' : selectedStage}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Màn {selectedStage}: {stagesInfo.find(s => s.id === selectedStage)?.name}
              </h2>
              <p className="text-gray-600">
                {stagesInfo.find(s => s.id === selectedStage)?.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-xl">📝</span>
            <span>
              {selectedStage === 1 ? '10' :
               selectedStage === 2 ? '12' :
               selectedStage === 3 ? '13' :
               selectedStage === 4 ? '11' : '15'} câu hỏi
            </span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setSelectedStage(null)}
              className="flex-1 py-3 bg-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-300 transition-all"
            >
              Đóng
            </button>
            <button
              onClick={handlePlay}
              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-bold text-white hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105"
            >
              {stageProgress[selectedStage] ? 'Chơi lại' : 'Bắt đầu'} 🎮
            </button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">1</div>
          <span>Đã mở</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">✓</div>
          <span>Hoàn thành</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs">🔒</div>
          <span>Khóa</span>
        </div>
      </div>
    </div>
  );
}
