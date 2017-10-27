import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class BillScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>billPage</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
export default BillScreen;
