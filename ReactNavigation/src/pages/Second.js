import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';


const Second = (props) => {

    const userValue = props.route.params.selectedValue

    const userNumber = props.route.params.myNumber;

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 40 }}>Second</Text>
                <Text style={{ fontSize: 40 }}>value: {userValue} {userNumber}</Text>
                <Button
                    title="Go back"
                    onPress={() => props.navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    );
}

export default Second;