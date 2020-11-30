import { EntryID, Entry } from "./types";
import { FileEntry } from "./types/FileEntry";

export type FileUploadToken = string;
export type UploadFileResult = Pick<FileEntry,"filesystemID"|"entryID"|"parentID"|"name"|"entryType"|"fileID">;

export interface FileDataDescription {
    bytes: number;
    type: string;
};
export interface FileEntryDescription {
    parentID: EntryID | null;
    name: string;
    replace?: boolean;
};
export interface FileUploadStart extends FileDataDescription, FileEntryDescription {};
export interface StartFileUploadParams {
    files: FileUploadStart[];
}

export interface StartFileUploadResult {
    decision: "upload" | "duplicate";
};
export interface ItemUploadStarted extends StartFileUploadResult {
    decision: "upload";
    token: FileUploadToken;
};
export interface ItemUploadPreventedOnDuplicate {
    decision: "duplicate";
    existingEntry: Entry;
};

export interface FileUploadUntrusted<DataSourceType> {
    data: DataSourceType;
    token: FileUploadToken;
};
export interface UploadFileParams<DataSourceType> {
    upload: FileUploadUntrusted<DataSourceType>;
}

export interface FilesystemDataUpload<DataSourceType> {
    startFileUpload(params: StartFileUploadParams): Promise<StartFileUploadResult[]>;
    uploadFile(params: UploadFileParams<DataSourceType>): Promise<UploadFileResult>;
};
