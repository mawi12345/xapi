import { ActivityDefinition } from "../../XAPI";

// Mawi: v2 not part of v2 spec
export interface ObjectiveActivityDefinition extends ActivityDefinition {
  type: "http://adlnet.gov/expapi/activities/objective";
}
