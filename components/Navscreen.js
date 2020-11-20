import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WelcomeScreen from "./Welcomescreen";
import SignUpScreen from "./SignUpscreen";
import SignInScreen from "./SignInscreen";
import HomeScreen from "./HomeScreen";
import ProductScreen from "./ProductScreen";
import ProductInvoiceScreen from "./ProductInvoiceScreen";
import ProductInvoiceScreen1 from "./ProductInvoiceScreen1";
import ProductInvoiceScreen2 from "./ProductInvoiceScreen2";
import CompanyInformationScreen from "./CompanyInfoScreen"

const Stack = createStackNavigator();

function MyStack() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Welcome Page" component={WelcomeScreen} />
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
     
      <Stack.Screen name="Company Information" component={CompanyInformationScreen} />
   <Stack.Screen name="Products Invoice" component={ProductInvoiceScreen} />
    
    <Stack.Screen name="Products Availabe" component={ProductScreen} />
    <Stack.Screen name="Products Invoice-1" component={ProductInvoiceScreen1} />
    <Stack.Screen name="Products Invoice-2" component={ProductInvoiceScreen2} />
    </Stack.Navigator>
  
  );
}

export default MyStack;