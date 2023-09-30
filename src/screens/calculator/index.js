import React, { useState } from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import { style } from "./style";
import Button from "../../components/buttons";
import colors from "../../constants/colors";

const Calculator = () => {
  StatusBar.setBackgroundColor(colors.primaryBg);
  StatusBar.setBarStyle("light-content")
  const buttons = [
    "C",
    "<=",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  const [input, setInput] = useState("0");
  const [calculate, setCalculate] = useState("0");
  const [show, setShow] = useState(false);
  const onClick = (item) => {
    switch (item) {
      case "C":
        setInput("0");
        setCalculate("0");
        setShow(false);
        break;
      case "<=":
        if (!show) {
          if (input.length !== 1) {
            setInput(input.slice(0, input.length - 1));
            setCalculate(calculate.slice(0, calculate.length - 1));
          } else {
            setInput("0");
            setCalculate("0");
          }
        }
        break;
      case "00":
        if (input !== "0" && !show) {
          setInput(input + item);
          setCalculate(calculate + item);
        }
        break;
      case ".":
        if (!show) {
          setInput(input+item);
          setCalculate(calculate+item);
        }
        break;
      case "x":
        if (!show) {
          setInput(input + item);
          setCalculate(calculate + "*");
        }
        break;
      case "÷":
        if (!show) {
          setInput(input + item);
          setCalculate(calculate + "/");
        }
        break;
      case "%":
        if (!show) {
          setInput(input + item);
          setCalculate(calculate + "*(1/100)");
        }
        break;
      case "=":
        try {
          setCalculate(eval(calculate));
        } catch (error) {
          setCalculate("Error");
        }
        setShow(true);
        break;
      default:
        if (input === "0" || show) {
          if (show) {
            setShow(false);
          }
          setInput(item);
          setCalculate(item);
        } else {
          setInput(input + item);
          setCalculate(calculate + item);
        }
        break;
    }
  };
  return (
    <View style={style.container}>
      <View style={style.topPart}>
        <View style={style.display}>
          <Text style={show ? style.afterResultText : style.inputText}>
            {input}
          </Text>
          {show && <Text style={style.inputText}>= {calculate}</Text>}
        </View>
      </View>
      <View style={style.bottomPart}>
        <FlatList
          data={buttons}
          numColumns={4}
          columnWrapperStyle={{ gap: 5 }}
          contentContainerStyle={{ gap: 5 }}
          renderItem={({ item, index }) => {
            let isDiff = index < 4 || index % 4 == 3;
            return (
              <Button
                key={index}
                text={item}
                color={isDiff ? colors.primaryBg : undefined}
                onClick={() => onClick(item)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Calculator;
