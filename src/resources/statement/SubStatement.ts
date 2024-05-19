import { Statement, StatementObject } from ".";

// Mawi: v2 checked
export interface SubStatement
  extends Omit<Statement, "id" | "stored" | "version" | "authority"> {
  objectType: "SubStatement";
  object: Exclude<StatementObject, SubStatement>;
}
