
import React, { Component } from 'react';
import {
  PixelRatio,
  Dimensions
  } from 'react-native';


module.exports = {
  /*最小线宽*/
  pixel: 1 / PixelRatio.get(),

  /*屏幕尺寸*/
  size: {
    width: Dimensions.get('window').width,//获取屏幕宽度
    height: Dimensions.get('window').height//获取屏幕高度
  },
};