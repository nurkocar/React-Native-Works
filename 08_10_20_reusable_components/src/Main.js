import React from 'react';
import {
    SafeAreaView,
    View,
    Text
} from 'react-native';

import MyBanner from './components/MyBanner';
import MyButton from './components/MyButton';

const food_data = [
    {
      id: 0,
      title: 'Çorbalar',
      desc: 'Birbirinden leziz çorbalar!',
      color: '#e57373',
      isActive: false,
    },
    {
      id: 1,
      title: 'Ara Sıcaklar',
      desc: 'Lezzetlei aparetifler',
      color: '#81d4fa',
      isActive: true,
    },
    {
      id: 2,
      title: 'Ana Yemekler',
      desc: 'Doyurucu lezzetler',
      color: '#ffd54f',
      isActive: false,
    },
    {
      id: 3,
      title: 'Alkolsüz İçecekler',
      desc: 'Buz gibi serinletici lezzetler',
      color: '#cfd8dc',
      isActive: false,
    },
    {
        id: 4,
        title: 'Tatlilar',
        desc: 'Damaginizi lezzetlendirecek tatlilar',
        color: '#c5e1a5',
        isActive: true,
      },
  ];

const App = () => {
    return(
        <SafeAreaView style = {{flex:1}}>
            <View>

                {food_data.map((food) => {
                    return (
                        <MyBanner 
                            title={food.title}
                            desc = {food.desc}
                            color = {food.color}
                            isActive = {food.isActive}
                        />
                    )
                })}

                <MyButton buttonTitle = 'Yenile' />

            </View>
        </SafeAreaView>
    )
};

export default App;