import { ObjectiveActivityDefinition } from ".";
import { Activity } from "../../XAPI";

// Mawi: v2 not part of v2 spec
export interface ObjectiveActivity extends Activity {
  definition: ObjectiveActivityDefinition;
}
