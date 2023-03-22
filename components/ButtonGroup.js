import React from "react";
import { View, StyleSheet } from "react-native";
import { SelectionButton } from "./SelectionButton";
import { categories } from "../utils/categories";

// mapping around hardcoded list of categories to show all selection options

export const ButtonGroup = () => {
  return (
    <View style={styles.selectionContainer}>
      {categories.map((category) => {
        return (
          <View key={category.id} style={styles.itemContainer}>
            <SelectionButton pic={category.pic}>{category.title}</SelectionButton>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  selectionContainer: {
    flexDirection: "row",
  },
  itemContainer: {
    flexWrap: "nowrap",
    padding: 8,
  },
});
