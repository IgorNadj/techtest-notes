import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';


type NewNoteButtonProps = {
    onPress: () => void;
}

export const NewNoteButton = ({onPress}: NewNoteButtonProps) =>

    <FAB onPress={(e) => {
        onPress()
    }} icon="plus" style={styles.fab}/>


const styles = StyleSheet.create({
    fab: {
        // position: 'absolute',
        // margin: 16,
        // right: 0,
        // bottom: 0,
    },
})