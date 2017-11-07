import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


class NearbyItem extends React.Component {
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
                        <View style={styles.marketNameContainer} class='nearby-market-name-container'>
                            <Text style={styles.marketName} class="nearby-market-name">{ this.state.placeName }</Text>
                            <TouchableOpacity onPress={(e) => {
                                e.stopPropagation();
                                this.props.navigate('Navigation')}}>
                                <View style={styles.navigation} class="navigation" bindtap="naviTo" data-latitude="{ this.state.latitude }" data-longitude="{ this.state.longitude }" data-lname="{ this.state.placeName }" data-addr="{ this.state.placeAddr }">
                                    <Image
                                        source={require('../../../images/navigation.png')}
                                        style={styles.navigationIcon}
                                    />
                                    <Text style={styles.navigationText}>导航</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.marketTime} class='nearby-market-time'>
                            <Image
                                source={require('../../../images/time.png')}
                                style={styles.marketTimeIcon}
                            />
                            <Text style={styles.marketTimeText}>{ this.state.openTime }</Text>
                            <Text style={styles.marketTimeText}>| 当前时段 { this.state.price }元/分钟</Text>
                        </View>
                        {
                            (this.state.newUserStr ? <View style={styles.marketActivity} class='nearby-market-activity-first'>
                                <Text style={styles.marketActivityFirstTitle}>新</Text>
                                <Text style={styles.marketActivityContent}>{ this.state.newUserStr }</Text>
                            </View> : null)
                        }

                        <View style={styles.marketActivity} class='nearby-market-activity-sec'>
                            <Text style={styles.marketActivitySecTitle}>登</Text>
                            <Text style={styles.marketActivityContent}>{ this.state.oldUserStr }</Text>
                        </View>
                        <View style={styles.marketDiscount} class='nearby-market-discount'>
                            <Text style={styles.marketDiscountTitle}>充</Text>
                            <Text style={styles.marketActivityContent}>{ this.state.payStr }</Text>
                        </View>
                    </View>
                    <View style={styles.marketMachineStatus}>
                        <Text style={styles.marketMachineStatusText}>移动娱乐室使用情况</Text>
                        <Image
                            source={require('../../../images/nearby-arrow-down.png')}
                            style={styles.marketMachineStatusIcon}
                        />
                    </View>
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
        width:265,
    },
    marketIcon:{
        width:60,
        height:60,
        marginTop:10
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
        marginTop:4
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
    }
});

export default NearbyItem;
