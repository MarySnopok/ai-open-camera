import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ScanResultProps = {
  result: string;
};

export const ScanResultComponent: React.FC<ScanResultProps> = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});