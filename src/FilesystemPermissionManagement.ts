import { AttributeBasedCriterion, EntryPermissions } from './types';
import { EntryID } from './types/IDs';

export interface SetEntryPermissionParams {
    entryID: EntryID;
    permission: EntryPermissions;
    criterion: AttributeBasedCriterion;
    comment?: string | null;
};

export interface FilesystemPermissionManagement {
    setEntryPermission(params: SetEntryPermissionParams): Promise<void>;
};
