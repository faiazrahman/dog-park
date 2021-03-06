import React from 'react';
import { StyleSheet, View, Text, StatusBar, Platform } from 'react-native';

export const TopBar = () => (
  <View style={styles.container}>
    <StatusBar />
  </View>
)

const styles = StyleSheet.create({
  container: {
    minHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  }
});
