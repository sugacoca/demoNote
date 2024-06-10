import { View } from "react-native";
import NotesSummary from "./NotesSummary";
import NotesList from "./NotesList";



function NotesOutput({notes}) {


    return ( 
        <View >
            <NotesSummary notes={notes} />
            <NotesList notes={notes} /> 
            
        </View>
        
     );
}

export default NotesOutput;