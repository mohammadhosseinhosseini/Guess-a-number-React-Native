import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import Gamescreen from './screens/GameScreen'
import Startgamescreen from './screens/StartGameScreen'

export default function App() {
    const [userNumber, setUserNumber] = useState()

    function startGameHandler(selectedNumber) {
        setUserNumber(selectedNumber)
    }

    return (
        <View style={styles.screen}>
            <Header title='Home' />
            {userNumber ? (
                <Gamescreen useChoice={userNumber} />
            ) : (
                <Startgamescreen onStartGame={startGameHandler} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
})
