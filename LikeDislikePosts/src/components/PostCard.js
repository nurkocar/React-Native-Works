import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// {
//     "id": 4,
//     "userName": "NEWTON",
//     "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfc73392-beb8-4683-848d-8df54d8d99a0/d9qoe6t-abf01baf-d31c-4e1f-8b8a-df0a7328b2df.jpg/v1/fill/w_1024,h_1449,q_75,strp/sir_isaac_newton_on_wpap_by_andikoarya_d9qoe6t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGZjNzMzOTItYmViOC00NjgzLTg0OGQtOGRmNTRkOGQ5OWEwXC9kOXFvZTZ0LWFiZjAxYmFmLWQzMWMtNGUxZi04YjhhLWRmMGE3MzI4YjJkZi5qcGciLCJoZWlnaHQiOiI8PTE0NDkiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9kZmM3MzM5Mi1iZWI4LTQ2ODMtODQ4ZC04ZGY1NGQ4ZDk5YTBcL2FuZGlrb2FyeWEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.m0AFm8EI-uE2zGzrn-V7OzSmO6L5D7QvkYRU9iTncKg",
//     "description": "Ipsum commodo Lorem adipisicing duis dolor Lorem tempor enim laboris labore ullamco velit quis. Fugiat sit exercitation labore nulla adipisicing eiusmod Lorem do cillum mollit. Tempor elit duis ex tempor sint.",
//     "isLiked": false
// }

const PostCard = ({ post }) => {

    const [like, setLike] = useState(post.isLiked);

    return (

        <View style = {styles.container}>

            <Image
                style={styles.img}
                source={{uri:post.img }}
            />

            <View style={styles.iconContainer}>

                <Text style = {styles.name}>{post.userName}</Text>

                <TouchableOpacity
                    onPress={() => { like ? setLike(false) : setLike(true) }}
                >
                    <Image
                        source={require('../images/like.png')}
                        style={styles.icon}
                        tintColor={like ? 'red' : '#cfd8dc'}

                    />
                </TouchableOpacity>
            </View>

            <Text style = {styles.desc}>{post.description}</Text>

        </View>
    )
};

export default PostCard;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:5,
        paddingHorizontal:5,
        paddingVertical:5
    },
    img: {
        width: Dimensions.get('window').width * 0.92,
        height:Dimensions.get('window').height / 3.2,
        resizeMode: 'cover'
    },
    iconContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        margin:15
    },
    name:{
        fontWeight:'bold',
        fontSize: 20,
        textTransform:'uppercase'
    },
    icon: {
        width: 30,
        height: 30,
    },
    desc:{
        textAlign:'justify',
        fontFamily: 'Iowan Old Style',
        fontSize:18,
        padding:3
    }
});



