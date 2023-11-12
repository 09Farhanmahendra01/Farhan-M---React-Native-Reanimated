import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// List screen
import ButtonToggle from './Daftar_materi/Materi_1/buttonToggle';
import ButtonToggleEventHandler from './Daftar_materi/Materi_1/buttonToggleEventHandler';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Materi 1.1 */}
      <ButtonToggleEventHandler />
      {/* <ButtonToggle /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
