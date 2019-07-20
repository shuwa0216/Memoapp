import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import { Font } from 'expo';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c'
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
        const { name, style, color, onPress } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white'){
            bgColor = '#fff'
            textColor = '#E31676'
        } 

        return(
            <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent"　>
                <View style={[styles.CircleButton, style, {backgroundColor: bgColor}]}>
                    {
                    this.state.fontLoaded ? (
                        <CustomIcon name={name} style={[styles.CircleButtonTitle, {color: textColor}]} />
                    ) : null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 40,
        right: 40,
        width: 60,
        height: 60,
    },

    CircleButton:{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    CircleButtonTitle:{
        fontFamily: 'FontAwsome',
        fontSize: 24,
        lineHeight: 35,
    }
});

export default CircleButton;