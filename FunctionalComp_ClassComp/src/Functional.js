import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';


const App = (props) => {

    const [counter, setCounter] = useState(0);
    const updateCounter = () => {setCounter(counter + 1)}

    return (
        <>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize: 200 }}>{counter}</Text>

                <Button
                    title='Up!'
                    onPress={updateCounter}
                />

                <Button 
                    title='Reset'
                    onPress={() => setCounter(0)}
                />
            </View>
        </>
    )

    
}

export default App;