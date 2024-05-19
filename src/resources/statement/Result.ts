import { Extensions } from ".";

// Mawi: v2 checked
export interface ResultScore {
  scaled: number;
  raw?: number;
  min?: number;
  max?: number;
}

// Mawi: v2 checked
export interface Result {
  score?: ResultScore;
  success?: boolean;
  completion?: boolean;
  response?: string;
  duration?: string;
  extensions?: Extensions;
}
