import { View} from "react-native";
import { WebView } from 'react-native-webview';

const Career = () => {
    return (
        <View style={{flex: 1}}>
            <WebView
                source={{uri: 'https://www.accenture.com/pl-en/careers/jobsearch?jk=&sb=1&vw=0&is_rj=0&pg=7&ba=technology&jt=experienced'}}
                style={{flex: 1}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scalesPageToFit={true}
            />
        </View>
    )
}

export default Career;