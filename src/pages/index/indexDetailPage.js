import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';


let title;
export default class IndexDetailScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {state} = this.props.navigation;
        title = state.params.placeName;
        console.log(title);
        return (
            <ScrollView style={styles.nearbyMarketDetailContainer}>
                <Image style={styles.nearbyMarketDetailImg} source={require('../../images/banner-6.jpg')}/>
                <View style={styles.nearbyMarketDetailIntro}>
                    <View style={styles.top}>
                        <Text style={styles.topFir}>商场简介:</Text>
                        <Text style={styles.topSec}>这里是商场简介的内容这里是商场简介的内容这里是商场简介的内容这里是商场简介的内容这里是商场简介的内容这里是商场简介的内容</Text>
                    </View>
                    <View style={styles.middle}>
                        <View style={styles.addressInfo}>
                            <Text style={styles.addressInfoFir}>地址:</Text>
                            <Text style={styles.addressInfoSec}>新砖公路399号</Text>
                        </View>
                        <View style={styles.navigation}>
                            <Image style={styles.navigationImg} source={require('../../images/navigation.png')}/>
                            <Text style={styles.navigationText}>导航</Text>
                        </View>
                    </View>
                    <View style={styles.down}>
                        <Text style={styles.downFir}>营业时间:</Text>
                        <Text style={styles.downSec}>09：00-21：00</Text>
                    </View>
                </View>
                <View style={styles.nearbyMarketDiscount}>
                    <Text style={styles.nearbyMarketDiscountTitle}>优惠活动：</Text>
                    {
                        (state.params.newUserStr ? <View style={styles.marketActivity}>
                            <Text style={styles.marketActivityFirstTitle}>新</Text>
                            <Text style={styles.marketActivityContent}>{ state.params.newUserStr }</Text>
                        </View> : null)
                    }
                    <View style={styles.marketActivity}>
                        <Text style={styles.marketActivitySecTitle}>登</Text>
                        <Text style={styles.marketActivityContent}>{ state.params.oldUserStr }</Text>
                    </View>
                    <View style={styles.marketDiscount}>
                        <Text style={styles.marketDiscountTitle}>充</Text>
                        <Text style={styles.marketActivityContent}>{ state.params.payStr }</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
    static  navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params.placeName,
        headerTitleStyle:{
            fontSize:18,
            color:'#333',
            alignSelf : 'center',
            marginLeft:-18
        },
    });

}

const styles = StyleSheet.create({
    nearbyMarketDetailContainer: {
        flexDirection: 'column',
        overflow:'scroll'
    },
    nearbyMarketDetailImg: {
        width: '100%',
    },
    nearbyMarketDetailIntro: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 14,
    },
    top: {
        flexDirection: 'column',
        borderBottomWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#eee',
        paddingTop: 12,
        paddingBottom: 12,
    },
    topFir:{
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
    },
    topSec:{
        fontSize: 12,
        color: '#999',
        flexWrap:'wrap',
        lineHeight:18
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 38,
        borderBottomWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#eee',
    },
    addressInfo: {
        flexDirection: 'row',
    },
    addressInfoFir: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
    },
    addressInfoSec: {
        fontSize: 15,
        color: '#999',
        marginLeft: 4,
    },
    navigation: {
        width: 56,
        height: 21,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#ff5353',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navigationImg: {
        width: 12,
        height: 12,
        marginLeft: 8,
        marginRight: 8,
    },
    navigationText: {
        fontSize: 11,
        color: '#ff5353',
    },
    down: {
        flexDirection: 'row',
        alignItems:'center',
        height: 38,
    },
    downFir: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
    },
    downSec: {
        fontSize: 15,
        color: '#999',
        marginLeft: 4,
    },
    nearbyMarketDiscount: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingLeft: 12,
        paddingRight: 12,
    },
    nearbyMarketDiscountTitle: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
        lineHeight: 35,
    },
    marketActivity:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:4
    },
    marketDiscount:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:4,
        width:300
    },
    marketActivityFirstTitle:{
        width: 14,
        height: 14,
        backgroundColor: '#68ce3c',
        fontSize: 11,
        color: '#fff',
        lineHeight: 14,
        textAlign:'center',
    },
    marketActivityContent:{
        paddingLeft:11,
        fontSize: 11,
        color: '#999',
        flexWrap:'wrap'
    },
    marketActivitySecTitle:{
        width: 14,
        height: 14,
        backgroundColor: '#fb8c51',
        fontSize: 11,
        color: '#fff',
        lineHeight: 14,
        textAlign:'center',
    },
    marketDiscountTitle:{
        width: 14,
        height: 14,
        backgroundColor: '#ff5353',
        fontSize: 11,
        color: '#fff',
        lineHeight: 14,
        textAlign:'center',
    },
});


