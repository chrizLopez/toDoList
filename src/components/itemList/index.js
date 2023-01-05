import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import CircleIcon from '../../assets/svg/circle-outline.svg'
import TrashIcon from '../../assets/svg/close-circle.svg'
import CheckIcon from '../../assets/svg/checkmark.svg'
import styles from './style';

const ItemList = ({ data, removeItem, taskComplete, togglePrioModal }) => {
  let dataPrioColor = 'white';
  if (data.priority == 2) dataPrioColor = 'yellow';
  if (data.priority == 3) dataPrioColor = 'orange';
  if (data.priority == 4) dataPrioColor = 'red';
  return (
    <View style={styles.itemView}>
      <View style={styles.itemContent}>
        <TouchableOpacity onPress={() => taskComplete(data)}>
          {data.status === 1 ? (
            <CheckIcon height={25} width={25} />
          ) : (
            <CircleIcon height={25} width={25} />
          )}
        </TouchableOpacity>
        <Text style={[styles.todoTxt, data.status === 1 ? styles.completedTaskTxt : {}]}>{data.item}</Text>
      </View>
      <View style={styles.itemContent}>
        <TouchableOpacity onPress={togglePrioModal}>
          <View style={[styles.priorityBox, { backgroundColor: dataPrioColor }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(data)}>
          <TrashIcon height={20} width={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemList;