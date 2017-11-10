/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AsyncStorage,
} from 'react-native';

import Navigator from './src/pages/index/index';
import GuideScreen from './src/pages/guide/guide';
import SplashScreen from '@remobile/react-native-splashscreen';
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            firstOpen:true
        };
    }

    componentDidMount(){
        SplashScreen.hide();
        // AsyncStorage.removeItem('firstOpen')
        this.asyncAppStatus()
    }

//引导页隐藏
    changeOpenStatus(){
        let that = this
        AsyncStorage.setItem('firstOpen','false', function (error) {
            if (error) {
                console.log('存储失败')
            } else {
                that.setState(
                    {
                        firstOpen:false
                    }
                )
            }
        })
    }


//渲染引导页
    renderGuideScreen() {
        return (
            <GuideScreen changeOpenStatus={this.changeOpenStatus.bind(this)}/>
        );
    }

//渲染主页
    renderNavigator() {
        return (
            <Navigator/>
        );
    }


//判断是否是第一次打开app
    asyncAppStatus(){
        let that = this
        AsyncStorage.getItem('firstOpen',(error,result)=>{
            if (error){
                console.log('取值失败:'+error);
            }else{
                if(result == null){
                    console.log('key值不存在会取回null值');
                }else{
                    that.setState(
                        {
                            firstOpen:false
                        }
                    )
                }
            }
        })

    }


    render() {
        if (this.state.firstOpen) {
            return this.renderGuideScreen();
        }
        return this.renderNavigator();
    }

}




