import * as React from 'react';
import { Button, View,Text,Image, StyleSheet } from 'react-native';
import Expo from "expo";



function ProductScreen({ navigation }) {
  return (
    <View >
    <Text style={styles.label}> Chiti Mukulu Wholesale</Text>
    <Text style={styles.label}> We are saling the following</Text>
    <View><Text> Different brands of Mealie Meal going at Different prices ranging form K100 to K150</Text> 
     <Image source ={require("./images/Unga.jpg")} style={styles.container} />

     <View style={styles.middle}>
      <Button
      style={styles.middle}
        title="Add to cart"
        onPress={()  => navigation.navigate('Products Invoice')} 
      />
     
      <Button
      style={styles.bottom}
        title="Buy"
        onPress={() => navigation.navigate('Products Invoice')}
      />
      
    </View>
    </View>

     <View><Text> 8 trays of eggs Going at K320 280ml</Text> 
     <Image source ={require("./images/eggs.jpg")} style={styles.container} />

     <View style={styles.middle}>
      <Button
      style={styles.middle}
        title="Add to cart"
        onPress={()  => navigation.navigate('Products Invoice-1')}
      />
     
      <Button
      style={styles.bottom}
        title="Buy"
        onPress={() => navigation.navigate('Products Invoice-1')}
      />
      
    </View>
    </View>
     <View><Text> Box for Cooking oil Going at K185 280ml</Text> 
     <Image source ={require("./images/images.jpg")} style={styles.container} />

     <View style={styles.middle}>
      <Button
      style={styles.middle}
        title="Add to cart"
        onPress={()  => navigation.navigate('Products Invoice-2')}
      />
     
      <Button
      style={styles.bottom}
        title="Buy"
        onPress={() => navigation.navigate('Products Invoice-2')}
      />
      
    </View>
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
export default ProductScreen;

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
  photos:{
    height:"35px",
    padding:"5px"
  }
  });