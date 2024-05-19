export type DocumentJson = { [key: string]: any };

// Mawi: v2 maybe Blob or stream?
export type DocumentUnknown = unknown;

export type Document = DocumentJson | DocumentUnknown;
