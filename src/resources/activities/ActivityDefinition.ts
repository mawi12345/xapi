import { Extensions, LanguageMap } from "../../XAPI";

// Mawi: v2 checked
export interface ActivityDefinition {
  type?: string;
  name?: LanguageMap;
  description?: LanguageMap;
  moreInfo?: string;
  extensions?: Extensions;
}
