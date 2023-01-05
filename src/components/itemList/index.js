import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import CircleIcon from '../../assets/svg/circle-outline.svg'
import TrashIcon from '../../assets/svg/close-circle.svg'
import CheckIcon from '../../assets/svg/checkmark.svg'
import styles from './style';

const ItemList = ({ data, removeItem, taskComplete }) => {
  return (
    <View style={styles.itemView}>
      <View style={styles.leftItem}>
        <TouchableOpacity onPress={() => taskComplete(data)}>
          {data.status === 1 ? (
            <CheckIcon height={25} width={25} />
          ) : (
            <CircleIcon height={25} width={25} />
          )}
        </TouchableOpacity>
        <Text style={[styles.todoTxt, data.status === 1 ? styles.completedTaskTxt : {}]}>{data.item}</Text>
      </View>
      <TouchableOpacity onPress={() => removeItem(data)}>
        <TrashIcon height={20} width={20} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemList;