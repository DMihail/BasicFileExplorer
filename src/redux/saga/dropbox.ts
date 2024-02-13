import {API} from '../../utiils/API.ts';
import {DropBoxFile, DropBoxFolder} from '../../utiils/types.ts';

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
