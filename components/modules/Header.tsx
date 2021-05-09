import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Theme from '../../constants/theme'
interface IHeaderProps {
  title: string;
}
const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Theme.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});
