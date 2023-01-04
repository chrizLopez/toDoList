import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import styles from './style';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.todoTxt}>Todo List</Text>
          </View>
          <View style={styles.listContainer}>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;