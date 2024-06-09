import { Pressable } from "react-native";
import { View, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';

function IconButton({icon, size, color, onPress}) {
    return ( 
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed} >
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color}  />
            </View>
        </Pressable>
     );
}

export default IconButton;


const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        right: 20,
        borderRadius: 50,
        padding: 8, 
        margin: 8,
        backgroundColor: '#33CCFF',
        borderRadius: 50,
    },
    pressed: {
        opacity: 0.75,
    },
})