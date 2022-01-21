import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import NoticeComp from '../../components/AppComps/noticeComp';
import {Header} from '../../components';
import {Colors, Metrix, NavigationService} from '../../config';

const NoticeData = [
  {iconName: 'tasks', text: 'Tasks'},
  {iconName: 'bullhorn', text: 'Notices'},
  {iconName: 'file-invoice-dollar', text: 'Payroll'},
  {iconName: 'tablet-alt', text: 'Application Type'},
  {iconName: 'adjust', text: 'Adjustment Requests'},
  {iconName: 'id-card', text: 'Attendance'},
];

const Notice = props => {
  const [noticeData, setNoticeData] = useState(NoticeData);
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = ({item}) => (
    <NoticeComp
      iconName={item.iconName}
      text={item.text}
      color={Colors.Major}
    />
  );

  const handleRefresh = () => {
    setRefreshing(true);
    setNoticeData([
      ...noticeData,
      {iconName: 'adjust', text: 'Adjustment Requests'},
      {iconName: 'id-card', text: 'Attendance'},
    ]);
    setRefreshing(false);
  };

  return (
    <>
      <Header.Standard
        leftIconName={'chevron-left'}
        onPressLeft={NavigationService.goBack}
        Heading={'Noticess'}
      />

      <FlatList
        data={noticeData}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item.id ? item.id : index.toString())}
        refreshing={refreshing}
        onRefresh={() => handleRefresh()}
      />
    </>
  );
};

export default React.memo(Notice);

const styles = StyleSheet.create({
  columnView: {
    paddingTop: Metrix.VerticalSize(20),
    flexDirection: 'column',
    marginVertical: Metrix.VerticalSize(10),
  },
});
