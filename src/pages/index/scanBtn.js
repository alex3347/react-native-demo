import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

class ScanBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigate('Camera')}>
                <Image source={require('../../images/scan.png')} style={styles.icon}/>
                <Text style={styles.content}>扫码开锁</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:158,
        backgroundColor:'#fff',
    },
    btn:{
        width:130,
        height:130,
        backgroundColor:'#ff5353',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:12,
        paddingRight:12,
        borderRadius: 65,
        marginTop:14,
        marginBottom:5,
        marginLeft:'auto',
        marginRight:'auto',
        shadowColor:'#ccc',
        shadowOpacity:10,
    },
    icon:{
        width:36,
        height:36,
    },
    content:{
        fontSize: 18,
        color: '#fff',
        marginTop: 20,
    }
});

export default ScanBtn;
