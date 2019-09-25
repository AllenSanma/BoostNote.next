import React from 'react'
import NoteItem from './NoteItem'
import { NoteDoc } from '../../../lib/db/types'
import styled from '../../../lib/styled'
import Toolbar from '../../atoms/Toolbar'
import ToolbarIconButton from '../../atoms/ToolbarIconButton'
import { mdiSquareEditOutline } from '@mdi/js'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  & > ul {
    flex: 1;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-y: auto;
  }
`

type NoteListProps = {
  storageId: string
  notes: NoteDoc[]
  currentNoteId: string | null
  createNote: () => Promise<void>
}

const NoteList = ({
  notes,
  currentNoteId,
  createNote,
  storageId
}: NoteListProps) => {
  return (
    <StyledContainer>
      <Toolbar>
        <ToolbarIconButton path={mdiSquareEditOutline} onClick={createNote} />
      </Toolbar>
      <ul>
        {notes.map(note => {
          const noteIsCurrentNote = note._id === currentNoteId
          return (
            <li key={note._id}>
              <NoteItem
                active={noteIsCurrentNote}
                note={note}
                storageId={storageId}
              />
            </li>
          )
        })}
      </ul>
      {notes.length === 0 && <p>No notes</p>}
    </StyledContainer>
  )
}

export default NoteList
