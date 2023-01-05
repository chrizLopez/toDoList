import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import CircleIcon from '../../assets/svg/circle-outline.svg'
import TrashIcon from '../../assets/svg/close-circle.svg'
import CheckIcon from '../../assets/svg/checkmark.svg'
import styles from './style';

const PriorityModal = ({ show, closePriorityModal, setPriority }) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPress={closePriorityModal}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <View style={styles.mainWrap}>
                <View style={styles.viewTitle}>
                  <Text style={styles.mainTitle}>Select Priority</Text>
                </View>
                <View style={styles.prioItemContainer}>
                  <TouchableOpacity
                    style={styles.prioItem}
                    onPress={() => setPriority(4)}
                  >
                    <View style={[styles.priorityBox, { backgroundColor: 'red' }]} />
                    <Text>High</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.prioItem}
                    onPress={() => setPriority(3)}
                  >
                    <View style={[styles.priorityBox, { backgroundColor: 'orange' }]} />
                    <Text>Medium</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.prioItem}
                    onPress={() => setPriority(2)}
                  >
                    <View style={[styles.priorityBox, { backgroundColor: 'yellow' }]} />
                    <Text>Low</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.prioItem}
                    onPress={() => setPriority(1)}
                  >
                    <View style={[styles.priorityBox, { backgroundColor: 'white' }]} />
                    <Text>Normal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default PriorityModal;