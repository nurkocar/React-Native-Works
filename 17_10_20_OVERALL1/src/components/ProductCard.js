import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

// {
//     "id": 0,
//     "title": "Xiaomi Mi True Wireless Earbuds",
//     "imgURL": "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg",
//     "price": "₺134,77",
//     "inStock": true
// }

const ProductCard = ({product}) => {
    return(
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgURL }}
                style={styles.image}
            />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text>{product.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>{product.price}</Text>
            </View>
        </View>
    )
}


export {ProductCard}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    }
})