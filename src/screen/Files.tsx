import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainStackProps} from '../navigation/types.ts';
import {SagaHelper} from '../redux';
import {DropBoxFolder} from '../utiils/types.ts';
import {COLORS} from '../const/COLORS.ts';
import SectionFiles from '../component/files/SectionFiles.tsx';

const Files = ({navigation}: MainStackProps<'Files'>) => {
  const [content, setContent] = useState<{
    folder: Array<DropBoxFolder>;
    files: Array<DropBoxFolder>;
  }>({
    folder: [],
    files: [],
  });
  const fetch = useCallback(async () => {
    const data = await SagaHelper.run(['dropbox', 'getListFolder'], '');
    setContent(data);
  }, []);

  useEffect(() => {
    fetch();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <SectionFiles list={content.folder} type={'folder'} />
      <SectionFiles list={content.files} type={'file'} />
    </SafeAreaView>
  );
};

export default Files;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
