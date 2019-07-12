import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <Text style={styles.memoHeaderTitle}>メモ1</Text>
                    <Text style={styles.memoHeaderDate}>2019/07</Text>
                </View>

                <View style={styles.memoContent}>
                    <Text>お買いもの</Text>
                </View>

                <CircleButton color="white" style={styles.editButton}>+</CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },

    memoHeader: {
        height: 100,
        backgroundColor: '#17313C',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 5,
    },
    memoHeaderTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    memoHeaderDate:{
        fontSize: 12,
        color: '#fff',
    },
    memoContent:{
        paddingTop: 30,
        paddingLeft: 20,
        flex: 1,
    },

    editButton:{
        top: 70,
    }
});

export default MemoDetailScreen;