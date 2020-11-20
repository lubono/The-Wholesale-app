import * as React from 'react';
import { Button, View,Text,Image, StyleSheet } from 'react-native';
import Expo from "expo";



function CompanyInformationScreen({ navigation }) {
  return (
    <View >
    <Text style={styles.label}> Chiti Mukulu Wholesale Information</Text>
    <Text style={styles.label}> Phone Number :</Text><Text > 0978000000 || 0968000000</Text>
     <Text style={styles.label}>Email Address :</Text><Text > Chitimukulu@gmail.com</Text>
     <Text style={styles.label}>About the Company</Text><Text > Chiti mukulu wholesale is a physical and online wholesale for retail shops all across zambia, that provides wholesale and delivery services tp its physical and online customer's.   </Text>
    
     
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
export default CompanyInformationScreen;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    height:"220px"
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