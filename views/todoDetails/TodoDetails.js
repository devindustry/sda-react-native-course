import { View, Text } from "react-native";
import {styles} from "./todoDetails.style";

const TodoDetails = ({route}) => {
    const {title} = route.params;

    return (
        <View style={styles.container}>
            <Text>
                {title}
            </Text>
        </View>
    )
}

export default TodoDetails;