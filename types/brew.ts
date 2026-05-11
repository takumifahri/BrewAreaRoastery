export interface BrewingHistory {
  origin_country: string;
  invented_year: number;
  inventor?: string;
  background: string;
  culture: string;
  specialty_coffee_role: string;
}

export interface BrewingCharacteristics {
  body: string;
  acidity: string;
  sweetness: string;
  texture: string;
  strength: string;
  crema?: boolean;
  clarity?: boolean;
  refreshing?: boolean;
  oiliness?: boolean;
  [key: string]: string | boolean | undefined;
}

export interface BrewingGuide {
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coffee_dose_grams: number;
  yield_grams?: number;
  water_ml?: number;
  brew_ratio: string;
  grind_size: string;
  water_temperature_celsius: string;
  pressure_bar?: number;
  extraction_time_seconds?: string;
  brew_time_minutes?: string;
  brew_time_hours?: string;
  taste_profile: string[];
  steps: string[];
  tips: string[];
  common_mistakes: string[];
  notes: string;
}

export interface BrewMethod {
  id: string;
  title: string;
  short_description: string;
  history: BrewingHistory;
  characteristics: BrewingCharacteristics;
  recommended_roast: string[];
  recommended_beans: string[];
  equipment: string[];
  guides: BrewingGuide[];
}
