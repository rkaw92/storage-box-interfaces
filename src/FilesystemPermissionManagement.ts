import { AttributeBasedCriterion, EntryPermissions } from './types';
import { EntryID } from './types/IDs';

export interface SetEntryPermissionParams {
    entryID: EntryID;
    permission: EntryPermissions;
    criterion: AttributeBasedCriterion;
    comment?: string | null;
};

export interface RevokePermissionAdministrativelyParams {
    entryID: EntryID;
    criterion: AttributeBasedCriterion;
    revocationCriterion: AttributeBasedCriterion;
};

export interface FilesystemPermissionManagement {
    setEntryPermission(params: SetEntryPermissionParams): Promise<void>;
    revokePermissionAdministratively(params: RevokePermissionAdministrativelyParams): Promise<void>;
};
