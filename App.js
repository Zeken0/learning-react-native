import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("Alert", "Are you sure", [
            { text: "Yes", onPress: () => console.log("Yes i am") },
            { text: "No", onPress: () => console.log("I am not") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
