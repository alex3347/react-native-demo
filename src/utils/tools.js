
import React, { Component } from 'react';
import {
  Platform,
  PixelRatio,
  Dimensions
  } from 'react-native';

const android = Platform.OS === 'android';
const iOS = Platform.OS === 'ios';

module.exports = {
  // 判断平台，返回boolen
  android,
  iOS,
  /*最小线宽*/
  pixel: 1 / PixelRatio.get(),

  /*屏幕尺寸*/
  size: {
    width: Dimensions.get('window').width,//获取屏幕宽度
    height: Dimensions.get('window').height//获取屏幕高度
  },
};