import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = "Live Project",
  onClick,
  className = ""
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer select-none focus:outline-none ${className}`}
    >
      {label}
    </button>
  );
};

export default LiveProjectButton;
