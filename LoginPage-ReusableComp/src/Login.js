import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform


} from 'react-native';

import { Input, Button } from './components'

const Login = () => {
    //Dimension i incelemek icin yapildi
    const dimension = Dimensions.get('window');
    console.log(dimension);

    return (
        <View style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'android' ? null : 'padding'}
            >
                <ScrollView style={{ flex: 1 }} bounces={false}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require('./assets/shopping.png')}
                            style={styles.logoStyle}
                        />

                        <Input holder='Eposta adresinizi giriniz..' />
                        <Input holder='Sifrenizi giriniz..'
                        secure = {true}
                        />

                        <Button text='Giris Yap' />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
};

export default Login;

const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.40
    }
});