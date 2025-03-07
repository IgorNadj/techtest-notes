import { ListItem, VStack, Text } from '@react-native-material/core';
import { SafeAreaView } from 'react-native';

const FAKE_DATA = [
  { id: 1, note: 'This is a note' },
  { id: 2, note: 'This is a note' },
  { id: 3, note: 'This is a note' },
  { id: 4, note: 'This is a note' },
  { id: 5, note: 'This is a note' },
  { id: 6, note: 'This is a note' }, 
]

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text variant="h6" style={{ margin: 20 }}>Notes Test App - Igor Nadj</Text>
      <VStack>
        <>
          {FAKE_DATA.map((item) => <ListItem key={item.id} title={item.note} />)}
        </>
      </VStack>
    </SafeAreaView>
  );
}

