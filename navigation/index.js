import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Browse from "../screens/Browse";
import { theme } from "../constants";

const screens = createStackNavigator({
  Welcome: {
    screen: Welcome, 
    navigationOptions: {
        header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: "transparent",
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: null,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
      
  },
  Browse: {
    screen: Browse,
    
    navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
  }

  // {
  //   Welcome,
  //   Login,
  //   SignUp,
  //   Forgot,
  //   Browse
  // },
  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       height: theme.sizes.base * 4,
  //       backgroundColor: theme.colors.white, // or 'white
  //       borderBottomColor: "transparent",
  //       elevation: 0 // for android
  //     },
  //     headerBackImage: <Image source={require("../assets/icons/back.png")} />,
  //     headerBackTitle: null,
  //     headerLeftContainerStyle: {
  //       alignItems: "center",
  //       marginLeft: theme.sizes.base * 2,
  //       paddingRight: theme.sizes.base
  //     },
  //     headerRightContainerStyle: {
  //       alignItems: "center",
  //       paddingRight: theme.sizes.base
  //     }
  //   }
  // }
);

export default createAppContainer(screens);
