import { StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";
import { Metrix, Colors } from "../../config";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.White,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
       
        width: "100%",
        height: "100%",
    },
    logoContainer: {
        margin: Metrix.VerticalSize(10),
        backgroundColor: Colors.Primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        color: Colors.Secondary,
        fontSize: Metrix.FontLarge,
    }
})

export default styles