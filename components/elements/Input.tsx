import React from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TextInputProps
} from "react-native";

interface IInputProps extends TextInputProps{
  style?: StyleProp<TextStyle>;
  keyboard?: KeyboardTypeOptions;
}
const Input: React.FC<IInputProps> = ({
  style,
  keyboard = "default",
  ...props
}) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      keyboardType={keyboard}
    />
  );
};

export default Input;
interface IStyle {
  input: TextStyle;
}
const styles = StyleSheet.create<IStyle>({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
