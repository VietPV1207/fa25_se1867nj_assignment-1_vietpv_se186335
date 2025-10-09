import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const HomeScreen = ({ navigation }) => {
  const { theme, themeStyles } = useContext(ThemeContext); 

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeStyles[theme].backgroundColor },
      ]}
    >
      <Text style={[styles.text, { color: themeStyles[theme].color }]}>
        Welcome to the Profile App
      </Text>

      <View style={styles.buttonGroup}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
          color={theme === "dark" ? "#aaa" : "#007bff"}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  buttonGroup: {
    width: "80%",
  },
});
