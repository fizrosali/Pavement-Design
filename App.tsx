
import React, { useState, useMemo, useCallback } from 'react';
import { DesignInput, PavementStructure, DesignResult } from './types';
import { CV_CLASSES, LEF_FACTORS, LANE_DISTRIBUTION_FACTORS, TERRAIN_FACTORS, TRAFFIC_CATEGORIES, SUBGRADE_CATEGORIES, PAVEMENT_CATALOGUE } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import InputCard from './components/InputCard';
import ResultsDisplay from './components/ResultsDisplay';
import NumberInput from './components/NumberInput';
import SelectInput from './components/SelectInput';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<DesignInput>({
    cvAdt: {
      CV1: '749', CV2: '122', CV3: '547', CV4: '103', CV5: '90',
      CV6: '76', CV7: '56', CV8: '38', CV9: '16'
    },
    lanes: '2',
    terrain: '1.0',
    designLife: '20',
    growthRate: '4.5',
    cbr: '25'
  });
  
  const [results, setResults] = useState<DesignResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = useCallback((field: keyof DesignInput, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleCvAdtChange = useCallback((cvClass: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      cvAdt: { ...prev.cvAdt, [cvClass]: value }
    }));
  }, []);

  const calculateDesign = useCallback(() => {
    setIsLoading(true);

    try {
      const laneFactor = Number(inputs.lanes);
      const terrainFactor = Number(inputs.terrain);
      const designLife = Number(inputs.designLife);
      const growthRate = Number(inputs.growthRate) / 100;
      const cbr = Number(inputs.cbr);

      const esalSum = CV_CLASSES.reduce((acc, cvClass) => {
        const adt = Number(inputs.cvAdt[cvClass]) || 0;
        const lef = LEF_FACTORS[cvClass];
        return acc + (adt * lef);
      }, 0);

      const esaly1 = esalSum * 365 * laneFactor * terrainFactor;

      let totalGrowthFactor: number;
      if (growthRate === 0) {
        totalGrowthFactor = designLife;
      } else {
        totalGrowthFactor = (Math.pow(1 + growthRate, designLife) - 1) / growthRate;
      }
      
      const esaldes = esaly1 * totalGrowthFactor;

      const trafficCategory = TRAFFIC_CATEGORIES.find(tc => esaldes >= tc.min && esaldes <= tc.max)?.name || 'T5';
      const subgradeCategory = SUBGRADE_CATEGORIES.find(sc => cbr >= sc.min && cbr <= sc.max)?.name || 'SG4';
      
      const recommendedStructures = PAVEMENT_CATALOGUE[trafficCategory]?.[subgradeCategory] || [];

      setResults({
        esaly1,
        esaldes,
        trafficCategory,
        subgradeCategory,
        recommendedStructures,
      });

    } catch (error) {
      console.error("Calculation Error:", error);
      alert("An error occurred during calculation. Please check your inputs.");
      setResults(null);
    } finally {
      setTimeout(() => setIsLoading(false), 500); // Simulate processing
    }

  }, [inputs]);

  const resetForm = useCallback(() => {
    setInputs({
      cvAdt: {
        CV1: '0', CV2: '0', CV3: '0', CV4: '0', CV5: '0',
        CV6: '0', CV7: '0', CV8: '0', CV9: '0'
      },
      lanes: '2',
      terrain: '1.0',
      designLife: '20',
      growthRate: '4.5',
      cbr: '15'
    });
    setResults(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            <InputCard title="Design Parameters">
              <SelectInput
                label="Lanes (in one direction)"
                value={inputs.lanes}
                onChange={(e) => handleInputChange('lanes', e.target.value)}
                options={Object.entries(LANE_DISTRIBUTION_FACTORS).map(([name, value]) => ({ label: name, value: value.toString() }))}
              />
              <SelectInput
                label="Terrain Type"
                value={inputs.terrain}
                onChange={(e) => handleInputChange('terrain', e.target.value)}
                options={Object.entries(TERRAIN_FACTORS).map(([name, value]) => ({ label: name, value: value.toString() }))}
              />
              <NumberInput
                label="Design Life (years)"
                value={inputs.designLife}
                onChange={(e) => handleInputChange('designLife', e.target.value)}
                placeholder="e.g., 20"
              />
              <NumberInput
                label="Annual Traffic Growth Rate (%)"
                value={inputs.growthRate}
                onChange={(e) => handleInputChange('growthRate', e.target.value)}
                placeholder="e.g., 4.5"
                step="0.1"
              />
              <NumberInput
                label="Sub-Grade Strength (CBR %)"
                value={inputs.cbr}
                onChange={(e) => handleInputChange('cbr', e.target.value)}
                placeholder="e.g., 15"
              />
            </InputCard>
            
            <InputCard title="Commercial Vehicle ADT (one direction)">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {CV_CLASSES.map(cvClass => (
                  <NumberInput
                    key={cvClass}
                    label={cvClass}
                    value={inputs.cvAdt[cvClass]}
                    onChange={(e) => handleCvAdtChange(cvClass, e.target.value)}
                    placeholder="0"
                  />
                ))}
              </div>
            </InputCard>

            <div className="flex space-x-4">
              <button
                onClick={calculateDesign}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:bg-slate-400"
              >
                {isLoading ? 'Calculating...' : 'Calculate Pavement Design'}
              </button>
              <button
                onClick={resetForm}
                className="w-1/3 bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-colors duration-300"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ResultsDisplay results={results} />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
