import React, { useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { NoteTextItem } from '@/src/components/NoteTextItem'
import { Timer } from '@/src/components/Timer'
import { type Code, useNote } from '@/src/hooks/useNote'

export default function TabOneScreen () {
  const startDateRef = useRef(new Date())
  const { note, addCode } = useNote()

  const addNewItem = () => {
    console.log('add new item')
    addCode({ text: '', date: new Date() })
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
    alignItems: 'center'
  },
  list: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 0, 1.0)'
  }
})
