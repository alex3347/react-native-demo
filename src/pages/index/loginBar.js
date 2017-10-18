import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class loginBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.left}>您尚未登录，请登录</Text>
                <TouchableOpacity onPress={() => this.props.navigate('Login')} style={styles.right}>
                    <Text style={styles.btn}>登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:55,
        flexDirection:'row',
        backgroundColor:'#ff5353',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:12,
        paddingRight:12
    },
    left:{
        fontSize:15,
        color:'#fff'
    },
    right:{
        alignItems:'center',
        justifyContent:'center',
        width:54,
        height:27,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        borderRadius:4,

    },
    btn:{
        fontSize:15,
        color:'#fff'
    }
});

export default loginBar;
