import * as React from 'react';
import { Button, View,Text,Image, StyleSheet } from 'react-native';
import Expo from "expo";



function WelcomeScreen({ navigation }) {
  return (
    <View >
    <Text style={styles.label}> Chiti Mukulu Wholesale</Text>
     <Image source ={require("./images/imag3.jpg")} style={styles.container} />
     <Text style={styles.records} > For more info on Chiti Mukulu Wholesale, Please Log In or Sign Up</Text>    
     
    <View style={styles.middle}>
      <Button
      style={styles.bottom}
        title=" Sign In"
        onPress={() => navigation.navigate('Sign In')}
      />
     
      <Button
      style={styles.bottom}
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}
      />
    </View>
    </View>
  );
}
export default WelcomeScreen;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    height:"268px"
  },
 
  middle: {
    flex: 0.4,
    padding:"5px",
    borderWidth: 5,
  },
  bottom: {
    flex: 1,
    
    justifyContent:"flex-stretch",
    alignItems:"flex-stretch",
    bBackgroundColor:"black",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  label:{
    backgroundColor:"darkgray",
    fontWeight:"bold",
    padding:"10px"
  },
  records:{
    backgroundColor:"darkgray",
    padding:"5px"
  }
  });



