import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Counter from "./views/counter/Counter";
import Todos from "./views/todos/Todos";
import TodoDetails from "./views/todoDetails/TodoDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="TodoDetails" component={TodoDetails} />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


