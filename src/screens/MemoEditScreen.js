import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component{
    state = {
        body: '',
        key: '',
    }

    componentWillMount(){
        const {params} = this.props.navigation.state;
        console.log('テスト', params.memo),
        this.setState({ body: params.memo.body, key: params.memo.key });
    }

    handlePress(){
        console.log('press');
        const { currentUser } = firebase.auth();
        firebase.firestore().collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
            .update({
                body: this.state.body,
                createdOn: firebase.firestore.Timestamp.now(),
            })
            .then(() => {
                this.props.navigation.state.params.returnMemo({
                    body: this.state.body,
                    key: this.state.key,
                    createdOn: firebase.firestore.Timestamp.now(), 
                });
                this.props.navigation.goBack();
            })
            .catch((error) => {
            })
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.memoEditInput} 
                    multiline 
                    value={this.state.body}
                    onChangeText = {(text) => {this.setState({ body: text });}}
                />

                <CircleButton name="check" onPress={this.handlePress.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    memoEditInput:{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    }
});

export default MemoEditScreen;