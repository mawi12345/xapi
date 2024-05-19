import { Agent } from "http";
import {
  StatementRef,
  Extensions,
  RFC5646LanguageCodes,
  Actor,
  Group,
} from ".";
import { Activity } from "../activities/Activity.js";

// Mawi: v2 contextAgents and contextGroups are new
export interface Context {
  registration?: string;

  /**
   * @deprecated With the addition of context agents and context groups, it is recommended not to use instructor or team. They are supported in this document for backward compatibility purposes.
   */
  instructor?: Actor;

  /**
   * @deprecated With the addition of context agents and context groups, it is recommended not to use instructor or team. They are supported in this document for backward compatibility purposes.
   */
  team?: Group;

  // Mawi: v2 does not have to be a array, interaction activities should also be allowed
  contextActivities?: {
    parent?: Activity | Activity[];
    grouping?: Activity | Activity[];
    category?: Activity | Activity[];
    other?: Activity | Activity[];
  };

  /**
   * @since 2.0.0
   */
  contextAgents?: {
    objectType: "contextAgent";
    agent: Agent;
    relevantTypes: string[];
  }[];

  /**
   * @since 2.0.0
   */
  contextGroups?: {
    objectType: "contextGroup";
    group: Group;
    relevantTypes: string[];
  }[];

  statement?: StatementRef;
  revision?: string;
  platform?: string;
  language?: RFC5646LanguageCodes;
  extensions?: Extensions;
}
