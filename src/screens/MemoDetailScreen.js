import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dataString = (date)=> {
    const str = date.toDate().toISOString()
    return str.split('T')[0];
}

class MemoDetailScreen extends React.Component{
    state = {
        memo: {},
    }

    componentWillMount(){
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }

    returnMemo(memo){
        this.setState({ memo });
    }

    render(){
        const { memo } = this.state;

        return(
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
                    <Text style={styles.memoHeaderDate}>{dataString(memo.createdOn)}</Text>
                </View>

                <View style={styles.memoContent}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>

                <CircleButton 
                    name="pencil" 
                    color="white" 
                    style={styles.editButton} 
                    onPress={ () => { this.props.navigation.navigate('MemoEdit', { memo: memo, returnMemo: this.returnMemo.bind(this) }); } } 
                />

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
    memoBody:{
        lineHeight: 22,
        fontSize: 16,
    },

    editButton:{
        top: 35,
    }
});

export default MemoDetailScreen;