import * as React from 'react';
import { Button, View, StyleSheet,TextInput,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SignUpScreen({ navigation }) {
   return (
    
    <View style={styles.contianer}>
       <Text className="header" style={styles.headings} >Sign Up Page</Text>
     <View>
     <Text  type="email" style={styles.label}>First Name</Text><TextInput style={styles.fields} className="Input" ></TextInput>
     </View>
     <View>
     <View>
     <Text  type="email" style={styles.label}>Last Name</Text><TextInput style={styles.fields} className="Input" ></TextInput>
     </View>
     <Text  type="email" style={styles.label}>Email Address</Text><TextInput style={styles.fields} className="Input" ></TextInput>
     </View>
     <View>
     <Text  type="password" style={styles.label}> Password</Text><TextInput style={styles.fields} className="Input" ></TextInput>
    <Text  type="password" style={styles.label}> Confirm password</Text><TextInput style={styles.fields} className="Input" ></TextInput>
     <Button 
      
        onPress={() => navigation.navigate('Home')}
       type="submit" title="Sign Up"/>
     </View>
     

    </View> 
  );
}
export default SignUpScreen;

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
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"lightblue",
    borderRadius:"26px",
    height:"90%"
  },
  fields:{
    backgroundColor:"white",
    borderColor:"black",
  },
  button:{
    marginTop:"6px"
  }

});