import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

class LoginScreen extends React.Component{
    state = {
        email: 'user1@example.com',
        password: 'password',
    }

    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions:[
                    NavigationActions.navigate({ routeName: 'Home' }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        })
        .catch(() => {
        })
    }

    handlePress(){
        this.props.navigation.navigate('Signup');
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログイン
                </Text>
                <TextInput 
                    style={styles.input} 
                    value={this.state.email} 
                    onChangeText={ (text)=>{ this.setState({ email: text }); } } 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                />
                <TextInput 
                    style={styles.input} 
                    value={this.state.password} 
                    onChangeText={ (text)=>{ this.setState({ password: text }); } } 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableHighlight style={styles.button} onPress={ this.handleSubmit.bind(this) } underlayColor='#C70F66'>
                    <Text style={styles.buttonTitle}>送信</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
                    <Text style={styles.signupText}>サインアップ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        padding: 24,
    },
    input:{
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 12,
    },
    title:{
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },
    button:{
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle:{
        color: '#fff',
        fontSize: 18,
    },

    signup:{
        marginTop: 40,
        alignSelf: 'center',
    },
    signupText:{
        fontSize: 18,
    }
});

export default LoginScreen;