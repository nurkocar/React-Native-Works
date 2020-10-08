import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBanner = (props) => {
    // Bir yolu fonksiyon ile yapmak
    // function checkActiveStatus(){
    //     if(props.isActive){
    //         return null
    //     }else{
    //         return <Text>Aktif Degil</Text>
    //     }
    // }

    return (
        <View style = {[styles.container, {backgroundColor:props.color}]}>
            <View style = {{flexDirection:'row', alignItems:'center'}}>

                <View style = {{flex:1}}>
                    <Text style = {styles.text}>{props.title}</Text>
                    <Text>{props.desc}</Text>
                </View>
                {/* Birinci yol  regular function*/}

                {/* {checkActiveStatus()} */}

                {/* Ikinci yol ternary yapisi */}
                {/* {props.isActive ? null : <Text>Aktif degil</Text>} */}

                {/* Ucuncu yol and operatoru ile */}

                {!props.isActive && <Text>Aktif degil</Text> }

            </View>
        </View>
    );
};

export default MyBanner;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#eceff1',
        margin:10,
        padding:10,
        borderRadius:5
    },
    text: {
        fontSize:20,
        fontWeight:'bold'
    },
});