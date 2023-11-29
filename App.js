import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Counter from "./views/counter/Counter";
import Todos from "./views/todos/Todos";
import TodoDetails from "./views/todoDetails/TodoDetails";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TodoNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Todos List" component={Todos} />
      <Stack.Screen name="TodoDetails" component={TodoDetails} />
    </Stack.Navigator>
);

const CounterNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Counter" component={Counter} />
    </Stack.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Todos" component={TodoNavigator} />
            <Tab.Screen name="Counter" component={CounterNavigator} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}


