import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Numbercontainer from '../components/NumberContainer'
import Colors from '../constants/Colors'

const Startgamescreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    function numberInputHandler(inputText) {
        setEnteredValue(inputText.replace(/[^0-9]]/g, ''))
    }

    function resetInputHandler() {
        setEnteredValue('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
            setConfirmed(false)
            Alert.alert(
                'Invalid number!',
                'Number has to be number between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ]
            )
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>The Game Screen</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title='Reset'
                                onPress={resetInputHandler}
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title='Confirm'
                                onPress={confirmInputHandler}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmed && (
                    <Card style={styles.summaryContainer}>
                        <Text>You selected </Text>
                        <Numbercontainer>{selectedNumber}</Numbercontainer>
                        <Button
                            title='Start Game'
                            onPress={() => props.onStartGame(selectedNumber)}
                        />
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 60,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 90,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
})

export default Startgamescreen
