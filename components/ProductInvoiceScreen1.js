import * as React from 'react';
import { Button, View,Text,Image, StyleSheet } from 'react-native';
import Expo from "expo";


const ProductInvoiceScreen1 =()=>{
  return(
    <View> <Text>Trays of Eggs</Text>
    <View><Text> 8 trays of eggs Going at K320 280ml</Text> 
     <Image source ={require("./images/eggs.jpg")} style={styles.container} />

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
export default ProductInvoiceScreen1;



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