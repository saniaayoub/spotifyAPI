import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Metrix, Colors} from '../../config';
const Bluebox = props => {
  return (
    <View style={styles.rowView}>
      <View style={styles.blueBox}>
        <Text style={styles.innerText}> {props.count} </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.outerText}> {props.text1} </Text>
        <Text style={styles.outerText}>{props.text2} </Text>
      </View>
    </View>
  );
};

export default Bluebox;

const styles = StyleSheet.create({
  columnView: {
    marginVertical: Metrix.VerticalSize(20),

    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  blueBox: {
    backgroundColor: Colors.Major,
    width: Metrix.HorizontalSize(80),
    height: Metrix.VerticalSize(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrix.Radius,
  },
  innerText: {
    color: Colors.White,
    fontSize: Metrix.FontLarge,
    fontWeight: 'bold',
  },
  outerText: {
    fontSize: Metrix.FontMedium,
  },
});
