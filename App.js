import {StatusBar} from "expo-status-bar"
import { StyleSheet, View, Text, Image } from "react-native"

export default function App(){
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text>TEST</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center"
    }
})