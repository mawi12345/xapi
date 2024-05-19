import { InteractionActivityDefinition } from ".";
import { Activity } from "../../XAPI";

// Mawi: v2 not sure if this should be part of the "Activity" interface
export interface InteractionActivity extends Activity {
  definition: InteractionActivityDefinition;
}
