import { useState } from 'react';
import { View} from "react-native";
import { styles } from "./counter.style";
import Button from "../../components/button/Button";
import Text from '../../components/text/Text';
import Input from '../../components/input/Input';

const INITIAL_COUNTER = 0;
const Counter = () => {
    const [counter, setCounter] = useState(INITIAL_COUNTER);

    const handleIncrementCounter = () => setCounter(counter + 1);
    const handleDecrementCounter = () => setCounter(counter - 1);
    const handleResetCounter = () => setCounter(INITIAL_COUNTER);
    const handleInputChange = (value) => {
        const numberValue = parseInt(value, 10);

        if(!isNaN(numberValue)) {
            return setCounter(numberValue)
        }

        return setCounter(counter);
    }

    return (
        <View style={styles.container}>
            <Text extraStyle={styles.counterText}>Licznik: {counter}</Text>
            <Button title="Zwiększ" handlePress={handleIncrementCounter}/>
            <Button title="Zmniejsz" handlePress={handleDecrementCounter}/>
            <Button title="Reset" handlePress={handleResetCounter}/>
            <Input value={counter} onValueChange={handleInputChange} extraStyle={styles.counterInput}/>
        </View>
    );
}

export default Counter;