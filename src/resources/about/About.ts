import { Extensions } from "../../XAPI";

// Mawi: v2 checked
export interface About {
  /**
   * xAPI versions this LRS supports
   */
  version: string[];
  /**
   * Extensions this LRS supports
   */
  extensions?: Extensions;
}
