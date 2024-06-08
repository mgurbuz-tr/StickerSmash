import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import HorizontalStepIndicator from './src/components/HorizontalStepIndicator';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <HorizontalStepIndicator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 16,
  },
  buttonContainer: {
    flexShrink: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selected: {
    backgroundColor: 'rgb(101, 121, 191)',
  },
  unSelected: {
    backgroundColor: 'rgba(101, 121, 191, 0.3)',
  },
  buttonLabel: {
    color: '#ffffff',
  },
});