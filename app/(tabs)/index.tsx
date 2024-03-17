import { useNote, Code } from '@/src/hooks/useNote';
import { NoteTextItem } from '@/src/NoteTextItem';
import { Timer } from '@/src/Timer';
import React, { useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

export default function TabOneScreen() {

  const startDateRef = useRef(new Date());
  const { note, addCode } = useNote();

  const addNewItem = () => {
    console.log('add new item');
    addCode({ text: 'new item', date: new Date() });
  }

  const renderItem = ({ item }: { item: Code }) => {
    return (
      <NoteTextItem text={item.text} date={item.date.toISOString()} />
    )
  }

  return (
    <View style={styles.container}>
      <Timer startDate={startDateRef.current} onPress={addNewItem} />
      <FlatList 
        style={styles.list}
        data={note.codes}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
  },
});
