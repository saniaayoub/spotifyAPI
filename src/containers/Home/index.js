import React, {Component} from 'react';
import {View, Text, ScrollView, ImageBackground, Image} from 'react-native';
import {connect} from 'react-redux';
import {Button, Header, IconComp} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, Images, Metrix} from '../../config';

const RenderItem = ({item}) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.bodyText}>{item.body}</Text>
    </View>
  );
};

class Home extends Component {
  unSubNavigationEvent = () => {};

  componentDidMount() {
    this.props.GetPosts();
    this.unSubNavigationEvent = this.props.navigation.addListener(
      'focus',
      () => {
        this.flatListRef?.scrollToOffset({animated: true, offset: 0});
      },
    );
  }

  componentWillUnmount() {
    this.unSubNavigationEvent();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={Images.background}
          resizeMode="cover"
          style={styles.background}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.Heading}> Empleado </Text>
            <IconComp></IconComp>
          </View>

          {/* Profile Image */}
          <View style={styles.innerView}>
            <Image
              source={Images.profile}
              resizeMode="cover"
              style={styles.image}></Image>
          </View>

          {/* Header Text */}
          <View style={styles.innerView}>
            <Text style={styles.Heading}> Muhammad Ahmed </Text>
            <Text> React Native Intern, Mobile Applications </Text>
            <Text> (For 9 Months) </Text>
          </View>

          {/* White Container */}
          <View style={styles.bottomContainer}>
            {/*Inner Blue Container  */}
            <View style={styles.empContainer}>
              <View style={styles.centerView}>
                <Text
                  style={[
                    styles.textWhite,
                    {fontSize: Metrix.FontLarge, fontWeight: 'bold'},
                  ]}>
                  {' '}
                  9105904{' '}
                </Text>
                <Text style={styles.textWhite}> Empleado Id </Text>
              </View>
              <View style={[styles.verticalLine]} />
              <View style={styles.centerView}>
                <Text
                  style={[
                    styles.textWhite,
                    {fontSize: Metrix.FontMedium, fontWeight: 'bold'},
                  ]}>
                  Working Policy{' '}
                </Text>
                <Text style={styles.textWhite}> March'21-new Policy </Text>
                <Text style={styles.textWhite}> 09:30 am - 06:00 pm </Text>
              </View>
            </View>

            {/* status */}
            <View style={styles.status}>
              <View style={styles.centerView}>
                <Text style={styles.textBlack}>Current Status</Text>
                <Text style={[styles.textBlack, {fontWeight: 'bold'}]}>
                  {' '}
                  Signed in{' '}
                </Text>
              </View>
              <View
                style={[styles.verticalLine, {backgroundColor: Colors.Black}]}
              />
              <View style={styles.centerView}>
                <Text style={[styles.textBlack]}>Working Status </Text>
                <Text style={[styles.textBlack, {fontWeight: 'bold'}]}>
                  {' '}
                  Duty Time{' '}
                </Text>
              </View>
              <View
                style={[styles.verticalLine, {backgroundColor: Colors.Black}]}
              />

              <View style={styles.centerView}>
                <Text style={[styles.textBlack, ,]}>Login Time</Text>
                <Text style={[styles.textBlack, {fontWeight: 'bold'}]}>
                  {' '}
                  09:42 am{' '}
                </Text>
              </View>
            </View>

            {/* Buttons */}
            <View style={[styles.status, styles.buttonView]}>
              <Button.Standard
                text={'Last 30 Days'}
                containerStyle={styles.button}
                textStyle={{ color: Colors.Text }}></Button.Standard>
              <Button.Standard
                text={'Signout'}
                containerStyle={[styles.button, {backgroundColor: 'yellow'}]}
                textStyle={{color: Colors.Text, fontSize: Metrix.FontMedium}}></Button.Standard>
            </View>

            {/* Attendance Graph */}
            <View>
              <View>
                <Text> Attendance </Text>
                
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.AppReducer.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    AddPost: payload => {
      dispatch(AppAction.AddPost(payload));
    },
    GetPosts: () => {
      dispatch(AppAction.GetPosts());
    },
    Logout: () => {
      dispatch(AppAction.Logout());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
