
export interface DesignInput {
  cvAdt: { [key: string]: string };
  lanes: string;
  terrain: string;
  designLife: string;
  growthRate: string;
  cbr: string;
}

export interface PavementLayer {
  material: string;
  code: string;
  thickness: number;
}

export interface PavementStructure {
  name: string;
  layers: PavementLayer[];
}

export interface DesignResult {
  esaly1: number;
  esaldes: number;
  trafficCategory: string;
  subgradeCategory: string;
  recommendedStructures: PavementStructure[];
}
