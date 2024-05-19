import { RFC5646LanguageCodes } from ".";

// Mawi: v2 checked
export type LanguageMap = {
  [languageCode in RFC5646LanguageCodes]: string;
};
