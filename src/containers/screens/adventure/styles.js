import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  inputbackground: {
    flex: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: "10%",
    backgroundColor: colors.inputbackground
  },
  title: {
    alignSelf: "center",
    fontSize: fonts.bigbig
  },
  selected: {
    width: "50%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: colors.selected
  },
  unselected: {
    width: "50%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: colors.unselected
  }
});

export default styles;
