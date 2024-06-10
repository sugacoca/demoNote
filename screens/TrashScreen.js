import { View, Alert, StyleSheet, Text } from "react-native";
import NotesOutput from "../components/NotesOutput/NotesOutput";
import { useContext } from "react";
import { NotesContext } from "../components/context/NotesContext";
import Button from "../UI/Button";

function TrashScreen({ navigation }) { 

    const notesCtx = useContext(NotesContext);
  
    const restoreAllNotes = () => {
      Alert.alert(
        "Restore All Notes",
        "Are you sure you want to restore all notes from trash?",
        [
          { text: "Cancel", onPress: () => navigation.navigate('Trash'), style: "cancel" }, // Use navigation.goBack() for cancel
          { text: "Restore", onPress: () => notesCtx.restoreAllNotes() },
        ]
      );
    };
  
    const deleteAllNotes = () => {
      Alert.alert(
        "Delete All Notes Permanently",
        "This action cannot be undone. Are you sure you want to permanently delete all notes from trash?",
        [
          { text: "Cancel", onPress: () => navigation.navigate('Trash'), style: "cancel" },
          { text: "Delete", onPress: () => notesCtx.deleteAllNotes() },
        ]
      );
    };
  
    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button onPress={restoreAllNotes} children="Restore All" style={{margin: 4, backgroundColor: '#00CCFF', borderRadius: 6,}} />
          <Button onPress={deleteAllNotes} children="Delete All" style={{margin: 4,backgroundColor: '#FF0033', borderRadius: 6,}} />
        </View>
        <NotesOutput notes={notesCtx.trash}  />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: "row-reverse",
      padding: 10,
    },
    button: {
      padding: 10,
      backgroundColor: "#ccc",
      borderRadius: 5,
    },
  });
  
  export default TrashScreen;