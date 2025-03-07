export type Note = {
    id: number,
    note: string,
}

export type NewNote = Omit<Note, 'id'>;