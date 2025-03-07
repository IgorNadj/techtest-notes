import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FAB, Box } from '@react-native-material/core';


type NewNoteButtonProps = {
    onPress: () => void;
}

export const NewNoteButton = ({onPress }: NewNoteButtonProps ) => 
        <Box style={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1000,
        }}>
            <FAB onPress={(e) => { onPress() }} color="primary" icon={props => <Icon name="plus" {...props} />} />
        </Box>    
    