import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [terminalText, setTerminalText] = useState('Enter the Portfolio(Click Enter)');
  const [awaitingEnter, setAwaitingEnter] = useState(true);

  const terminalSequence = [
    { text: '\n\nSYSTEM INITIALIZING...', delay: 100 },
    { text: '\n> Loading portfolio.exe', delay: 800 },
    { text: '\n> Checking credentials...', delay: 600 },
    { text: ' OK', delay: 400 },
    { text: '\n> Loading assets...', delay: 700 },
    { text: ' OK', delay: 400 },
    { text: '\n> Establishing connection...', delay: 800 },
    { text: ' OK', delay: 400 },
    { text: '\n> Rendering interface...', delay: 600 },
    { text: '\n\nWELCOME TO THE PORTFOLIO', delay: 500 },
  ];

  useEffect(() => {
    if (!awaitingEnter) return;

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        setAwaitingEnter(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [awaitingEnter]);

  useEffect(() => {
    if (awaitingEnter) return;

    let currentIndex = 0;
    let currentText = 'Enter the Portfolio';

    const typeNextLine = () => {
      if (currentIndex < terminalSequence.length) {
        const { text, delay } = terminalSequence[currentIndex];
        currentText += text;
        setTerminalText(currentText);
        currentIndex++;
        setTimeout(typeNextLine, delay);
      } else {
        setTimeout(() => onComplete(), 800);
      }
    };

    typeNextLine();
  }, [awaitingEnter, onComplete]);

  return (
    <div className="min-h-screen bg-retro-dark flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="bg-black border-4 sm:border-8 border-retro-orange p-4 sm:p-8 shadow-retro-heavy">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 border-b-2 sm:border-b-4 border-retro-orange pb-3 sm:pb-4">
            <div className="flex gap-1 sm:gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-retro-orange border border-retro-cream sm:border-2"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-retro-yellow border border-retro-cream sm:border-2"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-retro-pink border border-retro-cream sm:border-2"></div>
            </div>
            <span className="text-retro-cream font-retro text-xs sm:text-sm tracking-wider">TERMINAL v1.0</span>
          </div>
          <div className="font-mono text-xs sm:text-base text-retro-cream whitespace-pre-wrap break-words">
            <div className="flex items-start">
              <span className="text-retro-orange mr-2 flex-shrink-0">$</span>
              <div className="flex-1 min-w-0">
                {terminalText}
                <span className="inline-block w-2 sm:w-3 h-4 sm:h-5 bg-retro-orange ml-1 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}