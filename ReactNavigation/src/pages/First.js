import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native';


const number = 15;

const First = (props) => {

    const [userName, setUserName] = useState('');

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 20 }}>First Page</Text>
                <Text style={{ fontSize: 20 }}>{number}</Text>
                <Text style={{ fontWeight: 'bold', margin: 5 }}>Girilen Deger: {userName}</Text>

                <View>
                    <TextInput
                        value={userName}
                        onChangeText={text => setUserName(text)}
                    />
                </View>

                <Button
                    title="Go!"
                    onPress={() => props.navigation.navigate('SecondPage', {
                        selectedValue: userName
                    })}
                />
            </View>
        </SafeAreaView>
    );
}

export default First;