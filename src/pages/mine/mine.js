import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class mineScreen extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.mineInfo}>
                    <View style={styles.top}>
                        <Image style={styles.avatar} source={require('../../images/head-pic-1.png')}/>
                        <View style={styles.nameModel}>
                            <Text style={styles.name}>用户昵称</Text>
                            <View style={styles.wxName}>
                                <Text style={styles.number}>微信号：</Text>
                                <Text style={styles.numberContent}>1234561212</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.down}>
                        <View style={styles.item}>
                            <View style={styles.content}>
                                <Text style={[styles.contentNumber,styles.red]}>20</Text>
                                <Text style={[styles.contentUnit,styles.red]}>元</Text>
                            </View>
                            <Text style={styles.describe}>我的钱包</Text>
                        </View>
                        <View style={[styles.item,styles.middle]}>
                            <View style={styles.content}>
                                <Text style={[styles.contentNumber,styles.yellow]}>3</Text>
                                <Text style={[styles.contentUnit,styles.yellow]}>个</Text>
                            </View>
                            <Text style={styles.describe}>我的红包</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.content}>
                                <Text style={[styles.contentNumber,styles.green]}>100</Text>
                                <Text style={[styles.contentUnit,styles.green]}>元</Text>
                            </View>
                            <Text style={styles.describe}>我的押金</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mineCategory}>
                    <View style={styles.mineCategoryItem}>
                        <View style={styles.itemLeft}>
                            <Image style={styles.itemLeftImg} source={require('../../images/contact.png')}/>
                            <Text style={styles.itemLeftText}>客服中心</Text>
                        </View>
                        <View style={styles.itemRight}>
                            <Image style={styles.itemRightImage} source={require('../../images/arrow-right.png')}/>
                        </View>
                    </View>
                    <View style={styles.mineCategoryItem}>
                        <View style={styles.itemLeft}>
                            <Image style={[styles.itemLeftImg,styles.special]} source={require('../../images/join.png')}/>
                            <Text style={styles.itemLeftText}>加盟合作</Text>
                        </View>
                        <View style={styles.itemRight}>
                            <Image style={styles.itemRightImage} source={require('../../images/arrow-right.png')}/>
                        </View>
                    </View>
                    {/*<View style={styles.loginBtn}>*/}
                        {/*<View style={styles.topBtn}>*/}
                            {/*<Image source={require('../../images/wechat.png')}/>*/}
                            {/*<Text>登录</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'#f5f5f5',
        minHeight:'100%'
    },
    mineInfo:{
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
    },
    top:{
        flexDirection: 'row',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        paddingTop: 10,
        paddingBottom: 9,
    },
    avatar:{
        width: 43,
        height: 43,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius: 4,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 4,
    },
    nameModel:{
        flexDirection: 'column',
    },
    name:{
        fontSize: 17,
        color: '#000',
    },
    wxName:{
        height: 34,
        flexDirection: 'row',
        alignItems: 'center',
    },
    number:{
        fontSize: 17,
        color: '#333',
    },
    numberContent:{
        fontSize: 14,
        color: '#666',
    },
    down:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
    },
    item:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 76,
        flex:1,
    },
    content:{
        flexDirection:'row',
        alignItems:'center'
    },
    contentNumber:{
        fontSize: 27,
        fontWeight: 'bold',
        marginRight: 2,

    },
    contentUnit:{
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom:-12
    },
    describe:{
        fontSize: 12,
        color: '#333',
        marginTop: 7,
    },
    middle:{
        borderLeftWidth:1,
        borderRightWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
    },
    red:{
        color:'#ff5353'
    },
    yellow:{
        color:'#ffb442'
    },
    green:{
        color:'#2fd99f'
    },
    mineCategory:{
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
    },
    mineCategoryItem:{
        height: 43,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
    },
    itemLeft:{
        flexDirection: 'row',
    },
    itemLeftImg:{
        width: 23,
        height: 22,
        marginLeft: 12,
        marginRight: 12,
    },
    special:{
        width: 21,
        height: 19,
    },
    itemLeftText:{
        fontSize: 17,
        color: '#000',
    },
    itemRight:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    itemRightImage:{
        width: 9,
        height: 16,
        marginLeft: 20,
        marginRight: 12,
    },
})

export default mineScreen;
