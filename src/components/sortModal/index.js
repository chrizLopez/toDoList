import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import styles from './style';

const SortModal = ({ show, closeSortModal, setSortBy }) => {
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
          onPress={closeSortModal}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <View style={styles.mainWrap}>
                <View style={styles.viewTitle}>
                  <Text style={styles.mainTitle}>Sort Items</Text>
                </View>
                <View style={styles.prioItemContainer}>
                  <TouchableOpacity
                    style={styles.prioItem}
                    onPress={() => setSortBy('name')}
                  >
                    <Text>Name</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.prioItem}
                    onPress={() => setSortBy('priority')}
                  >
                    <Text>Priority</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.prioItem}
                    onPress={() => setSortBy('none')}
                  >
                    <Text>None</Text>
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

export default SortModal;