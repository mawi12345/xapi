import { ActivityDefinition } from "./ActivityDefinition";

// Mawi: v2 checked
export interface Activity {
  objectType?: "Activity";
  id: string;
  definition?: ActivityDefinition;
}
