import {useState} from "react";
import {Category, NewNote} from "@/types/types";
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
}

const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};


export const NewNoteDialog = ({visible, onSubmit, onDismiss}: NewNoteDialogProps) => {
    const [note, setNote] = useState('');
    const [clientId, setClientId] = useState<number>(defaultClient.id);
    const [categoryId, setCategoryId] = useState<number>(defaultCategory.id);

    const reset = () => {
        setNote('');
        setClientId(defaultClient.id);
        setCategoryId(defaultCategory.id);
    }

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
                    <ScrollView>
                        <Label label="Note"/>
                        <TextInput multiline value={note} onChangeText={setNote}/>

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

                        <Button style={{marginTop: 30}} onPress={() => {
                            onSubmit({note, categoryId, clientId});
                            reset();
                        }}>
                            Save
                        </Button>
                    </ScrollView>
                </Modal>
            </Portal>
        </>
    );
}