import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  button: {
    height: 78,
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  buttonText: {
    fontSize: 30,
    lineHeight: 40
  }
});

export default styles
