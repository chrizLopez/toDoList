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
    marginLeft: 10,
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%'
  },
  rightItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedTaskTxt: {
    textDecorationLine: 'line-through',
  },
  priorityBox: {
    width: 30,
    height: 20,
    marginRight: 15,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default styles;