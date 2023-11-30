import { SafeAreaView, Text, Button, TextInput } from "react-native";
import { useTodos } from "../../context/todo.contex";
import { useState } from "react";
import PickerSelect from 'react-native-picker-select';

const AddTodo = () => {
    const { addTodo } = useTodos();
    const [title, setTitle] = useState('');

    // Zadanie 4
    // Pobranie danych o użytkownikach: https://jsonplaceholder.typicode.com/users
    // Dodać todo z odpowiednim uzytkownikiem
    
    const handleAddTodo = () => {
        addTodo({
            id: Date.now(),
            title: title,
            userId: 1,
            completed: false
        });
        setTitle('')
    }
    return (
        <SafeAreaView>
            <Text>Add Todo</Text>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Nazwa zadania"
            />
            <PickerSelect onValueChange={(value) => {console.log(value)}} items={[{label: 'User1', value: 'user1'}, {label: 'User2', value: 'user2'}]} />
            <Button title="Add todo" onPress={handleAddTodo} />
        </SafeAreaView>
    )

}

export default AddTodo;