import React from "react";
import { StyleSheet, Text, View, StyleProp, ViewStyle } from "react-native";

interface ICardProps {
  style: StyleProp<ViewStyle>;
}
const Card: React.FC<ICardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
