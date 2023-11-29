import { TextInput } from 'react-native';

const Input = ({value, onValueChange, extraStyle}) => {
    return (
        <TextInput style={extraStyle} value={value.toString()} onChangeText={onValueChange} keyboardType="numeric" />
    )
}

export default Input;