// screens/SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeToggleSwitch from '../components/ThemeToggleSwitch';
import { ThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <Text style={[styles.text, { color: themeStyles[theme].color }]}>
        Current theme: {theme.toUpperCase()}
      </Text>
      <ThemeToggleSwitch />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
