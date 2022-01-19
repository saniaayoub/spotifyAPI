import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import NoticeComp from '../../components/AppComps/noticeComp';
import {Header} from '../../components';
import {Colors, Metrix, NavigationService} from '../../config';

const Notice = props => {
  const NoticeData = [
    { iconName: 'tasks', text: 'Tasks' },
{iconName:'bullhorn',text:'Notices'},
{iconName:'file-invoice-dollar', text:'Payroll'},
{iconName:'tablet-alt', text:'Application Type'},
{iconName:'adjust', text:'Adjustment Requests'},
{iconName:'adjust', text:'Adjustment Requests'},
{iconName:'id-card', text:'Attendance'},
  ]
  return (
    <>
      <Header.Standard
        leftIconName={'chevron-left'}
        onPressLeft={NavigationService.goBack}
        Heading={'Noticess'}
      />
      <ScrollView style={styles.columnView}>
        {NoticeData.map((elem, index) => {
          return (
            <NoticeComp iconName={elem.iconName} text={elem.text} color={Colors.Major} key={ index }/>
          );
        })}
        <Text>  </Text>
      </ScrollView>
    </>
  );
};

export default React.memo(Notice);

const styles = StyleSheet.create({
  columnView: {
    paddingTop: Metrix.VerticalSize(20),
    flexDirection: 'column',
    marginVertical: Metrix.VerticalSize(10)
  },
});
