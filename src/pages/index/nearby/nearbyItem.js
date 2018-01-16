import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


class NearbyItem extends Component {
    constructor(props){
        super(props);
        let market = this.props.market;
        this.state = {
            placeName:market.name,
            openTime:'09:00-21:00',
            price:'0.5',
            newUserStr:market.new,
            oldUserStr:market.login,
            payStr:market.charge,
            closeStatus:[]
        }
    }

    render() {
        return (
        <TouchableOpacity onPress={() => this.props.navigate('IndexDetail')}>
            <View style={styles.container}>
                <Image
                    source={require('../../../images/temp-hall.png')}
                    style={styles.marketIcon}
                />
                <View style={styles.market}>
                    <View style={styles.marketDescribe}>
                        <View style={styles.marketNameContainer}>
                            <Text style={styles.marketName}>{ this.state.placeName }</Text>
                            <TouchableOpacity onPress={(e) => {
                                e.stopPropagation();
                                this.props.navigate('Navigation')}}>
                                <View style={styles.navigation} bindtap="naviTo" data-latitude="{ this.state.latitude }" data-longitude="{ this.state.longitude }" data-lname="{ this.state.placeName }" data-addr="{ this.state.placeAddr }">
                                    <Image
                                        source={require('../../../images/navigation.png')}
                                        style={styles.navigationIcon}
                                    />
                                    <Text style={styles.navigationText}>导航</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.marketTime}>
                            <Image
                                source={require('../../../images/time.png')}
                                style={styles.marketTimeIcon}
                            />
                            <Text style={styles.marketTimeText}>{ this.state.openTime }</Text>
                            <Text style={styles.marketTimeText}>| 当前时段 { this.state.price }元/分钟</Text>
                        </View>
                        {
                            (this.state.newUserStr ? <View style={styles.marketActivity}>
                                <Text style={styles.marketActivityFirstTitle}>新</Text>
                                <Text style={styles.marketActivityContent}>{ this.state.newUserStr }</Text>
                            </View> : null)
                        }

                        <View style={styles.marketActivity}>
                            <Text style={styles.marketActivitySecTitle}>登</Text>
                            <Text style={styles.marketActivityContent}>{ this.state.oldUserStr }</Text>
                        </View>
                        <View style={styles.marketDiscount}>
                            <Text style={styles.marketDiscountTitle}>充</Text>
                            <Text style={styles.marketActivityContent}>{ this.state.payStr }</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.marketMachineStatus} onPress={(e,key=0) => {
                        e.stopPropagation();
                        let temp = this.state.closeStatus;
                        temp[key] = !temp[key]
                        this.setState({closeStatus:temp});
                    }}>
                        <Text style={styles.marketMachineStatusText}>移动娱乐室使用情况</Text>
                        <Image
                            source={require('../../../images/nearby-arrow-down.png')}
                            style={styles.marketMachineStatusIcon}
                        />
                    </TouchableOpacity>
                    {
                        !this.state.closeStatus[0] ? null :

                        <View style={styles.nearbyMarketDetail}>
                            <View style={styles.nearbyMarketDetailItem}>
                                <View style={styles.location}>
                                    <Text style={styles.floor}>一楼</Text>
                                    <Text style={styles.position}>餐饮区</Text>
                                </View>
                                <View style={styles.machine}>
                                    <View style={styles.machineItem}>
                                        <View style={styles.imgContainer}>
                                            <Image
                                                style={styles.avatar}
                                                source={require('../../../images/head-none-pic.png')}
                                            />
                                            <Image
                                                style={styles.tip}
                                                source={require('../../../images/fix.png')}
                                            />
                                        </View>
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.number}>一号机</Text>
                                            <Text style={[styles.status,styles.statusFix]}>维修</Text>
                                        </View>
                                    </View>
                                    <View style={styles.machineItem}>
                                        <View style={styles.imgContainer}>
                                            <Image
                                                style={styles.avatar}
                                                source={require('../../../images/head-none-pic.png')}
                                            />
                                            <Image
                                                style={styles.tip}
                                                source={require('../../../images/free.png')}
                                            />
                                        </View>
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.number}>二号机</Text>
                                            <Text style={[styles.status,styles.statusBusy]}>空闲</Text>
                                        </View>
                                    </View>
                                    <View style={styles.machineItem}>
                                        <View style={styles.imgContainer}>
                                            <Image
                                                style={styles.avatar}
                                                source={require('../../../images/head-none-pic.png')}
                                            />
                                            <Image
                                                style={styles.tip}
                                                source={require('../../../images/busy.png')}
                                            />
                                        </View>
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.number}>三号机</Text>
                                            <Text style={styles.status}>忙碌</Text>
                                        </View>
                                    </View>
                                    <View style={styles.machineItem}>
                                        <View style={styles.imgContainer}>
                                            <Image
                                                style={styles.avatar}
                                                source={require('../../../images/head-none-pic.png')}
                                            />
                                            <Image
                                                style={styles.tip}
                                                source={require('../../../images/stop.png')}
                                            />
                                        </View>
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.number}>四号机</Text>
                                            <Text style={[styles.status,styles.statusStop]}>停用</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                </View>
            </View>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingLeft:12,
        paddingRight:12,
        paddingTop:15,
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
    },
    icon:{
        width:20,
        height:20,
        marginLeft:6,
        marginRight:6,
        marginBottom:-3
    },
    market:{
        flexDirection:'column',
        minWidth:265,
    },
    marketIcon:{
        width:60,
        height:60,
        marginTop:10,
        marginRight:12
    },
    marketDescribe:{
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        paddingBottom:4

    },
    marketNameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    marketName:{
        fontSize:17,
        color:'#333'
    },
    navigation:{
        width: 56,
        height: 21,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#ff5353',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:5,
    },
    navigationIcon:{
        width: 12,
        height: 12,
        marginLeft: 8,
        marginRight: 8,
    },
    navigationText:{
        fontSize: 11,
        color: '#ff5353'
    },
    marketTime:{
        flexDirection:'row',
        alignItems:'center'
    },
    marketTimeIcon:{
        width: 14,
        height: 14,
    },
    marketTimeText:{
        fontSize: 11,
        color: '#999',
        paddingLeft:11
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
        width:265
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
    marketMachineStatus:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:35
    },
    marketMachineStatusText:{
        fontSize: 12,
        color: '#999',
    },
    marketMachineStatusIcon:{
        width: 14,
        height: 8,
        marginRight:12
    },
    nearbyMarketDetail:{
        flexDirection: 'column',
    },
    nearbyMarketDetailItem:{
        flexDirection: 'column',
        borderTopWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
    },
    location:{
        flexDirection:'row',
        alignItems:'center',
        height:32,
    },
    floor:{
        fontSize: 12,
        color: '#333',
        paddingRight: 5,
    },
    position:{
        fontSize: 12,
        color: '#333',
        borderLeftWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        paddingLeft: 5,
    },
    machine:{
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        width:245,
    },
    machineItem:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:4,
        marginBottom:19,
    },
    imgContainer:{
        position: 'relative',
        paddingTop: 3,
    },
    avatar:{
        width: 45,
        height: 45,
    },
    tip:{
        width: 6,
        height: 6,
        position: 'absolute',
        top: 0,
        right: -3,
    },
    statusContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 16,
        height: 46,
    },
    number:{
        fontSize: 15,
        color: '#333'
    },
    status:{
        fontSize: 12,
        color: '#7bdd51'
    },
    statusFix:{
        color: '#e5da5b'
    },
    statusBusy:{
        color: '#ff5353'
    },
    statusStop:{
        color: '#f7a852'
    },
})

export default NearbyItem;
