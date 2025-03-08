import {SafeAreaView, ScrollView, View} from 'react-native';

import {NewNoteButton} from '@/components/NewNoteButton';
import {useState} from "react";
import {NewNoteDialog} from '@/components/NewNoteDialog';
import {NewNote, Note} from "@/types/types";
import {PaperProvider} from "react-native-paper";
import {Text} from 'react-native-paper';
import {List} from 'react-native-paper';
import {useLocalStorage} from "@/hooks/useLocalStorage";


export default function HomeScreen() {
    const [newNoteDialogVisible, setNewNoteDialogVisible] = useState(false);
    // const [notes, setNotes] = useState(FAKE_DATA);

    const {value: notes, setValue: setNotes, isLoading} = useLocalStorage<Note[]>('notes', []);

    const onSubmitNewNote = (newNote: NewNote) => {
        console.log('submitted', newNote);
        setNotes([...notes, {...newNote, id: notes.length + 1}]);
    }

    console.log('render');

    return (
        <PaperProvider>
            <SafeAreaView>
                <View>
                    <Text variant="headlineMedium" style={{margin: 20}}>Notes Test App</Text>


                    <ScrollView>
                        {notes.map((item) => <List.Item key={item.id} title={item.note}/>)}
                    </ScrollView>


                    <NewNoteDialog visible={newNoteDialogVisible} onDismiss={() => setNewNoteDialogVisible(false)}
                                   onSubmit={(note: NewNote) => {
                                       onSubmitNewNote(note);
                                       setNewNoteDialogVisible(false)
                                   }}/>

                    <NewNoteButton onPress={() => {
                        setNewNoteDialogVisible(true);
                        console.log('open modal');
                    }}/>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}

