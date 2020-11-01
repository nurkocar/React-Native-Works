import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, TouchableOpacity, Text, Button, TextInput, StyleSheet, Dimensions, Image } from 'react-native';

import { useDispatch } from 'react-redux';


const Login = (props) => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>

                <View style={styles.imgContainer} >
                    <Image
                        style={styles.img1}
                        source={{ uri: 'https://clarusway.com/wp-content/uploads/2019/12/cw_son.png' }}
                    />
                </View>

                <View style={styles.imgContainer} >
                    <Image
                        style={styles.img2}
                        source={{ uri: 'https://clarusway.com/wp-content/uploads/2020/09/WHY-choose-us-1.png' }}
                    />
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder='Enter username..'
                        onChangeText={value => setUserName(value)}
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            props.navigation.navigate('Welcome to Clarusway');
                            dispatch({
                                type: 'SET_USERNAME',
                                payload: {
                                    newUserName: userName
                                }
                            })
                        }}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export { Login };

const styles = StyleSheet.create({
    imgContainer: {
        marginTop: 30,
        marginHorizontal: 30,
        alignSelf: 'center',

    },
    img1: {
        // height: Dimensions.get('window').height / 10,
        // width: Dimensions.get('window').width,
        width: 350,
        height: 70
    },
    img2: {
        width: 350,
        height: 350
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        fontSize: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginVertical: 30,
        width: Dimensions.get('window').width / 1.4,
        paddingLeft: 10
    },
    btn: {
        backgroundColor: '#C6508A',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5
    },
    btnText: {
        fontSize: 18
    }


})