/**
 * Hook that provides the note state and methods to update it
 */

import { useState } from 'react'

export interface Code {
  date: Date
  text: string
}

export interface Note {
  title: string
  startDate: Date
  codes: Code[]
}

export const useNote = () => {
  const [note, setNote] = useState<Note>({
    title: 'First Note!',
    startDate: new Date(),
    codes: []
  })

  const addCode = (code: Code) => {
    setNote({
      ...note,
      codes: [...note.codes, code]
    })
  }

  return {
    note,
    addCode
  }
}
