import React from 'react';
import {View, Text, ScrollView, ImageBackground, Image} from 'react-native';
import {connect} from 'react-redux';
import {Button, IconComp} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, Images, Metrix} from '../../config';
import MonthPicker from 'react-native-month-year-picker';
import {useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'react-moment';
import BarGraph from '../../components/Graphs/BarGraph';
import Bluebox from '../../components/AppComps/bluebox';
import ScrnButtons from '../../components/AppComps/scrnButtons';


const Home = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );
  return (
    <ScrollView style={styles.container}>
      <View
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
              textStyle={{color: Colors.Text}}></Button.Standard>
            <Button.Standard
              text={'Signout'}
              containerStyle={[styles.button, {backgroundColor: 'yellow'}]}
              onPress={() => props.Logout()}
              textStyle={{
                color: Colors.Text,
                fontSize: Metrix.FontMedium,
              }}></Button.Standard>
          </View>

          {/* Attendance Graph */}
          <View style={styles.attendanceView}>
            <View
              style={[
                styles.status,
                {backgroundColor: Metrix.Transparent, paddingVertical: 0},
              ]}>
              <Text style={{fontWeight: 'bold', fontSize: Metrix.FontLarge}}>
                {' '}
                Attendance{' '}
              </Text>
              <View style={[styles.status, styles.datePicker]}>
                <Moment element={Text} format="MMMM - YYYY">
                  {date}
                </Moment>
                <Icon.Button
                  name="sort-down"
                  color={Colors.Black}
                  activeOpacity={Metrix.ActiveOpacity}
                  size={15}
                  backgroundColor={Colors.Transparent}
                  onPress={() => showPicker(true)}></Icon.Button>
                {show && (
                  <MonthPicker
                    onChange={onValueChange}
                    value={date}
                    maximumDate={new Date(2030, 10)}
                    minimumDate={new Date(2020, 5)}
                  />
                )}
              </View>
            </View>
            <BarGraph />
          </View>

          {/* Buttons */}
          <View style={[styles.status, {paddingVertical: 0}]}>
            <Button.Standard
              text={'Applications'}
              containerStyle={{
                backgroundColor: Colors.Grey,
                width: Metrix.HorizontalSize(110),
              }}
            />
            <Button.Standard
              text={'Time Adjustment'}
              containerStyle={{
                backgroundColor: Colors.Grey,
                width: Metrix.HorizontalSize(120),
                paddingHorizontal: Metrix.HorizontalSize(10),
              }}
            />
            <Button.Standard
              text={'View Details'}
              containerStyle={{
                backgroundColor: Colors.Grey,
                width: Metrix.HorizontalSize(110),
              }}
            />
          </View>

          {/* four box */}
          <View style={styles.columnView}>
            <View
              style={[
                styles.rowView,
                {marginBottom: Metrix.HorizontalSize(30)},
              ]}>
              <Bluebox count={51} text1={'Earned'} text2={'Hours'} />
              <View
                style={[styles.verticalLine, {backgroundColor: Colors.Black}]}
              />
              <View style={styles.rowView}>
                <Bluebox count={13} text1={'Total'} text2={'Absents'} />
              </View>
            </View>
            <View style={styles.rowView}>
              <View style={styles.rowView}>
                <Bluebox count={200} text1={'Allowed'} text2={'Late Min'} />
              </View>
              <View
                style={[styles.verticalLine, {backgroundColor: Colors.Black}]}
              />
              <View style={styles.rowView}>
                <Bluebox count={0} text1={'Used'} text2={'Late Min'} />
              </View>
            </View>
          </View>

          {/* Screen Navigation Buttons */}
          <View style={styles.columnView}>
            <ScrnButtons iconName={'tasks'} text={'Tasks'} color={Colors.Major}/>
            <ScrnButtons iconName={'bullhorn'} text={'Notices'} color={Colors.Major}/>
            <ScrnButtons iconName={'file-invoice-dollar'} text={'Payroll'} color={Colors.Major}/>
            <ScrnButtons iconName={'tablet-alt'} text={'Application Type'} color={Colors.Major}/>
            <ScrnButtons iconName={'adjust'} text={'Adjustment Requests'} color={Colors.Major}/>
            <ScrnButtons iconName={'id-card'} text={'Attendance'} color={Colors.Major}/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

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
