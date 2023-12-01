import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Counter from "./views/counter/Counter";
import Todos from "./views/todos/Todos";
import TodoDetails from "./views/todoDetails/TodoDetails";
import AddTodo from "./views/addTodo/AddTodo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { TodoProvider } from "./context/todo.contex";
import { ThemeProvider} from "styled-components";
import { theme } from "./utils/style/theme";

AppRegistry.registerComponent(appName, () => App);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TodoNavigatorStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Todos List" component={Todos} />
      <Stack.Screen name="TodoDetails" component={TodoDetails} />
      {/*<Stack.Screen name="TodoDetails">*/}
      {/*    {(props) => <TodoDetails {...props} drawerNav={drawerNav}/>}*/}
      {/*</Stack.Screen>*/}
    </Stack.Navigator>
);

const TodoNavigatorTab = ({navigation}) => {

    return (
    <Tab.Navigator screenOptions={({ route}) => {
        return ({
            headerShown: false,
            tabBarIcon: ({color, size}) => {
                const iconName = iconsNormal[route.name];
                return (<Ionicons name={iconName} color={color} size={size} />)

            }
        })
    }}>
        <Tab.Screen name="Todo" component={TodoNavigatorStack} />
        <Tab.Screen name="AddTodo" component={AddTodo} />
    </Tab.Navigator>
)};


const iconsNormal = {
    'Todo': 'ios-list',
    'AddTodo': 'ios-add'
}
export default function App() {
  return (
      <ThemeProvider theme={theme}>
          <NavigationContainer>
              <TodoProvider>
                  <Drawer.Navigator initialRouteName="Counter" screenOptions={{ headerShown: false }}>
                      <Drawer.Screen name="Todos" component={TodoNavigatorTab} />
                      <Drawer.Screen name="Counter" component={Counter} />
                  </Drawer.Navigator>
              </TodoProvider>
          </NavigationContainer>
      </ThemeProvider>

  );
}


