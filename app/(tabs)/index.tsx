import {SafeAreaView, View} from 'react-native';
import {ListItem, VStack, Text} from '@react-native-material/core';
import {NewNoteButton} from '../../components/NewNoteButton';


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
    return (
        <SafeAreaView>
            <View>
                <Text variant="h6" style={{margin: 20}}>Notes Test App</Text>
                <NewNoteButton onPress={onNewNoteStart}/>
                <VStack>
                    <>
                        {FAKE_DATA.map((item) => <ListItem key={item.id} title={item.note}/>)}
                    </>
                </VStack>
            </View>
        </SafeAreaView>
    );
}

