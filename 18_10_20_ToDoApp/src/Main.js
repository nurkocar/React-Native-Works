import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, KeyboardAvoidingView } from 'react-native';

import { main } from './styles';
import {TodoCard, ToDoInput} from './components';


const Main = () => {

    const [list, setList] = useState([]);

    function addToDo(text) {

        const element = {
            id: list.length,
            todo: text,
            isDone: false
        }

        const newArray = [element, ...list];
        setList(newArray);
        
    }

    function doneToDo(todoId){
        const newArray = [...list];
        const todoIndex = newArray.findIndex(item => item.id == todoId);

        newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

        setList(newArray);
    
    }

    function removeToDo(todoId){
        const newArray = [...list];
        const todoIndex = list.findIndex(t => t.id == todoId);

        newArray.splice(todoIndex, 1) 
        setList(newArray);      
    }

    const renderToDo = ({item}) => {
        return(
            <TodoCard 
                data={item}
                onDone = {() => doneToDo(item.id)}
                onRemove = {() => removeToDo(item.id)}
            />
        )}  
 
    return (
        <SafeAreaView style={main.container}>
            <View style={main.container}>
                <View style={main.banner}>
                    <Text style={main.todoText}>TO DO LIST</Text>
                    <Text style={main.todoCount}>{list.filter(t => t.isDone === false).length}</Text>
                </View>

                <FlatList
                    keyExtractor = {(item, index) => {index.toString()}}
                    data = {list}
                    renderItem = {renderToDo}
                    ListEmptyComponent={() => <Text style={main.emptyComponent}>Nothing to do..</Text>}
                />

                <ToDoInput
                    onToDoEnter={todoText => addToDo(todoText)}
                />
            </View>
        </SafeAreaView>
    )
}

export default Main;