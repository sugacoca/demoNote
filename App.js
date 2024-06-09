import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import LabelsScreen from './screens/LabelsScreen';
import FoldersScreen from './screens/FoldersScreen';
import TrashScreen from './screens/TrashScreen';
import EditNoteScreen from './screens/EditNoteScreen';
import NewNoteScreen from './screens/NewNoteScreen';
import { GlobalStyles } from './constants/colors';
import IconButton from './UI/IconButton';
import NotesContextProvider from './components/context/NotesContext';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {



  function NoteOverview() {
    return (
      <>
        <Drawer.Navigator
          screenOptions={{
            headerTintColor: 'gray',
          }}>
          <Drawer.Screen
            name='Notes'
            component={HomeScreen}
            options={{
              title: 'Notes',
              drawerLabel: 'Home',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />

              ),
            }}
          />
          <Drawer.Screen name='Labels' component={LabelsScreen}
            options={{
              title: 'Labels',
              drawerLabel: 'Labels',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="document" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen name='Folders' component={FoldersScreen}
            options={{
              title: 'Folders',
              drawerLabel: 'Folders',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="folder" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen name='Trash' component={TrashScreen}
            options={{
              title: 'Trash',
              drawerLabel: 'Trash',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="trash" color={color} size={size} />
              ),
            }}
          />

        </Drawer.Navigator>

      </>
    );
  }

  return (
    <>
      <StatusBar style='auto' />
      <NotesContextProvider>
        <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen
              name='NoteOverView'
              component={NoteOverview}
              options={{ headerShown: false }}

            />
            <Stack.Screen name='NewNote' component={NewNoteScreen} />
            <Stack.Screen name='EditNote' component={EditNoteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesContextProvider>

    </>
  );
}






