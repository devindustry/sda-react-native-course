import {Text, View} from 'react-native';
import { styles } from "./todos.style";
import { useState } from "react";
import { FlatList } from "react-native";

const TODOS_INIT = [
    {
        id: 1,
        title: 'Example title',
        status: 'done'
    },
    {
        id: 2,
        title: 'Example title',
        status: 'in-progress'
    },
    {
        id: 3,
        title: 'Example title',
        status: 'in-progress'
    },
]

// TODO: Dołożyć integracje z API
const TodoItem = ({id, title, status}) => {
    return (
        <View style={status === 'in-progress' ? styles.itemContainerProgress : styles.itemContainerDone}>
            <Text>{title}</Text>
        </View>
    );

}
const Todos = () => {
    const [ todos, setTodos ] = useState(TODOS_INIT);

    return (
        <View style={styles.container}>
            <FlatList data={todos} renderItem={({ item }) => <TodoItem title={item.title} status={item.status}/>} keyExtractor={item => item.id} />
        </View>
    )
}

export default Todos;