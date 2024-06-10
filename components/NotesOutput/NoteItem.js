import { Pressable, View, Text, StyleSheet, TextBase, StatusBar, SafeAreaView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LABELS } from "../../data/dummy-data";
import { getFormattedDate } from "../../util/date";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";




function NoteItem({id, color, updateAt, isBookmarked, labelIds, content }) {

    const notesCtx = useContext(NotesContext);

    const route = useRoute();



    const getLabelContent = (labelId) => {
        const foundLabel = LABELS.find((label) => label.id === labelId);
        return foundLabel?.label || "";
    }

    const noteColorStyle = {
        borderRadius: 50,
        width: 15,
        height: 15,
        backgroundColor: color,
        marginHorizontal: 5,
        marginVertical: 3,
    }

    const navigation = useNavigation();


    function notePressHandler() {
        const currentScreen = route.name; // Access the current screen name
        if (currentScreen === "Notes") {
          navigation.navigate("EditNote"); // Navigate to EditNoteScreen
        } else if (currentScreen === "Trash") {
          // Display confirmation alert for restore or delete
          Alert.alert(
            "Note Action",
            "What do you want to do with this note?",
            [
              { text: "Cancel",  onPress: () => navigation.navigate("Trash"), style: "cancel" },
              { text: "Restore", style: "default", onPress: () => notesCtx.restoreNote({id}) },
              { text: "Delete Permanently",style: "destructive", onPress: () => notesCtx.deleteNote({id}) },
            ]
          );
        }
    }

    


    return (
            <Pressable onPress={notePressHandler} style={({pressed}) => pressed && styles.pressed}>
                <View style={styles.noteItem}>
                    <View style={styles.line}>
                        <View style={styles.lineColorDate}>
                            <Text style={noteColorStyle}></Text>
                            <Text style={styles.noteDate}>{getFormattedDate(updateAt)}</Text>
                        </View>
                        {isBookmarked && <Ionicons style={styles.bookMark} name="bookmark" color='black'  />}
                    </View>
                    <View style={styles.lineLabe}>
                        {labelIds && labelIds.map((labelId) => (
                            <Text style={styles.noteLabel} key={labelId}>{getLabelContent(labelId)}</Text>
                        ))}
                        
                    </View>
                    <Text style={styles.noteContent}>{content}</Text>
                </View>
            </Pressable>
    );
}

export default NoteItem;

const styles = StyleSheet.create({
    noteItem: {
        padding: 12,
        marginHorizontal: 8,
        marginVertical: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: 'gray',
        backgroundColor: 'white',
        width: '95%',
        height: 100,
    },
    noteDate: {
        color: 'gray',
        fontWeight: 'medium',
    },
    noteLabel: {
        color: 'gray',
        fontWeight: 'medium',
        backgroundColor: '#F5F5F5',
        marginRight: 5,
        padding: 3,
        borderRadius: 5,
    },
    noteContent: {
        color: 'gray',
        fontWeight: 'medium',
        padding: 3,
    },
    line: {
        flexDirection: 'row',
        
    },
    lineColorDate: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
    lineLabe: {
        flexDirection: 'row',
    },
    bookMark: {
        marginLeft: 250,
        marginVertical: 5,
    },
    pressed: {
        opacity: 0.75,
    },
});