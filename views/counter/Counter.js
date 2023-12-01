import { useState, useEffect  } from 'react';
import { View} from "react-native";
import { styles } from "./counter.style";
import {StyledButton, StyledButtonText} from "../../components/button/Button";
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
            <StyledButton onPress={handleIncrementCounter} variant="red">
                <StyledButtonText>
                    Zwiększ
                </StyledButtonText>
            </StyledButton>

            <Input value={counter} onValueChange={handleInputChange} extraStyle={styles.counterInput}/>
        </View>
    );
}

export default Counter;