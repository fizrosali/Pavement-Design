
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center">
        <span className="text-4xl mr-4" role="img" aria-label="road icon">🛣️</span>
        <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">ATJ 5/85 Pavement Design Calculator</h1>
            <p className="text-sm text-slate-500">Based on JKR/SPJ/2008 & ATJ 5/85 (Pindaan 2013)</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
