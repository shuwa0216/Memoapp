import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMO</Text>
          </View>
        </View>

        <View style={styles.memoList}> 
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
        </View>



        <View>
          <Text>+</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
  },

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
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    paddingTop: 30,
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle:{
    color: '#fff',
    fontSize: 18,
  }
});
