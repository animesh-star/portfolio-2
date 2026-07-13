import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharInfo {
  char: string;
  globalIndex: number;
}

interface WordInfo {
  word: string;
  chars: CharInfo[];
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position of the paragraph
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  // Pre-calculate words and global character indices to keep rendering pure
  const words = text.split(' ');
  let runningIndex = 0;
  
  const wordInfos: WordInfo[] = words.map((word) => {
    const chars = word.split('').map((char) => ({
      char,
      globalIndex: runningIndex++,
    }));
    // Stagger count for the space between words
    runningIndex++;
    return { word, chars };
  });
  
  const totalLength = runningIndex;

  return (
    <p 
      ref={containerRef} 
      className={`relative flex flex-wrap justify-center leading-relaxed select-none ${className}`}
      style={style}
    >
      {wordInfos.map((wordInfo, wIdx) => (
        <span 
          key={wIdx} 
          className="inline-flex whitespace-nowrap mr-[0.25em]"
        >
          {wordInfo.chars.map((charInfo) => (
            <Character
              key={charInfo.globalIndex}
              char={charInfo.char}
              index={charInfo.globalIndex}
              total={totalLength}
              progress={scrollYProgress}
            />
          ))}
        </span>
      ))}
    </p>
  );
};

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Stagger start and end boundaries for each character
  // Spread them out over the [0, 0.9] range to ensure they all finish fading in before the bottom
  const start = (index / total) * 0.9;
  const end = Math.min(start + 0.1, 1.0);

  // Map progress (0 -> 1) to opacity (0.2 -> 1)
  const opacity = useTransform(progress, [start, end], [0.2, 1.0]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for size and layout */}
      <span className="opacity-0 pointer-events-none">{char}</span>
      {/* Absolutely positioned character that fades in */}
      <motion.span 
        style={{ opacity }} 
        className="absolute left-0 top-0 select-none pointer-events-none"
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
