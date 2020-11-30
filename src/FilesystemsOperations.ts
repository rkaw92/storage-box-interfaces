import { Filesystem } from "./types/Filesystem";

export type CreateFilesystemParams = Pick<Filesystem,"name"|"alias">;

export interface FilesystemsOperations {
    listFilesystems(): Promise<Array<Filesystem>>;
    createFilesystem(params: CreateFilesystemParams): Promise<Filesystem>;
};
