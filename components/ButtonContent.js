import colors from "../utils/colors.json";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

// single selection item component

export const ButtonContent = (props) => {
  return (
    <View {...props} style={props.option ? styles.selected : styles.regular}>
      {props.pic}
      <Text style={styles.topography}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  regular: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors[0].lightgrey,
    backgroundColor: colors[0].lightgrey,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  selected: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors[0].earth,
    backgroundColor: colors[0].earth,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  topography: {
    color: colors[0].dark,
    fontSize: 10,
  },
});
