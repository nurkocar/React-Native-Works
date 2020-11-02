import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { FavoriteItem } from "../components"

const Favorites = (props) => {
    const favList = useSelector(state => state.favoriteList);
    const dispatch = useDispatch()

    const renderFav = ({item}) =>{
            return (
                <FavoriteItem
                    item={item}
                    onRemoveFavorite={() => dispatch({
                        type:  "REMOVE_FROM_FAVORİTE",
                        payload: { selectedRestaurant: item }
                    })}
                />
            )
        }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={favList}
                    renderItem={renderFav}
                    ListEmptyComponent={() => <Text>Nothing on fav..</Text>}
                />
            </View>
        </SafeAreaView>
    );
}

export { Favorites };

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 10,
        fontWeight: '200'
    }
})