import { SafeAreaView, Text, Button, TextInput } from "react-native";
import { useTodos } from "../../context/todo.contex";
import { useState } from "react";
// Zadanie 3: Utwórz formularz dodawania nowych todo, pole userId narazie niech będzie 1
const AddTodo = () => {
    const { addTodo } = useTodos();
    const [title, setTitle] = useState('');

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
            <Button title="Add todo" onPress={handleAddTodo} />
        </SafeAreaView>
    )

}

export default AddTodo;