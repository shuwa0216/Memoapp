import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class CircleButton extends React.Component{
    render(){
        const { style, color } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white'){
            bgColor = '#fff'
            textColor = '#E31676'
        } 

        return(
            <View style={[styles.CircleButton, style, {backgroundColor: bgColor}]}>
                <Text style={[styles.CircleButtonTitle, {color: textColor}]}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CircleButton:{
        position: 'absolute',
        bottom: 40,
        right: 40,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    CircleButtonTitle:{
        fontSize: 35,
        lineHeight: 35,
    }
});

export default CircleButton;