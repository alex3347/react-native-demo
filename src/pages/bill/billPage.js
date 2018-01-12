import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


class BillScreen extends React.Component {

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.billNoneContainer}>
                <Image style={styles.billNoneTip} source={require("../../images/nobill.png")}/>
                <Text style={styles.billNoneText}>亲，您还没有订单哦~</Text>
                <TouchableOpacity style={styles.billNoneButton}>
                    <Text style={styles.billNoneButtonText}>来一单</Text>
                </TouchableOpacity>
            </View>

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
});
export default BillScreen;
