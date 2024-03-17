import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import { formatTime } from '../utilities/date'

export const NoteTextItem = ({ text, date }: { text: string, date: string }) => {
  const [noteText, setNoteText] = useState(text)
  const displayDate = useMemo(() => {
    const dateToMs = Date.parse(date)
    return formatTime(dateToMs)
  }, [date])

  return (
    <View style={styles.container}>
      <View style={styles.dateColumn}>
        <Text style={styles.dateText}>{displayDate}</Text>
      </View>
      <TextInput
        style={styles.input}
        multiline={true}
        editable={true}
        value={noteText}
        onChangeText={setNoteText}
        blurOnSubmit={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%'
  },
  dateColumn: {
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 1.0)'
  },
  dateText: {
    padding: 10
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(200,200,200,1)',
    padding: 10
  }
})