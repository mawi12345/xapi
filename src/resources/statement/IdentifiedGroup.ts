// Mawi: v2 has to be exactly one
// import { InverseFunctionalIdentifier } from ".";
import { Account } from "./Account";
import { Agent } from ".";

type MBoxGroup = {
  objectType: "Group";
  name?: string;
  mbox: string;
  member?: Agent[];
};

type MBoxSha1sumGroup = {
  objectType: "Group";
  name?: string;
  mbox_sha1sum: string;
  member?: Agent[];
};

type OpenIdGroup = {
  objectType: "Group";
  name?: string;
  openid: string;
  member?: Agent[];
};

type AccountGroup = {
  objectType: "Group";
  name?: string;
  account: Account;
  member?: Agent[];
};

export type IdentifiedGroup =
  | MBoxGroup
  | MBoxSha1sumGroup
  | OpenIdGroup
  | AccountGroup;
