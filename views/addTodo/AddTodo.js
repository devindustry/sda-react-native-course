import {SafeAreaView,  TextInput, View, ActivityIndicator} from "react-native";
import { useTodos } from "../../context/todo.contex";
import { useState, useEffect } from "react";
import PickerSelect from 'react-native-picker-select';
import {styles} from "../todoDetails/todoDetails.style";
import { StyledContainer } from "./AddTodo.style";
import { Button, Box, Text, Heading, VStack, Input, Select, Center, FormControl, useToast } from 'native-base'

const API_USERS = 'https://jsonplaceholder.typicode.com/users/'


const AddTodo = () => {
    const { addTodo } = useTodos();
    const [title, setTitle] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);
    const toast = useToast();

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
        setTitle('');
        setUser(null);
        toast.show({
            description: 'Dodano nowe zadanie'
        })
    }

    if (isLoading) {
        return <View style={styles.containerLoader}><ActivityIndicator size="large" color="#0000ff"/></View>
    }
    if (isError) {
        return <Text>Error: łądowanie danych</Text>
    }


    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%">
                <Heading size="lg" fontWeight="600">
                    Add todo
                </Heading>
                <Text>
                    Dodaj nowe zadanie oraz przypisz odpowiednią osobe.
                </Text>
                <VStack space={3} mt={5}>
                    <FormControl>
                        <FormControl.Label>
                            Nazwa zadania do wykonania
                        </FormControl.Label>
                        <Input value={title} onChangeText={setTitle}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>
                            Użytkownik przypisany do zadania
                        </FormControl.Label>
                        <Select selectedValue={user} onValueChange={(value) => setUser(value)} placeholder="Wybierz">
                            {users.map(userItem => (
                                <Select.Item label={userItem.name} value={userItem.id} key={userItem.id} />
                            ))}
                        </Select>
                    </FormControl>
                    <Button onPress={handleAddTodo} size="lg">
                        Dodaj
                    </Button>
                </VStack>



            </Box>
        </Center>
    )

}

export default AddTodo;