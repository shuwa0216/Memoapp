import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class CircleButton extends React.Component{
    render(){
        return(
            <View style={styles.CircleButton}>
                <Text style={styles.CircleButtonTitle}>
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
        backgroundColor: '#E31676',
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
        color: '#fff',
    }
    
});

export default CircleButton;