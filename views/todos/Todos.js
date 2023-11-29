import {Text, ScrollView, View, Button} from 'react-native';
import { styles } from "./todos.style";
import { useState, useEffect, useRef } from "react";
import { FlatList, ActivityIndicator, Animated } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

const API_TODOS = 'https://jsonplaceholder.typicode.com/todos'

const TodoItem = ({id, title, status, handleMark}) => {
    const swipeableRef = useRef(null);
    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View style={{transform: [{scale}], backgroundColor: 'gray'}}>
                <Text style={styles.swipeableText}>{status ? 'PROGRESS' : 'DONE'}</Text>
            </Animated.View>
        )
    };

    const handleSwipeableOpen = () => {
        handleMark(id);
        swipeableRef.current?.close();
    }
    return (
        <GestureHandlerRootView>
            <Swipeable ref={swipeableRef} renderRightActions={renderRightActions} onSwipeableRightOpen={handleSwipeableOpen}>
                <View style={status ? styles.itemContainerDone : styles.itemContainerProgress}>
                    <Text>{title}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>

    );
}

const Todos = ({navigation}) => {
    const [ todos, setTodos ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [isError, setIsError ] = useState(false);

    const handleMarkTodo = (id) => {
        console.log('handle mark', id);
        setTodos(
            currentTodos =>
                currentTodos.map(todo => todo.id === id ? ({...todo, completed: !todo.completed}) : todo)
        );
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
        console.log(todos[0]);
    }, [todos])

    useEffect(() => {
        fetchTodos();
    }, []);

    const handlePressButton = () => {
        navigation.navigate('Counter', { initialValue: 15 });
    }

    if (isLoading) {
        return <View style={styles.containerLoader}><ActivityIndicator size="large" color="#0000ff"/></View>
    }
    if (isError) {
        return <Text>Error: łądowanie danych</Text>
    }
    return (
        <View style={styles.container}>
            <Button title="Counter" onPress={handlePressButton} />
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem title={item.title} status={item.completed} handleMark={handleMarkTodo} id={item.id}/>}
                keyExtractor={item => item.id}

            />
        </View>
    )
}

export default Todos;