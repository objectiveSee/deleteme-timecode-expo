import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export const NoteTextItem = ({ text, date }: { text: string, date: string }) => {
  const [noteText, setNoteText] = useState(text)

  return (
    <View style={{ width: '100%' }}>
      <Text style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)', padding: 10 }}>
        {date}
      </Text>
      <TextInput
        style={{ width: '100%', backgroundColor: 'rgba(255, 0, 0, 0.1)', padding: 10 }}
        multiline={true}
        editable={true}
        value={noteText}
        onChangeText={setNoteText}
        blurOnSubmit={true} // This should ensure the keyboard is dismissed when the return key is pressed in a multiline TextInput
      />
    </View>
  )
}
