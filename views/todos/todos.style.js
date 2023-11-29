import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainerProgress: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: 'yellow',
    },
    itemContainerDone: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: 'green',
    },
});