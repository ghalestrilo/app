import {
  StyleSheet
} from "react-native";
import {
  colors,
  fonts
} from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  buttonText: {
    fontSize: fonts.bigger,
    color: colors.buttonText
  },
  igorLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 125
  }
});

export default styles;
