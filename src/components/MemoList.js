import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class MemoList extends React.Component{
    render(){
        return(
            <View style={styles.memoList}> 
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ5</Text>
                    <Text style={styles.memoDate}>2019/07</Text>
                </View>
    
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ4</Text>
                    <Text style={styles.memoDate}>2019/07</Text>
                </View>
    
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ3</Text>
                    <Text style={styles.memoDate}>2019/07</Text>
                </View>
    
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ2</Text>
                    <Text style={styles.memoDate}>2019/07</Text>
                </View>
    
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ１</Text>
                    <Text style={styles.memoDate}>2019/07</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoList:{
        width: '100%', 
        flex: 1,
    },
    memoListItem:{
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    memoTitle:{
        fontSize: 20,
        marginBottom: 4,　
    },
    memoDate:{
        fontSize: 12,
        color: '#a2a2a2',
    } 
});

export default MemoList;