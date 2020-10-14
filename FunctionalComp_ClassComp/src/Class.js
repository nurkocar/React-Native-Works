import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        console.log('Constructor done..')
    }

    // render ile normal fonksiyonun farkini gormek icin yaptik
    myFunction(){
        let myVariable = 10;

        myVariable++;

        console.log('My Function: ' + myVariable);
    }

    componentDidMount(){
        console.log('Component did mount done...')
    }

    render() {
        console.log('Render done...')
        return (
            <>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{ fontSize: 200 }}>{this.state.counter}</Text>

                    <Button
                        title = 'Up!'
                        onPress = {() => this.setState({
                            counter: this.state.counter + 1
                        })}
                    />
                    <Button
                        title = 'Down!'
                        onPress = {() => this.setState({
                            counter: this.state.counter - 1
                        })}
                    />
                    <Button
                        title = 'Reset!'
                        onPress = {() => this.setState({
                            counter: 0
                        })}
                    />

                    <Button
                        title = 'Check console for normal function!'
                        onPress = {() => this.myFunction}
                    />
                </View>
            </>
        )
    }
}

export default App;