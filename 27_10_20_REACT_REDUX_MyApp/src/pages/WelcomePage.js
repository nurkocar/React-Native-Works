import { Link } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Linking, Dimensions, ImageBackground } from 'react-native';

import { useSelector } from 'react-redux';

const WelcomePage = (props) => {

    const myUserName = useSelector(newUser => newUser.userName)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Hosgeldin {myUserName}!..</Text>
            </View>
            
            <Text style={styles.infoText}>Recently accessed courses</Text>
            
            <TouchableOpacity
                onPress = {() => Linking.openURL('https://reactnative.dev/docs/tutorial/')}
            >
                <ImageBackground
                    style={styles.img}
                    source={{ uri: 'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png' }}
                >
                    <Text style={styles.imgText}>React Native</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
                onPress = {() => Linking.openURL('https://www.w3schools.com/js/DEFAULT.asp')}
            >
                <ImageBackground
                    style={styles.img}
                    source={{ uri: 'https://www.tutorialrepublic.com/lib/images/javascript-illustration.png' }}
                >
                    <Text style={styles.imgText}>JavaScript</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
                onPress = {() => Linking.openURL('https://www.tutorialspoint.com/css/index.htm')}
            >
                <ImageBackground
                    style={styles.img}
                    source={{ uri: 'https://www.tutorialrepublic.com/lib/images/css-illustration.png' }}
                >
                    <Text style={styles.imgText}>CSS</Text>
                </ImageBackground>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export { WelcomePage };

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: '#eceff1'
    },
    welcomeText: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center'
    },
    infoText: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 13
    },
    img: {
        margin: 15,
        height: Dimensions.get('window').height / 5,
        width: 380,
        justifyContent: 'flex-end'
    },
    imgText: {
        backgroundColor: 'rgba(128,142,149,0.5)',
        color: 'white',
        fontSize: 18,
        borderRadius: 3,
        padding: 7,
    }
})