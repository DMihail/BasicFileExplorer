export type DropBoxFolder = {
  id: string;
  name: string;
  path_display: string;
  path_lower: string;
};

export type DropBoxFile = {
  client_modified: string;
  content_hash: string;
  is_downloadable: boolean;
  rev: string;
  server_modified: string;
  size: boolean;
} & DropBoxFolder;

export type FileType = 'folder' | 'file';
