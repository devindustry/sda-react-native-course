import {Text, ScrollView, View, Button, TouchableOpacity} from 'react-native';
import { styles } from "./todos.style";
import { useState, useEffect, useRef } from "react";
import { FlatList, ActivityIndicator, Animated } from "react-native";
import { GestureHandlerRootView, Swipeable, RectButton } from "react-native-gesture-handler";
import { useTodos } from "../../context/todo.contex";
import { StyledView, StyledTodoItemView, StyledContextMenuText } from "./todos.style";

const API_TODOS = 'https://jsonplaceholder.typicode.com/todos'

const TodoItem = ({item, handlePressDetailsButton}) => {
    const {title, id, completed} = item;
    const { markTodo } = useTodos();

    // Zadanie 1 - ostyluj liste elementów todo wykorzystując themeing styled components

    const swipeableRef = useRef(null);
    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View style={{transform: [{scale}]}}>
                <StyledView>
                    <StyledContextMenuText style={styles.swipeableText}>{completed ? 'PROGRESS' : 'DONE'}</StyledContextMenuText>
                </StyledView>
            </Animated.View>
        )
    };

    const handleSwipeableOpen = () => {
        markTodo(id);
        swipeableRef.current?.close();
    }
    return (
        <GestureHandlerRootView>
            <Swipeable ref={swipeableRef} renderRightActions={renderRightActions} onSwipeableWillOpen={handleSwipeableOpen}>
                <StyledTodoItemView done={completed}>
                    <TouchableOpacity onPress={() => handlePressDetailsButton(item)}>
                        <Text>{title}</Text>
                    </TouchableOpacity>

                </StyledTodoItemView>
            </Swipeable>
        </GestureHandlerRootView>

    );
}

const Todos = ({navigation}) => {
    const { todos, setTodos } = useTodos();
    const [ isLoading, setIsLoading ] = useState(false);
    const [isError, setIsError ] = useState(false);

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

    const handlePressDetailsButton = (item) => {
        navigation.navigate('TodoDetails', {item});
    }

    if (isLoading) {
        return <View style={styles.containerLoader}><ActivityIndicator size="large" color="#0000ff"/></View>
    }
    if (isError) {
        return <Text>Error: łądowanie danych</Text>
    }
    return (
        <StyledView>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem item={item} handlePressDetailsButton={handlePressDetailsButton} />}
                keyExtractor={item => item.id}

            />
        </StyledView>
    )
}

export default Todos;