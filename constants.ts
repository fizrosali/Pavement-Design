import { PavementStructure } from './types';

export const CV_CLASSES = ['CV1', 'CV2', 'CV3', 'CV4', 'CV5', 'CV6', 'CV7', 'CV8', 'CV9'];

// From Addendum Table 2.1
export const LEF_FACTORS: { [key: string]: number } = {
  CV1: 3.9, CV2: 2.8, CV3: 2.6, CV4: 7.1, CV5: 6.1,
  CV6: 4.7, CV7: 4.2, CV8: 3.5, CV9: 3.6
};

// From Table 2.2
export const LANE_DISTRIBUTION_FACTORS: { [key: string]: number } = {
  'One': 1.0,
  'Two': 0.9,
  'Three or more': 0.7
};

// From Table 2.3
export const TERRAIN_FACTORS: { [key: string]: number } = {
  'Flat': 1.0,
  'Rolling': 1.1,
  'Mountainous/Steep': 1.3
};

// From Table 2.5
export const TRAFFIC_CATEGORIES = [
  { name: 'T1', min: 0, max: 1_000_000 },
  { name: 'T2', min: 1_000_001, max: 2_000_000 },
  { name: 'T3', min: 2_000_001, max: 10_000_000 },
  { name: 'T4', min: 10_000_001, max: 30_000_000 },
  { name: 'T5', min: 30_000_001, max: Infinity },
];

// From Table 2.6
export const SUBGRADE_CATEGORIES = [
  { name: 'SG1', min: 5, max: 12 },
  { name: 'SG2', min: 12.1, max: 20 },
  { name: 'SG3', min: 20.1, max: 30 },
  { name: 'SG4', min: 30.1, max: Infinity },
];

export const LAYER_COLORS: { [key: string]: string } = {
  BSC: 'bg-gray-800 text-white',
  BC: 'bg-gray-700 text-white',
  BB: 'bg-gray-600 text-white',
  BCBB: 'bg-gray-600 text-white',
  CAB: 'bg-yellow-700 text-white',
  GSB: 'bg-orange-400 text-gray-800',
  STB1: 'bg-blue-300 text-gray-800',
  STB2: 'bg-cyan-300 text-gray-800',
};

// From ATJ 5/85 Sections 2.5.1, 2.5.3, 2.5.4
export const LAYER_PROPERTIES: { [code: string]: { [prop: string]: string } } = {
  BSC: {
    'Material': 'Bituminous Surface Course (AC 10/14)',
    'Elastic Modulus': '1440 MPa @ 35°C',
    'Poisson\'s Ratio': '0.40 @ 35°C',
  },
  BC: {
    'Material': 'Bituminous Binder Course (AC 28)',
    'Elastic Modulus': '1920 MPa @ 35°C',
    'Poisson\'s Ratio': '0.40 @ 35°C',
  },
  BB: {
    'Material': 'Bituminous Road Base (AC 28)',
    'Elastic Modulus': '2400 MPa @ 25°C',
    'Poisson\'s Ratio': '0.35 @ 25°C',
  },
  BCBB: {
    'Material': 'Bituminous Binder/Base Course (AC 28)',
    'Elastic Modulus': '1920-2400 MPa',
    'Poisson\'s Ratio': '0.35-0.40',
  },
  CAB: {
    'Material': 'Crushed Aggregate Road Base',
    'Elastic Modulus': 'Approx. 350 MPa',
    'Poisson\'s Ratio': 'Approx. 0.35',
  },
  GSB: {
    'Material': 'Granular Sub-Base',
    'Elastic Modulus': '150-250 MPa',
    'Poisson\'s Ratio': 'Approx. 0.35',
  },
  STB1: {
    'Material': 'Stabilised Base (3-5% Portland cement)',
    'Elastic Modulus': '1800 MPa',
    'Poisson\'s Ratio': '0.40',
  },
  STB2: {
    'Material': 'Stabilised Base (Bituminous emulsion/foamed bitumen)',
    'Elastic Modulus': '1200 MPa',
    'Poisson\'s Ratio': '0.35',
  },
};


// From Figures 3.1 to 3.5
export const PAVEMENT_CATALOGUE: { [key: string]: { [key: string]: PavementStructure[] } } = {
  'T1': {
    'SG1': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 250 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }],
    'SG2': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }],
    'SG3': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }],
    'SG4': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }],
  },
  'T2': {
    'SG1': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 140 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 100 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BB', material: 'Bituminous Base', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 250 }] }],
    'SG2': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 140 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 120 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BB', material: 'Bituminous Base', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }],
    'SG3': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 120 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 100 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 120 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BB', material: 'Bituminous Base', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }],
    'SG4': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 100 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 100 }, { code: 'STB2', material: 'Stabilised Base (Type 2)', thickness: 120 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BB', material: 'Bituminous Base', thickness: 80 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }],
  },
  'T3': {
    'SG1': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 130 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 100 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 160 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }],
    'SG2': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 130 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 100 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }],
    'SG3': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 130 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 100 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 130 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }],
    'SG4': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 130 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BC', material: 'Bituminous Binder Course', thickness: 100 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 130 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }],
  },
  'T4': {
    'SG2': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 150 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 150 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 120 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }],
    'SG3': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 150 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 140 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 180 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }],
    'SG4': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 150 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 130 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 100 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }],
  },
  'T5': {
    'SG2': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 190 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 160 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 210 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 200 }] }],
    'SG3': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 190 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 140 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 150 }] }],
    'SG4': [{ name: 'Conventional Flexible', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 190 }, { code: 'CAB', material: 'Crushed Aggregate Base', thickness: 200 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Deep Strength', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 140 }, { code: 'STB1', material: 'Stabilised Base (Type 1)', thickness: 150 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }, { name: 'Full Depth Asphalt', layers: [{ code: 'BSC', material: 'Bituminous Surface Course', thickness: 50 }, { code: 'BCBB', material: 'Bituminous Binder/Base', thickness: 180 }, { code: 'GSB', material: 'Granular Sub-Base', thickness: 100 }] }],
  },
};