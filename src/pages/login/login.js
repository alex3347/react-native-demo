import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class loginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {state} = this.props.navigation;
        return (
            <View>
                <Text>{state.params.data}</Text>
            </View>
        );
    }
}

export default loginScreen;
