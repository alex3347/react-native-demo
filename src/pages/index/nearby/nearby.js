import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Picker
} from 'react-native';
import NearbyItem from './nearbyItem';

class Nearby extends Component {
    constructor(props){
        super(props);
        this.state = {
            distance: '20'
        }
    }

    render() {
        let views = [];
        let market = this.props.market;
        for(let i in market){
            views.push(
                <NearbyItem navigate={this.props.navigate} market={market[i]} key={i}/>
            );
        }
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.describe}>
                        <Image
                            source={require('../../../images/company-name.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.describeText}>附近的Pa爪娱</Text>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={styles.picker}
                            prompt="请选择距离"
                            selectedValue={this.state.distance}
                            onValueChange={(lang) => this.setState({distance: lang})}>
                            <Picker.Item label="<10km" value= '10' style={styles.pickerItem}/>
                            <Picker.Item label="<20km" value= '20' style={styles.pickerItem}/>
                        </Picker>
                    </View>
                </View>
                {views}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
    },
    icon:{
        width:20,
        height:20,
        marginLeft:12,
        marginRight:12,
        marginBottom:-6
    },
    describe:{
        flexDirection:'row',
        alignItems:'center',
        height:40
    },
    describeText:{
        fontSize: 18,
        color: '#333'
    },
    pickerContainer:{
        width:66,
        height:27,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
    },
    picker:{
        width:120,
        marginLeft:54,
    },
    pickerItem:{
        fontSize:12,
        color:'#000'
    }
});

export default Nearby;
