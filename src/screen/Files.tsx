import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {MainStackProps} from '../navigation/types.ts';
import {SagaHelper} from '../redux';
import {DropBoxFolder} from '../utils/types.ts';
import {COLORS} from '../const/COLORS.ts';
import SectionFiles from '../component/files/SectionFiles.tsx';
import Tools from '../component/Tools.tsx';

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
      <ScrollView>
        <Text style={styles.title}>Documents</Text>
        <Text style={styles.subTitle}>Only you</Text>
        <Tools />
        <SectionFiles list={content.folder} type={'folder'} />
        <SectionFiles list={content.files} type={'file'} />
      </ScrollView>
    </SafeAreaView>
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
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    marginLeft: 20,
    marginBottom: 20,
  },
});
