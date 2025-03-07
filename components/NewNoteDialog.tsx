import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogHeader,
    Provider,
    Stack,
    Text,
    TextInput
} from "@react-native-material/core";
import {useState} from "react";
import {NewNote} from "@/types/types";


type NewNoteDialogProps = {
    visible: boolean;
    onSubmit: (note: NewNote) => void;
    onDismiss: () => void;
}

export const NewNoteDialog = ({visible, onSubmit, onDismiss}: NewNoteDialogProps) => {
    const [note, setNote] = useState('');

    return (
        <Provider>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <DialogHeader title="Add Note"/>
                <DialogContent>
                    <Stack>
                        <TextInput multiline label="Note" variant="standard" value={note} onChangeText={setNote}/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        title="Cancel"
                        compact
                        variant="text"
                        onPress={onDismiss}
                    />
                    <Button
                        title="Ok"
                        compact
                        variant="text"
                        onPress={() => {
                            onSubmit({note});
                            setNote('');
                        }}
                    />
                </DialogActions>
            </Dialog>
        </Provider>
    );
}