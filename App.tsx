import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { ButtonGroup } from "./components/ButtonGroup";

// if I have more time I would refactor by taking out all scroll view logic to the separate component

export default function App() {
  return (
    <SafeAreaView style={styles.containerScroll}>
      {/* extra view to center the component and adjust it is heights */}
      <View style={styles.pageWrapper}>
        <ScrollView horizontal style={styles.scrollView}>
          <View style={styles.container}>
            <ButtonGroup />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerScroll: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  pageWrapper: {
    height: 90,
  },
});
