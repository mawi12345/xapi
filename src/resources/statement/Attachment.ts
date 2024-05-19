import { LanguageMap, AttachmentUsage } from ".";

// Mawi: v2 checked
export interface Attachment {
  usageType: AttachmentUsage;
  display: LanguageMap;
  contentType: string;
  length: number;
  sha2: string;
  description?: LanguageMap;
  fileUrl?: string;
}
