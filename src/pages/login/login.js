import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
import fetchRequest from '../../utils/request';
import tools from '../../utils/tools';
import { NavigationActions } from 'react-navigation'

class loginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            verifyCode: '',
            timerCount:5,
            timerTitle:'重新获取',
            isFirst:true,
            show:true,//显示默认文字还是倒计时
            init:true,//是否第一次点击,
            logined:false
        };
    }

    //页面将要离开且本地状态设置成功时发送通知
    componentWillUnmount(){
        if(this.state.logined){
            DeviceEventEmitter.emit('ChangeLoginStatus', {logined:true});
        }else{
            console.log('登录失败');
        }
    }

    //获取验证码按钮倒计时事件
    interval(){
        if(this.state.isFirst){
            this.setState({
                isFirst:false,
                show:false,
                init:false
            });
            let temp = setInterval(() =>{
                let timer=this.state.timerCount-1;
                if(timer===0){
                    temp&&clearInterval(temp);
                    this.setState({
                        timerCount:5,
                        timerTitle:'重新获取',
                        isFirst:true,
                        show:true
                    })
                }else{
                    this.setState({
                        timerCount:timer,
                    })
                }
            },1000);
        }
    }

    //登录之后设置本地登录状态
    afterLogined(userData){
        let that = this
        AsyncStorage.setItem('user',JSON.stringify(userData), function (error) {
            if (error) {
                console.log('存储失败')
            } else {
                that.setState(
                    {
                        logined:true
                    }
                )
            }
        })
    }

    //登录按钮事件
    submit(){
        let phoneNumber = this.state.phoneNumber;
        let verifyCode = this.state.verifyCode;

        if(!phoneNumber || !verifyCode){
            return alert('手机号或验证码不能为空')
        }
        let params = {
            phoneNumber:phoneNumber,
            verifyCode:verifyCode
        }

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Tab'})
            ]
        })

        fetchRequest('api/u/verify','POST',params)
            .then( res=>{
                //请求成功
                if(res.success){
                    //这里设定服务器返回的res中success为true时数据返回成功
                    this.afterLogined(res.data);
                    this.props.navigation.dispatch(resetAction)
                }
            }).catch( err=>{
            //请求失败
        })

    }

    render() {
        const {state} = this.props.navigation;
        let navigate = state.params.navigate;
        let goBack = state.params.goBack;
        return (
            <View style={styles.container}>
                {/*<Text>{state.params.data}</Text>*/}
                <Image
                    source={require('../../images/banner-1.jpg')}
                    style={styles.banner}
                />
                <View style={styles.phoneNumberContainer}>
                    <Text style={styles.inputName}>手机号码</Text>
                    <TextInput
                        placeholder='请输入手机号码'
                        autoCapitalize={'none'}
                        autocorrect={false}
                        keyboardType={'number-pad'}
                        style={styles.inputField}
                        underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                        onChangeText={(text) => {
                            this.setState({
                                phoneNumber: text
                            })
                        }}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => this.interval()}>
                        <Text style={styles.buttonText}>{
                            this.state.show ?
                                this.state.init ? '获取验证码' : '重新获取'
                                : this.state.timerCount + '秒后重新获取'
                        }</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.phoneNumberContainer}>
                    <Text style={styles.inputName}>验证码</Text>
                    <TextInput
                        placeholder='请输入验证码'
                        autoCapitalize={'none'}
                        autocorrect={false}
                        keyboardType={'number-pad'}
                        style={styles.inputField}
                        underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                        onChangeText={(text) => {
                            this.setState({
                                verifyCode: text
                            })
                        }}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button
                        title="立即登录"
                        color="#09bb07"
                        accessibilityLabel="这是立即登录按钮"
                        onPress={() => this.submit()}
                    />
                    <View style={styles.introduce}>
                        <Text style={styles.textLeft}>点击登录，即表示已阅读并同意</Text>
                        <TouchableOpacity>
                            <Text style={styles.textRight}>《服务条款》</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#f9f9f9'
   },
    banner:{
        width:tools.size.width,
        height:375*tools.size.width/750,
    },
    phoneNumberContainer:{
       flexDirection:'row',
        backgroundColor:'#fff',
        height:44,
        alignItems:'center'
    },
    inputName:{
        width:75,
        textAlign:'center',
        fontSize:15,
        color:'#333'
    },
    inputField:{
        width:160,
        color:'#666',
        fontSize:16,
        backgroundColor:'#fff',
    },
    button:{
        width:130,
        height:44,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:tools.pixel,
        borderStyle:'solid',
        borderLeftColor:'#eee'
    },
    buttonText:{
        color:'#666',
        fontSize:16,
        textAlign:'center',
    },
    btnContainer:{
      marginTop:28,
        paddingLeft:12,
        paddingRight:12
    },
    introduce:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:12
    },
    textLeft:{
        color:'#999',
        fontSize:12,
    },
    textRight:{
        color:'#576b95',
        fontSize:12,
    },
});

export default loginScreen;
