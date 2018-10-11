import {
  StyleSheet
} from "react-native";
import {
  colors,
  fonts
} from "../../styles";

const styles = StyleSheet.create({
  buttonLayout:{
    height: 50,
    width: 175,
    margin: 30,
    backgroundColor: colors.greenButton,
    alignItems: 'center',
    justifyContent: "center",
},
  buttonText: {
    fontSize: fonts.bigger,
    color: colors.buttonText
  },
});

export default styles;
