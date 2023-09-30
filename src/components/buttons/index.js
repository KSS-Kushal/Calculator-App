import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const Button = ({ text, color, onClick }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={[styles.buttonText, {color: color}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
