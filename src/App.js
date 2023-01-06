import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { findIndex, filter, orderBy } from 'lodash';

import ItemList from './components/itemList';
import InputBox from './components/inputBox';

import PriorityModal from './components/priorityModal';
import SortModal from './components/sortModal';

import CircleIcon from './assets/svg/sort.svg'
import { storeItem, getItems } from './utils/helper';
import styles from './style';

const App = () => {
  const [keyCounter, setKeyCounter] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(1);
  const [todoItem, setTodoItem] = useState([]);
  const [showPrioModal, setShowPrioModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [sortItemsBy, setSortItemsBy] = useState('none');

  /**
   * This effect will run once only during component initialization.
   * This will get task items stored in local storage.
   */
  useEffect(() => {
    const getToDoItems = async () => {
      const items = await getItems();
      setTodoItem(items);
    };
    getToDoItems();
  }, []);

  /**
   * This effect will run everytime a key counter is incremented,
   * which is used to watch changes in task list when completing a task
   * and counts the number of completed tasks
   */
  useEffect(() => {
    const list = filter(todoItem, (item) => item.status == 1);
    setCompletedTasks(list.length);
  }, [keyCounter]);

  /**
   * This method is called when adding a new task. After adding, it checks if 
   * the sorting is set and calls the sorting method.
   * @param item required. Todo item to be added.
   */
  const handleAddTodo = (item) => {
    const todoList = todoItem;
    todoList.push(item);
    setTodoItem(todoList);
    if (sortItemsBy !== 'none') {
      handleSortItems(sortItemsBy);
      return;
    }
    storeItem(todoList);
    setKeyCounter(keyCounter + 1);
  }

  /**
   * This method is called when removing a task
   * @param item required. Todo item to be removed.
   */
  const handleRemoveItem = (item) => {
    const slots = [...todoItem];
    const ind = findIndex(slots, (it) => it.id === item.id);
    slots.splice(ind, 1);
    setTodoItem(slots);
    storeItem(slots);
    setKeyCounter(keyCounter + 1);
  }

  /**
   * This method is called when a task is completed. After completing, it checks if 
   * the sorting is set and calls the sorting method.
   * @param item required. Todo item to be completed.
   */
  const handleTaskCompleted = (item) => {
    const slots = [...todoItem];
    const ind = findIndex(slots, (it) => it.id === item.id);
    slots[ind].status = slots[ind].status == 1 ? 0 : 1;
    setTodoItem(slots);
    if (sortItemsBy !== 'none') {
      handleSortItems(sortItemsBy);
      return;
    }
    storeItem(sorted);
    setKeyCounter(keyCounter + 1);
  }

  /**
   * This method is called to show the priority selection modal.
   * Also saves the item that will be updated.
   * @param item required. Todo item to be updated.
   */
  const handleTogglePrio = (item) => {
    setSelectedTask(item);
    setShowPrioModal(true);
  }

  /**
   * This method is called to set priority of a task. After update, it checks if 
   * the sorting is set and calls the sorting method.
   * @param val required. Todo item to be updated.
   */
  const handleSetPriority = (val) => {
    const slots = [...todoItem];
    const ind = findIndex(slots, (it) => it.id === selectedTask.id);
    slots[ind].priority = val;
    setTodoItem(slots);
    setShowPrioModal(false);
    if (sortItemsBy !== 'none') {
      handleSortItems(sortItemsBy);
      return;
    }
    storeItem(slots);
    setKeyCounter(keyCounter + 1);
  }

  /**
   * This method is called to sort todo tasks by either task name or priority.
   * If none is slelected no sorting will occur and new items will be
   * automatically added at the bottom.
   * @param val required. Type of sorting.
   */
  const handleSortItems = (val) => {
    const slots = [...todoItem];
    let sorted = null;
    setShowSortModal(false);
    setSortItemsBy(val);
    if (val === 'name') sorted = orderBy(slots, 'item', 'asc');
    if (val === 'priority') sorted = orderBy(slots, 'priority', 'desc');
    if (val == 'none') return;
    setTodoItem(sorted);
    storeItem(sorted);
    setKeyCounter(keyCounter + 1);
  }

  /**
   * Used to show each item list component of all 
   * uncompleted tasks
   */
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

  /**
   * Used to show each item list component of all 
   * completed tasks
   */
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
  /**
     * Used for showing the the number of completed tasks
     * @returns completed tasks count as string and returns
     * an empty string if count is 0.
     */
  const countCompleted = () => {
    if (completedTasks === 0) return '';
    return `${completedTasks} / `;
  }

  return (
    <SafeAreaView>
      {/* Priority Modal for setting task prority */}
      <PriorityModal
        show={showPrioModal}
        closePriorityModal={() => setShowPrioModal(false)}
        setPriority={(val) => handleSetPriority(val)}
      />
      {/* Sort Modal for sorting tasks */}
      <SortModal
        show={showSortModal}
        closeSortModal={() => setShowSortModal(false)}
        setSortBy={(val) => handleSortItems(val)}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.todoTxt}>Todo List ({countCompleted()}{todoItem.length})</Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.inputView}>
              {/* InputBox component for adding tasks */}
              <InputBox addItems={handleAddTodo} />
              <TouchableOpacity onPress={() => setShowSortModal(true)}>
                <CircleIcon height={30} width={30} />
              </TouchableOpacity>
            </View>
            {listItems}
            <View style={styles.borderMargin} />
            {listItemsCompleted}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default App;