import {useState} from "react";
import {Category, NewNote, Note} from "@/types/types";
import {Modal, Portal, Button, TextInput, RadioButton, Text} from 'react-native-paper';

import AppData from '../constants/app-data.json';
import {Label} from "@/components/Label";
import {ScrollView} from "react-native";
import {Picker} from "@react-native-picker/picker";

const [defaultCategory] = AppData.categories;
const [defaultClient] = AppData.clients;

type NewNoteDialogProps = {
    visible: boolean;
    onSubmit: (note: NewNote) => void;
    onDismiss: () => void;
    onDelete: (note: Note) => void;
    existingNote: Note | null;
}

const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};


export const NoteDialog = ({visible, onSubmit, onDismiss, onDelete, existingNote}: NewNoteDialogProps) => {
    const [noteText, setNoteText] = useState(existingNote ? existingNote.note : '');
    const [clientId, setClientId] = useState<number>(existingNote ? existingNote.clientId : defaultClient.id);
    const [categoryId, setCategoryId] = useState<number>(existingNote ? existingNote.categoryId : defaultCategory.id);

    const reset = () => {
        setNoteText('');
        setClientId(defaultClient.id);
        setCategoryId(defaultCategory.id);
    }

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
                    <ScrollView>
                        <Label label="Note"/>
                        <TextInput multiline value={noteText} onChangeText={setNoteText}/>

                        <Label label="Category"/>
                        <RadioButton.Group onValueChange={value => setCategoryId(parseInt(value, 10))}
                                           value={'' + categoryId}>
                            {AppData.categories.map((category: Category) => <RadioButton.Item key={category.id}
                                                                                              label={category.name}
                                                                                              value={'' + category.id}/>)}
                        </RadioButton.Group>

                        <Label label="Client"/>
                        <Picker
                            selectedValue={clientId}
                            onValueChange={(itemValue, itemIndex) =>
                                setClientId(itemValue)
                            }>
                            {AppData.clients.map((client) => <Picker.Item key={client.id} label={client.name}
                                                                          value={client.id}/>)}

                        </Picker>

                        <Button style={{}} onPress={() => {
                            onSubmit({note: noteText, categoryId, clientId});
                            reset();
                        }}>
                            Save
                        </Button>
                        {existingNote && (
                            <Button style={{}} onPress={() => {
                                onDelete(existingNote);
                                reset();
                            }}>
                                Delete
                            </Button>
                        )}

                    </ScrollView>
                </Modal>
            </Portal>
        </>
    );
}