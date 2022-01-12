import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrix, Images} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    // paddingBottom: Metrix.VerticalSize(70),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrix.HorizontalSize(30),
    paddingVertical: Metrix.VerticalSize(40),
  },
  Heading: {
    fontSize: Metrix.FontLarge,
    color: Colors.Major,
    fontWeight: 'bold',
    paddingTop: Metrix.VerticalSize(10),
  },
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderWidth: Metrix.HorizontalSize(3),
    borderRadius: 100 / 2,
    borderColor: Colors.Major,
    width: 100,
    height: 100,
  },
  bottomContainer: {
    borderTopLeftRadius: Metrix.VerticalSize(50),
    borderTopRightRadius: Metrix.VerticalSize(50),
    backgroundColor: Colors.White,
    marginTop: Metrix.VerticalSize(70),
  },
  empContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.Major,
    marginTop: -Metrix.VerticalSize(50),
    marginHorizontal: Metrix.HorizontalSize(30),
    // width: Metrix.HorizontalSize(300),
    height: Metrix.VerticalSize(150),
    borderRadius: Metrix.VerticalSize(50),
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: Colors.White,
  },
  textBlack: {
    color: Colors.Black
  },
  verticalLine: {
    width: 1,
    height: Metrix.VerticalSize(70),
    backgroundColor: Colors.White,
    //   marginHorizontal: Metrix.HorizontalSize(10)
  },
});

export default styles;
