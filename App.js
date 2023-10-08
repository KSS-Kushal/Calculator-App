import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./src/screens/calculator";

export default function App() {
  return (
    <View style={style.mainContainer}>
      {/* <StatusBar style="auto" /> */}
      <View style={style.container}>
        <Calculator />
      </View>
    </View>
  ); 
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    // marginTop: 32,
  },
});
