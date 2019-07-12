import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { Font } from 'expo';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
}, 'FontAwsome');

class CircleButton extends React.Component{
    state = {
        fontLoaded: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });

        this.setState({ fontLoaded: true });
    }

    render(){
        const { name,style, color } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white'){
            bgColor = '#fff'
            textColor = '#E31676'
        } 

        return(
            <View style={[styles.CircleButton, style, {backgroundColor: bgColor}]}>
                {
                this.state.fontLoaded ? (
                    <CustomIcon name={name} style={[styles.CircleButtonTitle, {color: textColor}]} />
                ) : null
                }
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
        fontFamily: 'FontAwsome',
        fontSize: 24,
        lineHeight: 35,
    }
});

export default CircleButton;