import * as React from 'react';
import { Button, View, StyleSheet, TextInput, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Expo from "expo";

function SignInScreen({ navigation }) {
  return (
    
    <View style={styles.contianer}>
       <Text className="header" style={styles.headings} >Sign In Page</Text>
     <View>
     <Text  type="email" style={styles.label}>Email Address</Text><TextInput style={styles.fields} className="Input" ></TextInput>
     </View>
     <View>
     <Text  type="password" style={styles.label}> Password</Text><TextInput style={styles.fields} className="Input" ></TextInput>
     <Button 
      
        onPress={() => navigation.navigate('Home')}
       type="submit" title="Sign In"/>
     </View>  
     
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      
    </View>
    </View> 
  );
}
export default SignInScreen;

const styles = StyleSheet.create( {
  label:{
    color:"black",
    fontSize:"18px",
    dispay:"flex",
    flex:1,
    justifyContent:"flex-start",
    alignItems:"flex-start",
    fontWeight:"bold",
    padding:"5px",
   
  },
  headings:{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    flex: "0.5",
    fontWeight:"bold",
    fontSize:"26px",
    padding:"5px",
    borderRadius:"26px"
  },
  contianer:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"lightblue",
    borderRadius:"26px",
    height:"60%"
  },
  fields:{
    backgroundColor:"white",
    borderColor:"black",
   
  },
  button:{
    marginTop:"6px",
    padding:"5px"
  }

});