import AsyncStorage from '@react-native-async-storage/async-storage';

export const generateRandomId = () => {
  const currentdate = new Date();
  const id = currentdate.getMonth() + ""
    + currentdate.getFullYear() + ""
    + currentdate.getHours() + ""
    + currentdate.getMinutes() + ""
    + currentdate.getSeconds();
  return id;
}

export const storeItem = async (data) => {
  try {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('todoList', jsonValue)
  } catch (e) {
    console.log('store err', e)
  }
}

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