import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />

        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={styles.bgImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>ISS Tracker App </Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('IssLocation')}>
            <Text style={styles.routeText1}> ISS Location </Text>
            <Text style={styles.knowMore}>{'Know More'} </Text>
            <Text style={styles.bgDigit}>1</Text>

            <Image
              source={require('../assets/iss_icon.png')}
              style={styles.iconImg}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText2}>Meteors</Text>
            <Text style={styles.knowMore}>{'Know More'} </Text>
            <Text style={styles.bgDigit}>2</Text>

            <Image
              source={require('../assets/meteor_icon.png')}
              style={styles.iconImg}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },

  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    width: 270,
    height: 280,
  },

  routeText1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 70,
    paddingLeft: 10,
  },

  routeText2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 60,
    paddingLeft: 10,
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },

  bgDigit: {
    position: 'absolute',
    color: 'rgba(183,183,183,0.5)',
    fontSize: 100,
    right: 20,
    bottom: -15,
    zIndex: 1,
  },

  iconImg: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
});
