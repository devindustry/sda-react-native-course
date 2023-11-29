import {Text, ScrollView, View} from 'react-native';
import { styles } from "./todos.style";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";

const API_TODOS = 'https://jsonplaceholder.typicode.com/todos'

const TodoItem = ({id, title, status}) => {
    return (
        <View style={status === 'in-progress' ? styles.itemContainerProgress : styles.itemContainerDone}>
            <Text>{title}</Text>
        </View>
    );

}
const Todos = () => {
    const [ todos, setTodos ] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await fetch(API_TODOS);
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error('Error fetching', error)
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem title={item.title} status={item.status}/>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Todos;