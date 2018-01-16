import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {asyncAppStatus} from '../../utils/asyncAppStatus';

class BillScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logined:false,
            user:null
        };
    }


    componentDidMount() {
        //读取本地状态
        asyncAppStatus.bind(this)()

    }

    render() {
        return (
        <View style={styles.container}>
            {
                !this.state.logined ?
                    <View style={styles.billNoneContainer}>
                        <Image style={styles.billNoneTip} source={require("../../images/nobill.png")}/>
                        <Text style={styles.billNoneText}>亲，您还没有登录哦~</Text>
                        <TouchableOpacity style={styles.billNoneButton} onPress={() => this.props.navigation.navigate('Login',{data:'', navigate:this.props.navigate})}>
                            <Text style={styles.billNoneButtonText}>点击登录</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.billContainer}>
                        <View style={styles.billItem}>
                            <Image style={styles.billItemImg} source={require("../../images/temp-hall.png")}/>
                            <View style={styles.billItemDetail}>
                                <View style={styles.billItemDetailInfo}>
                                    <View style={styles.infoLeft}>
                                        <Text style={styles.billItemDetailMarketName}>棕榈广场店</Text>
                                        <Text style={styles.billItemDetailTime}>2017-8-27 12：27</Text>
                                        <View style={styles.billItemDetailNumberContainer}>
                                            <Text style={styles.billItemDetailNumber}>订单号</Text>
                                            <Text style={styles.billItemDetailNumber}>35265</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.infoRight}>已完成</Text>
                                </View>
                                <View style={styles.billItemDetailCharge}>
                                    <Text style={styles.billItemDetailChargeTitle}>订单共消费</Text>
                                    <Text style={styles.billItemDetailChargeCost}>￥27</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tip}>
                            <Text style={styles.tipLine}/>
                            <Text style={styles.tipContent}>没有更多了</Text>
                            <Text style={styles.tipLine}/>
                        </View>
                    </View>
            }
        </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f9f9f9',
        minHeight:'100%'
    },
    billNoneContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 200,
    },
    billNoneTip: {
        width: 80,
        height: 62,
    },
    billNoneText: {
        fontSize: 12,
        color: '#333',
        height:20
    },
    billNoneButton: {
        width:80,
        height:30,
        backgroundColor:'#ff5353',
        borderRadius:6,
        borderColor:'#ff5353',
        alignItems:'center',
        justifyContent:'center'
    },
    billNoneButtonText: {
        color:'#fff',
        fontSize:12,
    },
    billItem: {
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#eee',
        borderStyle:'solid',
        padding: 24,
        marginTop: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    billItemImg: {
        width: 33,
        height: 33,
        marginTop: 4,
        borderRadius: 4,
    },
    billItemDetail: {
        minWidth: 300,
        marginLeft: 12,
        flexDirection: 'column',
    },
    billItemDetailInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLeft: {
        flexDirection: 'column',
    },
    billItemDetailMarketName: {
        fontSize: 15,
        color: '#333',
    },
    billItemDetailTime: {
        fontSize: 12,
        color: '#999',
        marginTop:4
    },
    billItemDetailNumberContainer: {
        flexDirection: 'row',
        marginTop:4
    },
    billItemDetailNumber: {
        fontSize: 12,
        color: '#999',
        marginRight:14
    },
    infoRight: {
        fontSize: 15,
        color: '#666',
    },
    billItemDetailCharge:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:11,
        borderTopWidth:1,
        borderColor:'#eee',
        borderStyle:'solid',
        marginTop:7
    },
    billItemDetailChargeTitle:{
        fontSize: 13,
        color: '#666'
    },
    billItemDetailChargeCost:{
        fontSize: 13,
        color: '#333',
        fontWeight: 'bold',
    },
    tip:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
    },
    tipLine:{
        borderTopWidth:1,
        borderColor:'#eee',
        borderStyle:'solid',
        width: 66,
        marginTop: 7,
        },
    tipContent:{
        fontSize: 11,
        color: '#ccc',
        marginLeft: 10,
        marginRight: 10,
        },
});
export default BillScreen;
