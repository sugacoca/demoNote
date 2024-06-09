import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

function NotesList({notes}) {
    function renderNotesItem(itemData){
        return <NoteItem {...itemData.item} />
        
    }
    
    return ( 
        <FlatList 
          data={notes} 
          renderItem={renderNotesItem} 
          keyExtractor={(item) => item.id} 
        />
     );
}

export default NotesList;