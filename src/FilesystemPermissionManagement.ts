import { AttributeBasedCriterion, EntryPermissions } from './types';
import { EntryID } from './types/IDs';

export interface SetEntryPermissionParams {
    entryID: EntryID;
    permission: EntryPermissions;
    criterion: AttributeBasedCriterion;
};

export interface FilesystemPermissionManagement {
    setEntryPermission(params: SetEntryPermissionParams): Promise<void>;
};
