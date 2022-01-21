import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import { Colors, Metrix } from '../../config';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeHolder={props.text}
        onChangeText={props.handleChange}
        value={props.searchText}
      />
    </View>
  );
};

export default React.memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    padding: Metrix.HorizontalSize(10),
  },
});
