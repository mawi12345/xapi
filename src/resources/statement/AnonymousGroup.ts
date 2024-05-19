import { Agent } from ".";

// Mawi: v2 checked
export interface AnonymousGroup {
  objectType: "Group";
  name?: string;
  member: Agent[];
}
