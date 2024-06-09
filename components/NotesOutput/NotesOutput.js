import { View } from "react-native";
import NotesSummary from "./NotesSummary";
import NotesList from "./NotesList";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";


function NotesOutput({notes}) {


    return ( 
        <View >
            <NotesSummary notes={notes} />
            <NotesList notes={notes} /> 
            
        </View>
        
     );
}

export default NotesOutput;