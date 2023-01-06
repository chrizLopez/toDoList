import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * This method will generate random number from time
 * @returns integer to be used as a unique ID
 */
export const generateRandomId = () => {
  const currentdate = new Date();
  const id = currentdate.getMonth() + ""
    + currentdate.getFullYear() + ""
    + currentdate.getHours() + ""
    + currentdate.getMinutes() + ""
    + currentdate.getSeconds();
  return id;
}

/**
 * This method will store task list to local storage
 * @param data Required. task list data to be stored
 */
export const storeItem = async (data) => {
  try {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('todoList', jsonValue)
  } catch (e) {
    console.log('store err', e)
  }
}

/**
 * This method will retrieve stored data from local storage
 * @returns task lists
 */
export const getItems = async () => {
  try {
    const value = await AsyncStorage.getItem('todoList');
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('get store err', e)
  }
}