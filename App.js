import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import Startgamescreen from './screens/StartGameScreen'

export default function App() {
    return (
        <View style={styles.screen}>
            <Header title='Home' />
            <Startgamescreen />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
})
