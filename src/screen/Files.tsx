import React, {useEffect, useState, createContext} from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import {FilesStackProps} from '../navigation/types.ts';
import {DropBoxFolder} from '../utils/types.ts';
import {COLORS} from '../const/COLORS.ts';
import SectionFiles from '../component/files/SectionFiles.tsx';
import Tools from '../component/Tools.tsx';
import ListSettings from '../component/files/ListSettings.tsx';
import Loader from '../component/Loader.tsx';
import {getListFolder} from '../redux/saga/dropbox.ts';
import showSimpleToast from '../utils/showSimpleToast.ts';

type Context = {
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
} | null;

export const FilesContext = createContext<Context>(null);

const Files = ({route}: FilesStackProps<'StackFiles'>) => {
  const [content, setContent] = useState<{
    folder: Array<DropBoxFolder>;
    files: Array<DropBoxFolder>;
  }>({
    folder: [],
    files: [],
  });
  const [load, setLoad] = useState<boolean>(true);

  const fetch = async () => {
    try {
      const data = await getListFolder(route.params.path);
      setContent(data);
    } catch (e) {
      if (__DEV__) console.log(e);
      showSimpleToast('Failed to get dropbox data');
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    if (load) fetch();
  }, [route.params, load]);

  return (
    <FilesContext.Provider value={{setLoad}}>
      <SafeAreaView style={styles.container}>
        {!load ? (
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Text style={styles.title}>Documents</Text>
            <Text style={styles.subTitle}>Only you</Text>

            <Tools />
            <ListSettings />
            <SectionFiles list={content.folder} type={'folder'} />
            <SectionFiles list={content.files} type={'file'} />
            <Text style={styles.count}>
              {content.folder.length} Folders, {content.files.length} File
            </Text>
          </ScrollView>
        ) : (
          <Loader />
        )}
      </SafeAreaView>
    </FilesContext.Provider>
  );
};

export default Files;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 20,
    marginBottom: 10,
    color: COLORS.white,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    marginLeft: 20,
    marginBottom: 20,
    color: COLORS.white,
  },
  count: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 24,
    color: COLORS.white,
  },
});
