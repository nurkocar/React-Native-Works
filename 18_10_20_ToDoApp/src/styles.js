import {Dimensions, StyleSheet, Platform} from 'react-native';

// const color = '#ff9b31'

const main = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#303e45'
    },
    banner:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        
    },
    todoText:{
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ff9b31',
        // color, Boyle de yazilir.
    },
    todoCount:{
        fontSize: 25,
        color: '#ff9b31'
    },
    emptyComponent: {
        color: 'white',
        textAlign: 'center'
    }
})

const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor: '#e0e0e0',
        padding: Platform.OS == "ios" ? 15 : 5,
        margin: 10,
        borderRadius:10
    },
    container:{
        backgroundColor: '#a7b6bd',
        padding: 10,
        margin:10,
        borderRadius:5
    },
    buttonContainer:{
        backgroundColor: '#4a636e',
        padding: 10,
        margin: 10,
        width: Dimensions.get('window').width / 2.5,
        alignSelf: 'center',
        borderRadius: 8
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const todoCard = StyleSheet.create({
    container:{
        backgroundColor: '#a7b6bd',
        padding: 5,
        margin: 5,
        borderRadius: 7
    },
    text:{
        fontSize: 18
    }
})

export {main, todo_input, todoCard};