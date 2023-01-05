import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  todoTxt: {
    fontSize: 18,
    fontWeight: '700',
  },
  listContainer: {
    marginHorizontal: 55,
    marginTop: 50,
  },
  inputView: {
    flexDirection: 'row',
  },
  borderMargin: {
    marginVertical: 10
  }
});

export default styles;