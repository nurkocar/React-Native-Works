import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button
} from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        console.log('CONSTRUCTOR DONE');
    }

    componentDidMount(){
        console.log('COMPONENT DID MOUNT');
    }

    render() {

        console.log('RENDER DONE');

        return (
            <SafeAreaView>
                <View>
                    <Text style={{ fontSize: 40 }}>Count: {this.state.counter}</Text>
                    <Button
                        title='Up'
                        onPress={() => {
                            this.setState({counter : this.state.counter + 1})
                        }}

                    />
                </View>
            </SafeAreaView>
        )

    }
}

export default App;
