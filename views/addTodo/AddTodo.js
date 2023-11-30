import { SafeAreaView, Text, Button } from "react-native";
import { useTodos } from "../../context/todo.contex";

// Zadanie 3: Utwórz formularz dodawania nowych todo, pole userId narazie niech będzie 1
const AddTodo = () => {
    const { addTodo } = useTodos();

    const handleAddTodo = () => {
        addTodo({
            id: 'dsfgdfsg',
            title: 'Zrobić zakupy',
            userId: 1,
            completed: false
        })
    }
    return (
        <SafeAreaView>
            <Text>Add Todo</Text>
            <Button title="Add todo" onPress={handleAddTodo} />
        </SafeAreaView>
    )

}

export default AddTodo;