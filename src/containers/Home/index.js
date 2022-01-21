import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, Images, Metrix, NavigationService} from '../../config';
import {Header, SearchBar} from '../../components';

const Home = props => {
  const [searchText, setSearchText] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [offset, setOffset] = useState(0);

  const handleChange = newText => { 
    setSearchText(newText);
  };
  return (
    <View style={styles.container}>
      <Header.Standard
        leftIconName={'user'}
        onPressLeft={props.Logout}
        Heading={'Music'}
      />
      <View>
        <SearchBar
          text={'Search'}
          handleChange={handleChange}
          searchText={searchText}
        />
      </View>
    </View>
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
