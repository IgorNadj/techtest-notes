import {SafeAreaView, ScrollView, View} from 'react-native';

import {NewNoteButton} from '@/components/NewNoteButton';
import {useState} from "react";
import {NoteDialog} from '@/components/NoteDialog';
import {NewNote, Note} from "@/types/types";
import {PaperProvider} from "react-native-paper";
import {Text} from 'react-native-paper';
import {List} from 'react-native-paper';
import {useLocalStorage} from "@/hooks/useLocalStorage";
import {uuid} from "expo-modules-core";


export default function HomeScreen() {
    const [noteDialogVisible, setNoteDialogVisible] = useState(false);
    const [currentlyEditingNote, setCurrentlyEditingNote] = useState<Note | null>(null);

    const {value: notes, setValue: setNotes, isLoading} = useLocalStorage<Note[]>('notes', []);

    const onSubmitNewNote = (newNote: NewNote) => {
        console.log('submitted', newNote);
        const newId = uuid.v4();
        setNotes([...notes, {...newNote, id: newId}]);
    }

    const onDeleteNote = (note: Note) => {
        setNotes(notes.filter((n) => n.id !== note.id));
    }

    const openEditDialog = (note: Note) => {
        setCurrentlyEditingNote(note);
        setNoteDialogVisible(true);
    }

    return (
        <PaperProvider>
            <SafeAreaView>
                <View>
                    <Text variant="headlineMedium" style={{margin: 20}}>Notes Test App</Text>


                    <ScrollView>
                        {notes.map((item) => <List.Item key={item.id} title={item.note}
                                                        onPress={() => openEditDialog(item)}/>)}
                    </ScrollView>


                    <NoteDialog visible={noteDialogVisible}
                                onDismiss={() => setNoteDialogVisible(false)}
                                onSubmit={(note: NewNote) => {
                                    onSubmitNewNote(note);
                                    setNoteDialogVisible(false)
                                }}
                                onDelete={(note: Note) => {
                                    onDeleteNote(note);
                                    setCurrentlyEditingNote(null);
                                    setNoteDialogVisible(false);
                                }}
                                existingNote={currentlyEditingNote}
                                key={currentlyEditingNote?.id ?? null}
                    />

                    <NewNoteButton onPress={() => {
                        setCurrentlyEditingNote(null);
                        setNoteDialogVisible(true);
                        console.log('open modal');
                    }}/>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}

