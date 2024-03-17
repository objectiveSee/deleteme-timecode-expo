import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

import { useTimerFormatted } from './hooks/useTimer'

const styles = StyleSheet.create({
  timerText: {
    fontSize: 24,
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  pressable: {
    width: '100%'
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
