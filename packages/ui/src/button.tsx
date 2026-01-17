"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        padding: "12px",
        borderRadius: 8,
        border: "1px solid #e6e6e6",
        fontSize: 18,
      }}
    >
      {children}
    </button>
  );
};
