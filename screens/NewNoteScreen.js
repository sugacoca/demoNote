import { useContext, useLayoutEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "../UI/IconButton";
import { NotesContext } from "../components/context/NotesContext";

function NewNoteScreen({navigation}) {

    const notesCtx = useContext(NotesContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'New note',
        });
    }, [navigation]);

    function confirmHandler(){
        notesCtx.addNote({
            content: "Testing add handler",
            updateAt: new Date('2024-9-6'),
        });
        navigation.goBack();
    }

    return ( 
        <View >
            <IconButton icon='checkmark' size={24} color='white' onPress={confirmHandler} />
        </View>
    );
}

export default NewNoteScreen;