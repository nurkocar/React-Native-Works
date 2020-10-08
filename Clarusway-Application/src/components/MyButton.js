import React from 'react';
import {View,Button,StyleSheet, Alert} from 'react-native';

const MyButton = () => {
    return(
        <View style={styles.fixToArea}>
            <Button
                title='      Sign In      '
                color='purple'
                onPress={()=>Alert.alert('Sign in button is clicked')} />
            <Button
                title='    Register    '
                color='purple'
                onPress={()=>Alert.alert('Register button is clicked')} />
        </View>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    fixToArea:{
        marginLeft:30,
        marginRight:30,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btn:{
        padding:5,
    }
})