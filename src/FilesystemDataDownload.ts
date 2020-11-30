import { Entry, EntryID } from "./types";

export interface DownloadFileParams {
    entryID: EntryID;
};
export interface DownloadFileInfo {
    name?: string;
    mimetype?: string;
    bytes?: number;
};
export interface DownloadFileResult<OutputDataType> {
    info: DownloadFileInfo;
    data: OutputDataType;
};

export interface FilesystemDataDownload<OutputDataType> {
    downloadFile(params: DownloadFileParams): Promise<DownloadFileResult<OutputDataType>>;
};

export interface DownloadURL {
    url: string;
};

export type DownloadFileOrRedirectResult<OutputDataType> =
    DownloadFileResult<OutputDataType> |
    DownloadURL;

export function isDownloadFileResult<OutputDataType>(input: any): input is DownloadFileResult<OutputDataType> {
    return Boolean(typeof input === 'object' && input && input.info && input.data);
};

export function isDownloadURL(input: any): input is DownloadURL {
    return (typeof input === 'object' && typeof input.url === 'string');
}

export interface FilesystemDataDownloadDirector<OutputDataType> {
    downloadFileOrRedirect(params: DownloadFileParams): Promise<DownloadFileOrRedirectResult<OutputDataType>>;
};
