// components/ThemeToggleSwitch.js
import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode</Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
        thumbColor={theme === 'dark' ? '#fff' : '#000'}
      />
    </View>
  );
};

export default ThemeToggleSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
});
