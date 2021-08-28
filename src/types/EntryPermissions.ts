/**
 * An EntryPermissions is a value object that describes the actions enabled
 *  by a given permission record. Usually, they'll be accompanied by a condition
 *  that selects some users based on an attribute (like a group).
 * Permissions are recursive - in case of directories, they apply to the directory
 *  itself and all its direct and indirect descendants.
 */
export interface EntryPermissions {
    /**
     * Whether it is allowed to get the contents (in case of files)
     *  or read the entries recursively (in case of directories).
     */
    canRead: boolean;
    /**
     * Whether it is allowed to change the contents (in case of files)
     *  or create/write/delete entries within (in case of directories).
     */
    canWrite: boolean;
    /**
     * Whether it is allowed to grant new permissions to this entry
     *  or its descendants. Note that this may not necessarily mean
     *  the right to remove permissions - only the granter of a given
     *  permission record may revoke it, or users with separate,
     *  special permissions.
     */
    canShare: boolean;
};
