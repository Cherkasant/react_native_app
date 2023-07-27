import { Button, FlatList, StyleSheet, View } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function App() {
    const [listOfGoals, setListOfGoals] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const addGoalHandler = (inputText) => {
        setListOfGoals((listOfGoals) => [...listOfGoals, { text: inputText, id: Math.random().toString() }])
        setModalIsVisible(false)
    }
    const deleteGoalHandler = (id) => {
        setListOfGoals(listOfGoals => {
            return listOfGoals.filter(item => item.id !== id)
        })
    }
    const startAddGoalHandler = () => {
        setModalIsVisible(!modalIsVisible)
    }
    const endGoalHandler = () => {
        setModalIsVisible(false)
    }
    return (
        <>
            <StatusBar style={'light'} />
            <View style={styles.appContainer}>
                <Button title={'Add New Goal'} color={'#e498ed'} onPress={startAddGoalHandler} />
                <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endGoalHandler} />
                <View style={styles.goalsContainer}>
                    <FlatList data={listOfGoals} renderItem={itemData => {
                        return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler}
                                         id={itemData.item.id} />
                    }} alwaysBounceVertical={false}
                              keyExtractor={(item) => {
                                  return item.id
                              }} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 5,
    },
})
