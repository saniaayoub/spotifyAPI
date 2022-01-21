import React, { Component } from 'react';
import { useEffect, useRef } from 'react';
import {View, Text,  Image, Animated,Dimensions} from 'react-native';
import { useDispatch , useSelector} from 'react-redux';
import {Animations, NavigationService} from '../../config';
import { AppAction } from '../../store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import styles from './styles';

const Splash = () => {
  
  const isLoaded = useSelector((state) => state.AppReducer.Loader);
  const dispatch = useDispatch();
  
  useEffect(() => {
   // this.animation.play(); 
    this.animation.play();
   checkUser();
  }, [])

  const checkUser = () => {
    setTimeout(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user) {
          const parsedData = JSON.parse(user);
          dispatch(AppAction.SignInSuccess(parsedData));
          NavigationService.replace('Home');
        } else {
          NavigationService.replace('SignIn');
        }
      });
    }, 5000);
  };

  return (
  <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={Animations.splashAnimation}
      />
  )
}

export default React.memo(Splash);



