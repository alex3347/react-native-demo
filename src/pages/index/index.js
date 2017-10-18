import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import BillScreen from '../bill/billPage';
import IndexDetailScreen from './indexDetailPage';
import mineScreen from '../mine/mine';
import discountScreen from '../discount/discount';
import loginScreen from '../login/login';
import LoginBar from './loginBar';
import Nearby from './nearby/nearby';

class HomeScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <LoginBar navigate={navigate}/>
                <Nearby/>
            </View>
        );
    }
}


const Tab = TabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'首页',
            title:'主页',
            headerTitleStyle:{
              alignSelf:'center'
            },
            tabBarIcon:({focused}) => (
                focused
                        ?
                    <Image
                        source={require('../../images/home-selected.png')}
                        style={styles.icon}
                    />
                    :
                    <Image
                        source={require('../../images/home.png')}
                        style={styles.icon}
                    />
            )
        }),
    },
    Discount:{
        screen:discountScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'优惠',
            title:'优惠',
            headerTitleStyle:{
                alignSelf:'center'
            },
            tabBarIcon:({focused}) => (
                focused
                    ?
                    <Image
                        source={require('../../images/discount-selected.png')}
                        style={styles.icon}
                    />
                    :
                    <Image
                        source={require('../../images/discount.png')}
                        style={styles.icon}
                    />
            )
        }),
    },
    Bill: {
        screen:BillScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'订单',
            title:'订单页',
            headerTitleStyle:{
                alignSelf:'center'
            },
            tabBarIcon:({focused}) => (
                focused
                    ?
                    <Image
                        source={require('../../images/bill-selected.png')}
                        style={styles.icon}
                    />
                    :
                    <Image
                        source={require('../../images/bill.png')}
                        style={styles.icon}
                    />
            )
        }),
    },
    Mine:{
        screen:mineScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'我的',
            title:'我的',
            headerTitleStyle:{
                alignSelf:'center'
            },
            tabBarIcon:({focused}) => (
                focused
                    ?
                    <Image
                        source={require('../../images/mine-selected.png')}
                        style={styles.icon}
                    />
                    :
                    <Image
                        source={require('../../images/mine.png')}
                        style={styles.icon}
                    />
            )
        }),
    }

},{
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff5353', // 文字和图片选中颜色
        inactiveTintColor: '#666', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height:49
        },
        labelStyle: {
            fontSize: 11, // 文字大小
            marginTop:0,
            marginBottom: 0
        }
    },
});

const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    },
    container:{
        flex:1,
        backgroundColor:'#f9f9f9'
    },
    iconTip:{
        position:'absolute',
        top:-1,
        right:0,
        width:6,
        height:6,
        borderRadius:50,
        backgroundColor:'#ff5353'
    }
});

const Navigator = StackNavigator(
    {
        Tab:{
            screen:Tab,
            title:'首页'
        },
        IndexDetail:{screen:IndexDetailScreen},
        Login:{screen:loginScreen}
    },

    {
        navigationOptions:{
            headerBackTitle:null,
            headerTintColor:'#333333',
            showIcon:true,
            swipeEnabled:false,
            animationEnabled:false,
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height:49
            }
        },

        mode:'card',
    });
export default Navigator;

