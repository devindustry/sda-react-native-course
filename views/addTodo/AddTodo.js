import {SafeAreaView, Text, Button, TextInput, View, ActivityIndicator} from "react-native";
import { useTodos } from "../../context/todo.contex";
import { useState, useEffect } from "react";
import PickerSelect from 'react-native-picker-select';
import {styles} from "../todoDetails/todoDetails.style";
import { StyledContainer } from "./AddTodo.style";

const API_USERS = 'https://jsonplaceholder.typicode.com/users/'


const AddTodo = () => {
    const { addTodo } = useTodos();
    const [title, setTitle] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    const fetchUserData = async () => {
        setIsError(false);
        setIsLoading(true);

        setTimeout(async () => {
            try {
                const response = await fetch(API_USERS);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        },2000);

    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleAddTodo = () => {
        addTodo({
            id: Date.now(),
            title: title,
            userId: user,
            completed: false
        });
        setTitle('')
    }

    if (isLoading) {
        return <View style={styles.containerLoader}><ActivityIndicator size="large" color="#0000ff"/></View>
    }
    if (isError) {
        return <Text>Error: łądowanie danych</Text>
    }

    const usersPicker = [];
    users.map(user => {
        usersPicker.push({
            label: user.name,
            value: user.id
        })
    });

    // Zadanie 5
    // Zainstaluj styled-components oraz utworz komponenty wizualne dla inputów, buttonów oraz widoków.
    // 
    return (
        <StyledContainer>
            <Text>Add Todo</Text>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Nazwa zadania"
            />
            <PickerSelect onValueChange={(value) => {setUser(value)}} items={usersPicker} />
            <Button title="Add todo" onPress={handleAddTodo} />
        </StyledContainer>
    )

}

export default AddTodo;