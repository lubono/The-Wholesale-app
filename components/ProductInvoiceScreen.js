import * as React from 'react';
import { Button, View,Text,Image, StyleSheet } from 'react-native';
import Expo from "expo";


const ProductInvoiceScreen =()=>{
  return(
    <View> <Text>Mealie Meal</Text>
     <View><Text> Different brands of Mealie Meal going at Different prices ranging form K100 to K150</Text> 
     <Image source ={require("./images/Unga.jpg")} style={styles.container} />

     <View style={styles.middle}>
      <Button
      style={styles.middle}
        title="Add to cart"
        
      />
     
      <Button
      style={styles.bottom}
        title="Buy"
       
      />
      
    </View>
    </View>
    </View>
  );
}
export default ProductInvoiceScreen;

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
  }
  });