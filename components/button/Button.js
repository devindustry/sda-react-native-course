import { Button as ButtonNative } from 'react-native';
const Button = ({ title, handlePress}) => {
    return (
        <ButtonNative title={title} onPress={handlePress} />
    )
}

export default Button;