import {useState} from "react";
import {NewNote} from "@/types/types";
import {Modal, Portal, Button, TextInput} from 'react-native-paper';


type NewNoteDialogProps = {
    visible: boolean;
    onSubmit: (note: NewNote) => void;
    onDismiss: () => void;
}

const containerStyle = {backgroundColor: 'white', padding: 20};

export const NewNoteDialog = ({visible, onSubmit, onDismiss}: NewNoteDialogProps) => {
    const [note, setNote] = useState('');

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
                    <TextInput multiline label="Note" value={note} onChangeText={setNote}/>
                    <Button style={{marginTop: 30}} onPress={() => {
                        onSubmit({note});
                        setNote('');
                    }}>
                        Save
                    </Button>
                </Modal>
            </Portal>
        </>
    );
}