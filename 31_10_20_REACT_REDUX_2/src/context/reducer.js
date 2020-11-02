export function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            const newList = [...state.favoriteList];
            if (newList.indexOf(action.payload.selectedRestaurant) > -1){
                newList
            }else{
                newList.push(action.payload.selectedRestaurant);
            }
            state.favoriteList = newList;
            return { ...state }

             //push methodu yeni olusan arrayin length ini doner. Dolayisiyla tek satirda push yapilan array 
            //birseye atanirsa arrayi kaybederiz, number olur return degeri. Eger state i neden direkt
            // donmuyoruz diyorsaniz baska yerde baska reducerlar ile state degistiriliyor olabilir. Bu da
            // application state ini bozar. Dolayisiyla state direkt degistirilmez, kopyasi alinir o degistirilir
            

            // return {
            //     ...state,
            //     favoriteList: [...state.favoriteList, action.payload.selectedRestaurant]
            // }
        case "REMOVE_FROM_FAVORİTE":
            const updateList = [...state.favoriteList]
            const index = updateList.indexOf(action.payload.selectedRestaurant);
            if (index > -1) {
                updateList.splice(index, 1)};
            state.favoriteList = updateList;
            return {...state}
        default:
            return state;
    }
}