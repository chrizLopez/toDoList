import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#00000090'
  },
  modalView: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 100,
    left: 100,
    top: '40%',
    bottom: '40%',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  viewTitle: {
    alignItems: 'center',
    marginTop: 22,
  },
  mainWrap: {
    width: '100%',
    paddingHorizontal: 20,
  },
  prioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  priorityBox: {
    width: 30,
    height: 20,
    marginRight: 15,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  prioItemContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  }
});

export default styles;