import { View, Text, StyleSheet } from "react-native";

function NotesSummary({notes}) {
    const numberOfNotes = notes?.length || 0;

    return ( 
        <View style={styles.container}>
            <Text style={styles.num}>{numberOfNotes} notes</Text>  
        </View>
     );
}

export default NotesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 6,
        flexDirection: 'row',
    },
    num: {
        fontSize: 16,
        color: '#00aff0',
        fontWeight: 'medium',
    },

});