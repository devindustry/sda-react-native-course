import {useEffect, useState} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {styles} from "./todoDetails.style";

const TodoDetails = ({route, drawerNav}) => {
    const [userData, setUserData] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [isError, setIsError ] = useState(false);
    const {item } = route.params;

    const API_USER = `https://jsonplaceholder.typicode.com/users/${item.userId}`

    useEffect(() => {
        drawerNav.setOptions({
            drawerLockMode: 'locked-closed'
        })
    });
    const fetchUserData = async () => {
        setIsError(false);
        setIsLoading(true);

        setTimeout(async () => {
            try {
                const response = await fetch(API_USER);
                const data = await response.json();
                setUserData(data);
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

    if (isLoading) {
        return <View style={styles.containerLoader}><ActivityIndicator size="large" color="#0000ff"/></View>
    }
    if (isError) {
        return <Text>Error: łądowanie danych</Text>
    }

    return (
        <View style={styles.container}>
            <Text>
                Task: {item.title}
            </Text>
            <Text>
                Author: {userData.name}
            </Text>
        </View>
    )
}

export default TodoDetails;