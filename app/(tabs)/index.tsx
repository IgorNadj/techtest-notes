import {SafeAreaView, View} from 'react-native';

import {NewNoteButton} from '@/components/NewNoteButton';
import {useState} from "react";
import {NewNoteDialog} from '@/components/NewNoteDialog';
import {NewNote} from "@/types/types";
import {PaperProvider} from "react-native-paper";
import {Text} from 'react-native-paper';
import {List} from 'react-native-paper';


const FAKE_DATA = [
    {id: 1, note: 'This is a note'},
    {id: 2, note: 'This is a note'},
    {id: 3, note: 'This is a note'},
    {id: 4, note: 'This is a note'},
    {id: 5, note: 'This is a note'},
    {id: 6, note: 'This is a note'},
]

const onNewNoteStart = () => {
    console.log('pressed');
}


export default function HomeScreen() {
    const [newNoteDialogVisible, setNewNoteDialogVisible] = useState(false);
    const [notes, setNotes] = useState(FAKE_DATA);

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
                    <NewNoteButton onPress={() => {
                        setNewNoteDialogVisible(true);
                        console.log('open modal');
                    }}/>


                    <>
                        {notes.map((item) => <List.Item key={item.id} title={item.note}/>)}
                    </>


                    <NewNoteDialog visible={newNoteDialogVisible} onDismiss={() => setNewNoteDialogVisible(false)}
                                   onSubmit={(note: NewNote) => {
                                       onSubmitNewNote(note);
                                       setNewNoteDialogVisible(false)
                                   }}/>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}

