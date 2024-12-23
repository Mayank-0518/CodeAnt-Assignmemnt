import React from 'react';

const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-2 rounded-md text-lg font-medium transition shadow-sm ${className}`}
  >
    {children}
  </button>
);

export default Button;