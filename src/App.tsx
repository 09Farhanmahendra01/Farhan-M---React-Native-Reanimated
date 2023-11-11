import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// List screen
import Materi_1_1 from './Daftar_materi/Materi_1/Materi_1.1';
import Login from './RNEUI/screen_login';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Materi 1.1 */}
      <Materi_1_1 />

      {/* RNEUI */}
      {/* <Login /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
