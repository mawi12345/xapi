import { Account } from "./Account";

type MBoxAgent = {
  objectType?: "Agent";
  name?: string;
  mbox: string;
};

type MBoxSha1sumAgent = {
  objectType?: "Agent";
  name?: string;
  mbox_sha1sum: string;
};

type OpenIdAgent = {
  objectType?: "Agent";
  name?: string;
  openid: string;
};

type AccountAgent = {
  objectType?: "Agent";
  name?: string;
  account: Account;
};

// Mawi: v2 has to be exactly one
export type Agent = MBoxAgent | MBoxSha1sumAgent | OpenIdAgent | AccountAgent;
