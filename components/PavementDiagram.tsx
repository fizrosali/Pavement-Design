import React from 'react';
import { PavementStructure } from '../types';
import { LAYER_COLORS, LAYER_PROPERTIES } from '../constants';

interface PavementDiagramProps {
  structure: PavementStructure;
}

const PavementDiagram: React.FC<PavementDiagramProps> = ({ structure }) => {
  const totalThickness = structure.layers.reduce((sum, layer) => sum + layer.thickness, 0);

  const generateTooltip = (code: string): string => {
    const properties = LAYER_PROPERTIES[code];
    if (!properties) {
      const fallbackLayer = structure.layers.find(l => l.code === code);
      return fallbackLayer ? fallbackLayer.material : 'Unknown Layer';
    }
    return Object.entries(properties)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
  };

  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <h4 className="font-semibold text-lg mb-3 text-slate-800">{structure.name}</h4>
      <div className="w-full flex flex-col-reverse border-2 border-slate-300 bg-slate-50 rounded">
        {structure.layers.map((layer, index) => {
          const heightPercentage = (layer.thickness / totalThickness) * 100;
          const minHeight = 40; // min pixels height for readability
          const colorClass = LAYER_COLORS[layer.code] || 'bg-gray-400 text-black';
          const tooltipText = generateTooltip(layer.code);
          
          return (
            <div
              key={index}
              className={`p-2 flex justify-between items-center text-sm transition-all duration-300 ${colorClass}`}
              style={{ minHeight: `${minHeight}px`, flexGrow: heightPercentage }}
              title={tooltipText}
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