import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as MailComposer from 'expo-mail-composer';

const Stack = createStackNavigator();

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);


  const handleAddTask = () => {
    if (task.trim() === '') {
      Alert.alert('Erreur', 'La tâche ne peut pas être vide');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: task.trim(),
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const handleCompleteTask = (id) => {
    const updatedTaskList = taskList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });

    setTaskList(updatedTaskList);
  };

  const handleDeleteTask = (id) => {
    const updatedTaskList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleClearCompletedTasks = () => {
    const updatedTaskList = taskList.filter((item) => !item.completed);
    setTaskList(updatedTaskList);
  };

  const handleEmailTasks = () => {
    const taskListString = taskList.map((item) => `${item.title}${item.completed ? ' (complété)' : ''}`).join('\n');
    MailComposer.composeAsync({
      recipients: ['ton-email@exemple.com'],
      subject: 'La forme Mounir ?',
      body: taskListString,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.task}>
        <TouchableOpacity onPress={() => handleCompleteTask(item.id)}>
          {item.completed ? (
            <Text style={[styles.taskText, styles.taskCompleted]}>{item.title}</Text>
          ) : (
            <Text style={styles.taskText}>{item.title}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <Text style={styles.deleteTask}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="To Do List">
          {() => (
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Add Task"
                value={task}
                onChangeText={(text) => setTask(text)}
              />
              <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
              <FlatList
                style={styles.list}
                data={taskList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
              <TouchableOpacity style={styles.clearButton} onPress={handleClearCompletedTasks}>
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emailButton} onPress={handleEmailTasks}>
                <Text style={styles.emailButtonText}>Email Tasks</Text>
              </TouchableOpacity>
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    width: '80%',
  },
  addButton: {
    backgroundColor: '#008080',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskText: {
    fontSize: 18,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  deleteTask: {
    color: '#e74c3c',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  clearButton: {
    backgroundColor: '#f1c40f',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

