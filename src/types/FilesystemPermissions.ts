/**
 * A FilesystemPermissions is a value object that describes
 *  the filesystem-wide rights conferred by some permission record.
 * The permissions apply to all entries (files/directories) within
 *  the filesystem, so a person with all of these enabled can be said
 *  to have administrative privileges over the entire FS.
 */
export interface FilesystemPermissions {
    /**
     * Whether it is allowed to read any file in the filesystem
     *  and list the contents of any directory.
     */
    canRead: boolean;
    /**
     * Whether it is allowed to write (replace) any file in the filesystem
     *  and create/remove entries from directories.
     */
    canWrite: boolean;
    /**
     * Whether it is allowed to grant new access permissions on any entry
     *  in the filesystem.
     */
    canShare: boolean;
    /**
     * Whether it is allowed to remove/alter somebody else's permissions.
     */
    canManage: boolean;
};
