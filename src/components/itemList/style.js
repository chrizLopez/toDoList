import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  todoTxt: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 20,
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedTaskTxt: {
    textDecorationLine: 'line-through',
  }
});

export default styles;