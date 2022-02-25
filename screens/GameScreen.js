import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Card from '../components/Card'
import Numbercontainer from '../components/NumberContainer'

const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randNumber = Math.floor(Math.random() * (max - min) + min)

    if (randNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude)
    }
    return randNumber
}

const Gamescreen = (props) => {
    const { userChoice } = props

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumberBetween(1, 100, userChoice)
    )

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Numbercontainer>{currentGuess}</Numbercontainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={() => {}} />
                <Button title='HIGHER' onPress={() => {}} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
})

export default Gamescreen
