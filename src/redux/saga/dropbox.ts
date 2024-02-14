import {API} from '../../utils/API.ts';
import {DropBoxFile, DropBoxFolder} from '../../utils/types.ts';

export async function getListFolder(
  path = '',
): Promise<{folder: Array<DropBoxFolder>; files: Array<DropBoxFile>}> {
  try {
    const {data} = await API.post('/2/files/list_folder', {
      path,
    });
    let folder: Array<DropBoxFolder> = [];
    let files: Array<DropBoxFile> = [];
    if (data && data.entries && Array.isArray(data.entries)) {
      folder = data.entries.filter(
        (item: {[x: string]: string}) => item['.tag'] === 'folder',
      );
      files = data.entries.filter(
        (item: {[x: string]: string}) => item['.tag'] === 'file',
      );
    }

    return {folder, files};
  } catch (e) {
    if (__DEV__) {
      console.log(e);
    }
    return {folder: [], files: []};
  }
}

export async function getTemporaryLink(path = ''): Promise<string> {
  const {data} = await API.post('/2/files/get_temporary_link', {
    path,
  });
  if (!data || !data.link) {
    throw new Error('Failed to get link');
  }
  return data.link;
}

export function* removeFileOrFolder(path: string) {
  try {
    const {data} = yield API.post('/2/files/delete_v2', {
      path,
    });
  } catch (e) {
    if (__DEV__) {
      console.log(e);
    }
  }
}
