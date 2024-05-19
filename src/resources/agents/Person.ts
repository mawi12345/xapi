import { Account } from "../statement/Account";

// Mawi: v2 checked
export interface Person {
  objectType: "Person";
  name?: string[];
  mbox?: string[];
  mbox_sha1sum?: string[];
  openid?: string[];
  account?: Account[];
}
