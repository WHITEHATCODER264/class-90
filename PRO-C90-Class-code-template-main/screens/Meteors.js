import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteors: {},
    };
  }

  componentDidMount() {
    this.getMeteors();
  }

  getMeteors=async()=>{
    axios
    .get( 'https://api.nasa.gov/neo/rest/v1/feed?api_key=f5kFZbA12NpWcHte2RHop5pxViHf8Oo2BOV5tKh0')
    .then((response)=>{
      this.setState({meteor :response.near_earth_objects });
      console.log(Object.keys(this.state.meteor))
    })
    .catch((error)=>{
      alert(error.message);
    });
  } ;
    
      

  render() {
    
    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea}/>
        <Text> Meteors Screen</Text>
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
  
  
});
