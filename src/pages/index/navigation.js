import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
} from 'react-native';

class navigationScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{uri:'http://192.168.1.42:8020/html/nearby.html'}} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
export default navigationScreen;
