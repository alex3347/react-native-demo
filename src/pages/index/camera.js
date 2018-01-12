import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import Camera from 'react-native-camera';

export default class cameraScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            readComplete: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    onBarCodeRead={this.getInfo.bind(this)}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[拍照]</Text>
                </Camera>
            </View>
        )
    }
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
    //获取扫码数据

    getInfo(data){
        if(!this.state.readComplete){
            alert("二维码信息：\n"+data.data);
            this.setState({readComplete: !this.state.readComplete});
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});
