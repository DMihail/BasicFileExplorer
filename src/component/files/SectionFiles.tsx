import React, {FC} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import ListItem from './ListItem.tsx';
import {DropBoxFolder, FileType} from '../../utils/types.ts';
import {COLORS} from '../../const/COLORS.ts';

type Props = {
  list: Array<DropBoxFolder>;
  type: FileType;
};

const SectionFiles: FC<Props> = ({list, type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{type}s</Text>
      </View>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListItem
            id={item.id}
            name={item.name}
            path_display={item.path_display}
            path_lower={item.path_lower}
            type={type}
          />
        )}
        horizontal={true}
        contentContainerStyle={styles.content}
        style={styles.list}
        keyExtractor={item => item.name}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.notFound}>Not found</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SectionFiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 7,
    backgroundColor: COLORS.grey,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  content: {
    flexGrow: 1,
    gap: 30,
  },
  list: {
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  notFound: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 22,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
