import * as React from 'react';
import { Button, View,Text,Image, StyleSheet } from 'react-native';
import Expo from "expo";



function CompanyInfoScreen({ navigation }) {
  return (
    <View >
    <Text style={styles.label}> Chiti Mukulu Wholesale</Text>
     <Image source ={require("./images/imag6.jpeg")} style={styles.container} />
     <View style={styles.records} > 
     <Button style={styles.button} title="Visit wholesale"
        onPress={() => navigation.navigate('Products Availabe')}
     />
             <Button style={styles.button} title="Company Information"
        onPress={() => navigation.navigate('Company Information')}
             />
            
     
     
     </View>    
     
    <View style={styles.middle}>
      <Button
      style={styles.bottom}
        title="Log out"
        onPress={() => navigation.navigate('Welcome Page')}
      />
    </View>
    </View>
  );
}
export default CompanyInfoScreen;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    height:"280px"
  },
 
  middle: {
    flex: 0.4,
    
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