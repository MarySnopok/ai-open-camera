import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HomeScreenProps = {
  navigation: any;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const goToScanScreen = () => {
    navigation.navigate('ScanScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToScanScreen}>
        <Text style={styles.buttonText}>Scan Object</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});