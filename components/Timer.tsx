import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

import { useTimerFormatted } from './hooks/useTimer'

const styles = StyleSheet.create({
  timerText: {
    fontSize: 40,
    textAlign: 'left',
    flex: 1,
    paddingLeft: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  pressable: {
    width: '100%',
    height: 50,
  }
})

export const Timer = ({ startDate, onPress }: { startDate: Date, onPress: () => void }) => {
  const timerText = useTimerFormatted(startDate)
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Text style={styles.timerText}>
        {timerText}
      </Text>
    </Pressable>
  )
}
