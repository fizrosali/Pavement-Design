
import React from 'react';
import { PavementStructure } from '../types';
import { LAYER_COLORS } from '../constants';

interface PavementDiagramProps {
  structure: PavementStructure;
}

const PavementDiagram: React.FC<PavementDiagramProps> = ({ structure }) => {
  const totalThickness = structure.layers.reduce((sum, layer) => sum + layer.thickness, 0);

  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <h4 className="font-semibold text-lg mb-3 text-slate-800">{structure.name}</h4>
      <div className="w-full flex flex-col-reverse border-2 border-slate-300 bg-slate-50 rounded">
        {structure.layers.map((layer, index) => {
          const heightPercentage = (layer.thickness / totalThickness) * 100;
          const minHeight = 40; // min pixels height for readability
          const colorClass = LAYER_COLORS[layer.code] || 'bg-gray-400 text-black';
          
          return (
            <div
              key={index}
              className={`p-2 flex justify-between items-center text-sm transition-all duration-300 ${colorClass}`}
              style={{ minHeight: `${minHeight}px`, flexGrow: heightPercentage }}
              title={`${layer.material}`}
            >
              <span className="font-bold">{layer.code}</span>
              <span>{layer.material}</span>
              <span className="font-bold">{layer.thickness} mm</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PavementDiagram;
