import React from 'react';
import {View, Text,Image,StyleSheet} from 'react-native';

const MyBox = () => {

    return(
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image 
                    style={styles.img}
                    source={require('../images/IT-fundamentals_1.png')} />
                    <Text style={styles.txt}>IT Framework</Text>
                </View>

                <View style={styles.box}>
                    <Image
                    style={styles.img} 
                    source={require('../images/aws-devops.png')} />
                    <Text style={styles.txt}>AWS DevOps</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.box}>
                    <Image 
                    style={styles.img}
                    source={require('../images/Fullstack.png')} />
                    <Text style={styles.txt}>Full Stack Development</Text>
                </View>

                <View style={styles.box}>
                    <Image 
                    style={styles.img}
                    source={require('../images/data-science_2-1.png')} />
                    <Text style={styles.txt}>Data Science</Text>
                </View>
            </View>
        </View>
    )

};

export default MyBox;

const styles=StyleSheet.create({
    outerContainer:{
        margin:20
    },
    container:{
        flexDirection:'row',
        marginTop:20

    },
    box:{
        flexDirection:'column',
        width:180,
        height:180,
        borderWidth:3,
        borderColor:'plum',
        borderRadius:5,
        margin:5,
        backgroundColor:'plum'
    },
    img:{
        width:150,
        height:150
    },
    txt:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:16
    }

})