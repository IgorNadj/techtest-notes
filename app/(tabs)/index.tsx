import {SafeAreaView, View} from 'react-native';
import {ListItem, VStack, Text} from '@react-native-material/core';
import {NewNoteButton} from '@/components/NewNoteButton';
import {useState} from "react";
import {NewNoteDialog} from '@/components/NewNoteDialog';
import {NewNote} from "@/types/types";


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

const onSubmitNewNote = (note: NewNote) => {
    console.log('submitted', note);
}

export default function HomeScreen() {
    const [newNoteDialogVisible, setNewNoteDialogVisible] = useState(false);

    return (
        <SafeAreaView>
            <View>
                <Text variant="h6" style={{margin: 20}}>Notes Test App</Text>
                <NewNoteButton onPress={() => setNewNoteDialogVisible(true)}/>

                <VStack>
                    <>
                        {FAKE_DATA.map((item) => <ListItem key={item.id} title={item.note}/>)}
                    </>
                </VStack>

                <NewNoteDialog visible={newNoteDialogVisible} onDismiss={() => setNewNoteDialogVisible(false)}
                               onSubmit={(note: NewNote) => {
                                   onSubmitNewNote(note);
                                   setNewNoteDialogVisible(false)
                               }}/>
            </View>
        </SafeAreaView>
    );
}

