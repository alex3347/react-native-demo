import React, {Component} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

let image1 = require('../../images/guide/guide_1.png');
let image2 = require('../../images/guide/guide_2.png');
let image3 = require('../../images/guide/guide_3.png');
import tools from '../../utils/tools';

class GuideScreen extends React.Component {
    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Image source={image1} style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <View style={styles.background}>
                    <Image source={image3} style={styles.backgroundImage} />
                    <TouchableOpacity style={styles.btnContainer} onPress={() => {this.props.changeOpenStatus()}}>
                        <Text style={styles.btn}>立即体验</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
};

var styles = StyleSheet.create({
    contentContainer: {
        width: tools.size.width*3,
        height: tools.size.height,
    },
    backgroundImage: {
        width: tools.size.width,
        height: tools.size.height,
        resizeMode:'contain'
    },
    background: {
        width: tools.size.width,
        height: tools.size.height,
    },
    btnContainer:{
        position:'absolute',
        bottom:40,
        left:tools.size.width*0.5-46,
        width:92,
        height:32,
        borderWidth:tools.pixel,
        borderColor:'#5fa8f6',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        fontSize:15,
        color:'#5fa8f6'
    },
});

export default GuideScreen;