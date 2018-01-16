import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    DeviceEventEmitter
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import BillScreen from '../bill/billPage';
import IndexDetailScreen from './indexDetailPage';
import mineScreen from '../mine/mine';
import loginScreen from '../login/login';
import cameraScreen from './camera';
import navigationScreen from './navigation';
import LoginBar from './loginBar';
import ScanBtn from './scanBtn';
import Nearby from './nearby/nearby';
import fetchRequest from '../../utils/request';
import {asyncAppStatus} from '../../utils/asyncAppStatus';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            market: null,
            longitude:'',
            latitude:'',
            logined:false,
            user:null
        };
    }

    componentDidMount() {
        let params = {
            longitude:this.state.longitude,
            latitude:this.state.latitude
        }
        fetchRequest('api/index/near','POST',params)
            .then( res=>{
                //请求成功
                if(res.success){
                    //这里设定服务器返回的res中success为true时数据返回成功
                    this.setState({
                        market: res.data.market,
                    });
                }
            }).catch( err=>{
            //请求失败
            console.log(err)
        })

        //读取本地状态
        asyncAppStatus.bind(this)()


        DeviceEventEmitter.addListener('ChangeLoginStatus',(arg)=>{
            //接收到详情页发送的通知，刷新首页的数据，改变按钮颜色和文字，刷新UI
            this.setState({
                logined:arg.logined
            });
        });

    }

    render() {
        if (!this.state.market) {
            return this.renderLoadingView();
        }
        return this.renderComplete(this.state.market);
    }


    //加载中
    renderLoadingView() {
        return (
            <View style={styles.waitContainer}>
                <Image
                    source={require('../../images/loading.png')}
                    style={styles.loading}
                />
                <Text style={styles.waitText}>努力加载中...</Text>
            </View>
        );
    }


    //加载完成
    renderComplete(market) {
        const { navigate , goBack } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        !this.state.logined ? <LoginBar navigate={navigate} goBack={goBack}/> : null
                    }
                    <ScanBtn navigate={navigate}/>
                    <Nearby navigate={navigate} market={market}/>
                </View>
            </ScrollView>

        );
    }

}


const Tab = TabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'首页',
            title:'Pa 爪鱼',
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
    Bill: {
        screen:BillScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'订单',
            title:'订单页',
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
    },

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
    waitContainer:{
        flex:1,
        backgroundColor:'#f9f9f9',
        alignItems:'center',
        justifyContent:'center'
    },
    waitText:{
      fontSize:12,
      color:'#666',
      marginTop:6
    },
    loading:{
        height: 67,
        width: 87,
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
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
    },
});

const Navigator = StackNavigator(
    {
        Tab:{screen:Tab},
        IndexDetail:{screen:IndexDetailScreen},
        Login:{
            screen:loginScreen,
            navigationOptions:{
                title:'手机注册/登录',
                headerTitleStyle:{
                    fontSize:18,
                    color:'#333',
                    alignSelf : 'center',
                    marginLeft:-18
                },
            },
        },
        Camera:{screen:cameraScreen},
        Navigation:{
            screen:navigationScreen,
            navigationOptions:{
                headerStyle: {
                    height:0,//隐藏地图页导航栏
                }
            },
        },
    },

    {
        navigationOptions:{
            headerBackTitle:null,
            headerTintColor:'#333333',
            showIcon:true,
            swipeEnabled:false,
            animationEnabled:false,
            headerStyle: {
                backgroundColor: '#fff', // TabBar 背景色
                height:49,
            },
            headerTitleStyle:{
                fontSize:18,
                color:'#333',
                alignSelf : 'center',
            },
        },
        // headerMode:'none',//隐藏导航栏，对单个页面设置无效

        mode:'card',//普通app常用的左右切换
    });
export default Navigator;

