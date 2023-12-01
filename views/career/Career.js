import { useRef, useState } from 'react';
import { View, SafeAreaView} from "react-native";
import { WebView } from 'react-native-webview';
import { Button } from "native-base";

// Zadanie 3a
// Utwórz podstronę draft menu: o nas, oraz zbuduj strukture html
const Career = () => {
    const [fontSize, setFontSize] = useState(20);

    const webViewRef = useRef(null);
    const templateString = `
        <div id="container">
            <h1>Tytuł</h1>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ligula molestie, maximus quam id, ultricies ante. Duis venenatis odio elit. Phasellus vestibulum consectetur purus cursus dignissim. In arcu metus, sodales nec nibh vel, vehicula tincidunt felis. Donec a neque a ligula placerat tempor. Integer consequat diam ipsum, sit amet iaculis diam fermentum sed. In condimentum enim eget ipsum tempus iaculis. Proin tristique vulputate risus in molestie. Fusce enim lacus, condimentum vitae ante sed, vehicula vestibulum ipsum. Aliquam efficitur dui sit amet dapibus euismod. Aenean et porta tellus, eu molestie libero.
            </article>
        </div>
    `;

    const increaseTextSize = (increase) => {
        setFontSize(increase ? fontSize + 10 : fontSize - 10);
        webViewRef.current.injectJavaScript(
            `
                document.body.style.fontSize = '${fontSize}px';
            `
        )
    }

    // Zadanie 5
    // Utwórz przyciski zwiększ oraz zmniejsz wpływające na wielkość webview

    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView
                ref={webViewRef}
                source={{html: templateString}}
                style={{flex: 1}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scalesPageToFit={true}
            />
            <Button onPress={() => {increaseTextSize(true)}}>
                Zwieksz
            </Button>
            <Button onPress={() => {increaseTextSize()}}>
                Zmniejsz
            </Button>
        </SafeAreaView>
    )
}

export default Career;