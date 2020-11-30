import { EntryID } from './types/IDs';
import { Entry } from './types/Entry';

export interface CreateDirectoryParams {
    parentID: EntryID | null;
    name: string;
};

export type CreateDirectoryResult = Pick<Entry,"filesystemID"|"entryID"|"parentID"|"name"|"entryType"|"lastModified">;

export interface ListDirectoryParams {
    directoryID: EntryID | null;
};

export interface DeleteEntryParams {
    entryID: EntryID;
};

export interface MoveEntryParams {
    entryID: EntryID;
    targetParentID: EntryID | null;
};

/**
 * Operations on filesystem entries that do not involve writing or reading
 *  of file data. Standard across all platforms.
 */
export interface FilesystemStructureOperations {
    createDirectory(params: CreateDirectoryParams): Promise<CreateDirectoryResult>;
    listDirectory(params: ListDirectoryParams): Promise<Array<Entry>>;
    deleteEntry(params: DeleteEntryParams): Promise<void>;
    moveEntry(params: MoveEntryParams): Promise<void>;
};
