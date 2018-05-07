import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import PickUpLocation from "./screens/home/Pickup";

const AppNavigator = StackNavigator(
  {
    PickUpLocation: { screen:PickUpLocation },
    Home: { screen: Home}
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
