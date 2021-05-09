import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Theme from "@constant/theme";
import Input from "@element/Input";
import Card from "@module/Card";
const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const enteredNumberHandler = (value: string) => {
    setEnteredNumber(value.replace(/[^0-9]/g, ""));
  };
  
  const resetHandler = () => {
    setEnteredNumber("");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.textScreen}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>

          <Input
            blurOnSubmit
            keyboard="number-pad"
            style={styles.input}
            value={enteredNumber}
            onChangeText={enteredNumberHandler}
            maxLength={2}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={Theme.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={Theme.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",

    padding: 10,
  },
  textScreen: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "40%",
  },
  input: {
    textAlign: "center",
    minWidth: 80,
  },
});
