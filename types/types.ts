export type Note = {
    id: number,
    note: string,
    categoryId: number,
    clientId: number,
}

export type NewNote = Omit<Note, 'id'>;


export type Client = { id: number, name: string };
export type Category = { id: number, name: string };

export type AppData = {
    clients: Client[];
    categories: Category[];
}