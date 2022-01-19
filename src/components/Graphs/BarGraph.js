import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';

import {Colors, Metrix} from '../../config';

const data = [
  {monthDay: 1, Hours: 8},
  {monthDay: 2, Hours: 8},
  {monthDay: 3, Hours: 8},
  {monthDay: 4, Hours: 0},
  {monthDay: 10, Hours: 6},
  {monthDay: 8, Hours: 8},
  {monthDay: 24, Hours: 8},
];
const BarGraph = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{transform: [{rotate: '-90deg'}], marginLeft: 20}}>Hours</Text>
        <VictoryChart
          maxDomain={{x: 30, y: 12}}
          width={Metrix.HorizontalSize(350)}
          theme={VictoryTheme.material}>
          <VictoryBar
            barWidth={5}
            data={data}
            x="monthDay"
            y="Hours"
            animate={{
              duration: 2000,
              onLoad: {duration: 1000},
            }}
            cornerRadius={{topLeft: 5, topRight: 5}}
            style={{data: {fill: Colors.Major}}}
          />
        </VictoryChart>
        
      </View>
      <View style={styles.label}>
        <Text> Month Days </Text>

      </View>
          </>
  );
};

export default BarGraph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.Transparent,
  },
  label: {
    marginTop: -10,
    justifyContent:"center",
    alignItems:'center'
  }
});
