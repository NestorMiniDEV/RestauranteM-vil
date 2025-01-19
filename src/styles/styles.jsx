import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ede7f6',
        paddingHorizontal: 10,
        alignContent: 'center'
    },

    buttonLayout: {
        paddingHorizontal: 100
    },

    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    lightContainer: {
        backgroundColor: '#716fff',
    },

    darkContainer: {
        backgroundColor: '#2a295b',

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    titleWhite: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    subTitle: {
        fontSize: 15,
    },

    subTitleWhite: {
        color: '#fff',
        fontSize: 15,
    },

    text: {
        marginVertical: 5,
    },

    textWhite: {
        color: '#fff',
        marginVertical: 5,
    },   

});
