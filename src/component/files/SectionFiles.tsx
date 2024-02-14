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
    <View>
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
        numColumns={3}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        style={{
          padding: 10,
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default SectionFiles;

const styles = StyleSheet.create({
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
  column: {
    gap: 30,
  },
  content: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
  },
});
