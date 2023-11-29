import { Text as TextNative } from "react-native";

const Text = ({children, extraStyle}) => {
    return (<TextNative style={{...extraStyle}}>{children}</TextNative>)
}

export default Text;