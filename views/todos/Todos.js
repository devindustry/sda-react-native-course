import {Text, ScrollView, View} from 'react-native';
import { styles } from "./todos.style";
import { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Animated } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

const API_TODOS = 'https://jsonplaceholder.typicode.com/todos'

const TodoItem = ({id, title, status, handleMark}) => {
    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View style={{transform: [{scale}]}}>
                <Text>Done</Text>
            </Animated.View>
        )
    };
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions} onSwipeableRightOpen={handleMark}>
                <View style={status ? styles.itemContainerProgress : styles.itemContainerDone}>
                    <Text>{title}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>

    );
}

const Todos = () => {
    const [ todos, setTodos ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [isError, setIsError ] = useState(false);

    const handleMarkTodo = () => {
        console.log('mark')
    }
    const fetchTodos = async () => {
        setIsError(false);
        setIsLoading(true);

        setTimeout(async () => {
            try {
                const response = await fetch(API_TODOS);
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        },2000);

    }

    useEffect(() => {
        fetchTodos();
    }, []);

    if (isLoading) {
        return <View style={styles.containerLoader}><ActivityIndicator size="large" color="#0000ff"/></View>
    }
    if (isError) {
        return <Text>Error: łądowanie danych</Text>
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem title={item.title} status={item.completed} handleMark={handleMarkTodo}/>}
                keyExtractor={item => item.id}

            />
        </View>
    )
}

export default Todos;