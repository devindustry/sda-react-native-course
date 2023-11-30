import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Counter from "./views/counter/Counter";
import Todos from "./views/todos/Todos";
import TodoDetails from "./views/todoDetails/TodoDetails";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

const iconsNormal = {
    'Todos': 'ios-list',
    'Counter': 'ios-timer'
}
export default function App() {
  return (
    <NavigationContainer>
        {/*<Tab.Navigator screenOptions={({ route}) => {*/}
        {/*    return ({*/}
        {/*        headerShown: false,*/}
        {/*        tabBarIcon: ({color, size}) => {*/}
        {/*            const iconName = iconsNormal[route.name];*/}
        {/*            return (<Ionicons name={iconName} color={color} size={size} />)*/}

        {/*        }*/}
        {/*    })*/}
        {/*}}>*/}
        {/*    <Tab.Screen name="Todos" component={TodoNavigator} />*/}
        {/*    <Tab.Screen name="CounterContainer" component={CounterNavigator} />*/}
        {/*</Tab.Navigator>*/}
        <Drawer.Navigator initialRouteName="Todos">
            <Drawer.Screen name="Todos" component={TodoNavigator} />
            <Drawer.Screen name="Counter" component={Counter} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}


