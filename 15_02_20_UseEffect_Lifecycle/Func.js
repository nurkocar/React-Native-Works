import React, { useEffect, useState } from 'react';
import {

  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  TextInput,
  StyleSheet,
  Dimensions

} from 'react-native';

const App = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [input, cleanInput] = useState('');

  const login = () => {
    Alert.alert('CLARUSWAY', `Email: ${email}, Pass: ${password}`);
  };

  // useEffect(() => {



  // }, [email,password])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ margin: 20, fontSize: 150 }}>🌏</Text>

        <View style={styles.input}>
          <TextInput
            // value={email}
            placeholder='E posta adresinizi giriniz..'
            onChangeText={(email) => setEmail(email)}

          />
        </View>

        <View style={styles.input}>
          <TextInput
            // value = {password}
            placeholder='Sifrenizi giriniz..'
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}

          />
        </View>

        <Button
          title='Giris Yap'
          onPress={() => {

            setEmail('');
            setPassword('');
            // login;
          }

        }
        />

      </View>
    </SafeAreaView>
  )
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.85

  }
})