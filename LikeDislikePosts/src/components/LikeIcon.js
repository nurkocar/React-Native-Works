import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const LikeIcon = (props) => {
    return(
        <TouchableOpacity>
            <Image
                style = {[styles.icon], {tintColor: props.data.isLiked ? 'red' : -1}}
                source = {require('../images/like.png')}
            
            />
        </TouchableOpacity>
    )
}

export default LikeIcon;

const styles = StyleSheet.create({
    icon:{
        width: Dimensions.get('window').width / 12,
        height: Dimensions.get('window').height / 13,
        borderColor:'black',
        borderWidth: 2,
        resizeMode: 'contain',
    }
})
