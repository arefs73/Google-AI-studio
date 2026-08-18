import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-full h-full', size }) => {
  return (
    <img
      src="/logo.png"
      alt="RF Craft Logo"
      className={`${className} object-contain`}
      style={size ? { width: size, height: size } : undefined}
      referrerPolicy="no-referrer"
    />
  );
};

export default Logo;
