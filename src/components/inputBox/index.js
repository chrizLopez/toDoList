import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import CircleIcon from '../../assets/svg/plus-circle.svg'
import { generateRandomId } from '../../utils/helper';
import styles from './style';

const InputBox = ({ addItems }) => {
  const [textValue, setTextValue] = useState('');

  const handleAddItem = () => {
    const data = {
      item: textValue,
      priority: 1,
      id: generateRandomId(),
      status: 0,
    }
    addItems(data);
    setTextValue('');
  }

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        onChangeText={setTextValue}
        value={textValue}
        onSubmitEditing={handleAddItem}
        autoFocus={true}
      />
      <TouchableOpacity disabled={textValue.length < 2} onPress={handleAddItem}>
        <CircleIcon height={30} width={30} />
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;