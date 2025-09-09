
import React from 'react';

interface InputCardProps {
  title: string;
  children: React.ReactNode;
}

const InputCard: React.FC<InputCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="bg-slate-100 border-b border-slate-200 p-4">
        <h2 className="text-lg font-semibold text-slate-700">{title}</h2>
      </div>
      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  );
};

export default InputCard;
