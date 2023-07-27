import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'

export const GoalInput = (props) => {
    const [inputText, setInputText] = useState('')
    const inputHandler = (inputText) => {
        setInputText(inputText)
    }
    const addGoalHandler = () => {
        props.onAddGoal(inputText)
        setInputText('')
    }
    return <Modal visible={props.visible} animationType={'slide'}>
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={styles.image} />
            <TextInput style={styles.textInput} placeholder={'Your goals'} onChangeText={inputHandler}
                       value={inputText} />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title={'Add goal'} onPress={addGoalHandler} color={'#e498ed'} />
                </View>
                <View style={styles.button}>
                    <Button title={'Cancel'} onPress={props.onCancel} color={'#f31282'} />
                </View>
            </View>
        </View>
    </Modal>
}
export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
    },
    textInput: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',

    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
})