import React from 'react';
import { DesignResult } from '../types';
import PavementDiagram from './PavementDiagram';
import { LAYER_COLORS } from '../constants';

interface ResultsDisplayProps {
  results: DesignResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  if (!results) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 h-full flex flex-col items-center justify-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        <h2 className="text-xl font-semibold text-slate-600">Your Results Will Appear Here</h2>
        <p className="text-slate-400 mt-2">Fill in the design parameters and click "Calculate" to see the recommended pavement structures.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Design Calculation Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="text-sm text-slate-500">ESALs (Base Year)</div>
            <div className="text-xl font-bold">{results.esaly1.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="text-sm text-slate-500">ESALs (Design Life)</div>
            <div className="text-xl font-bold text-blue-600">{results.esaldes.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <div className="text-sm text-green-700">Traffic Category</div>
            <div className="text-xl font-bold text-green-800">{results.trafficCategory}</div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="text-sm text-yellow-700">Sub-Grade Category</div>
            <div className="text-xl font-bold text-yellow-800">{results.subgradeCategory}</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-700">Recommended Pavement Structures</h3>
        {results.recommendedStructures.length > 0 ? (
          <div className="space-y-8">
            {results.recommendedStructures.map((structure, index) => (
              <PavementDiagram key={index} structure={structure} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-semibold">No standard pavement structure found for the combination of Traffic Category '{results.trafficCategory}' and Sub-Grade Category '{results.subgradeCategory}'.</p>
            <p className="text-red-600 text-sm mt-2">Please review the ATJ 5/85 document for special cases or consider sub-grade improvement.</p>
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-slate-200">
        <h4 className="text-lg font-semibold mb-3 text-slate-700">Layer Color Legend</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
          {Object.entries(LAYER_COLORS).map(([code, colorClass]) => (
            <div key={code} className="flex items-center space-x-3">
              <div className={`w-5 h-5 rounded-sm border border-slate-300 ${colorClass.split(' ')[0]}`} />
              <span className="text-sm text-slate-600 font-mono">{code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;