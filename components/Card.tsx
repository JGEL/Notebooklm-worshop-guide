
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode; // Accepts JSX element for icon
}

const Card: React.FC<CardProps> = ({ title, children, className = '', icon }) => {
  return (
    <div className={`bg-white shadow-xl rounded-lg p-6 ${className}`}>
      {title && (
        <div className="flex items-center mb-4">
          {icon && <span className="mr-3 text-primary">{icon}</span>}
          <h3 className="text-xl font-semibold text-neutral-dark">{title}</h3>
        </div>
      )}
      <div className="text-neutral-DEFAULT space-y-2">{children}</div>
    </div>
  );
};

export default Card;
