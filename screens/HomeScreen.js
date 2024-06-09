import { View, StyleSheet, SafeAreaView } from "react-native";
import IconButton from "../UI/IconButton";
import NotesOutput from "../components/NotesOutput/NotesOutput";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { NotesContext } from "../components/context/NotesContext";


function HomeScreen() {
    const navigation = useNavigation();
    const notesCtx = useContext(NotesContext);

    return ( 
        <View style={styles.containerHome}>
            <NotesOutput notes={notesCtx.notes}  />
            <IconButton
                icon="add" 
                size={24} color='white' 
                onPress={() => {navigation.navigate('NewNote')}}
            />
        </View>
          

        
     );
}

export default HomeScreen;

const styles = StyleSheet.create({
    containerHome: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        
    },
})
