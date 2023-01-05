import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { findIndex, filter } from 'lodash';

import ItemList from './components/itemList';
import InputBox from './components/inputBox';
import PriorityModal from './components/priorityModal';
import styles from './style';

const App = () => {
  const [keyCounter, setKeyCounter] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(1);
  const [todoItem, setTodoItem] = useState([]);
  const [showPrioModal, setShowPrioModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const list = filter(todoItem, (item) => item.status == 1);
    setCompletedTasks(list.length);
  }, [keyCounter]);

  const handleAddTodo = (item) => {
    const todoList = todoItem;
    todoList.push(item);
    setTodoItem(todoList);
    setKeyCounter(keyCounter + 1);
  }

  const handleRemoveItem = (item) => {
    const slots = [...todoItem];
    const ind = findIndex(slots, (it) => it.id === item.id);
    slots.splice(ind, 1);
    setTodoItem(slots);
    setKeyCounter(keyCounter + 1);
  }

  const handleTaskCompleted = (item) => {
    const slots = [...todoItem];
    const ind = findIndex(slots, (it) => it.id === item.id);
    slots[ind].status = slots[ind].status == 1 ? 0 : 1;
    setTodoItem(slots);
    setKeyCounter(keyCounter + 1);
  }

  const handleTogglePrio = (item) => {
    setSelectedTask(item);
    setShowPrioModal(true);
  }

  const handleSetPriority = (val) => {
    const slots = [...todoItem];
    const ind = findIndex(slots, (it) => it.id === selectedTask.id);
    slots[ind].priority = val;
    setTodoItem(slots);
    setKeyCounter(keyCounter + 1);
    setShowPrioModal(false);
  }

  const listItems = todoItem.map((item) => {
    if (item.status === 1) return;
    return (
      <ItemList
        data={item}
        key={item.id}
        removeItem={handleRemoveItem}
        taskComplete={handleTaskCompleted}
        togglePrioModal={() => handleTogglePrio(item)}
      />
    )
  });

  const listItemsCompleted = todoItem.map((item) => {
    if (item.status === 0) return;
    return (
      <ItemList
        data={item}
        key={item.id}
        removeItem={handleRemoveItem}
        taskComplete={handleTaskCompleted}
        togglePrioModal={() => handleTogglePrio(item)}
      />
    )
  });

  const countCompleted = () => {
    if (completedTasks === 0) return '';
    return `${completedTasks} / `
  }

  return (
    <SafeAreaView>
      <PriorityModal
        show={showPrioModal}
        closePriorityModal={() => setShowPrioModal(false)}
        setPriority={(val) => handleSetPriority(val)}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.todoTxt}>Todo List ({countCompleted()}{todoItem.length})</Text>
          </View>
          <View style={styles.listContainer}>
            <InputBox addItems={handleAddTodo} />
            {listItems}
            {listItemsCompleted}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default App;