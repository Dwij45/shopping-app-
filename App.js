
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Header from './component/Header';
import Partone from './component/Partone';
import Footer from './component/Footer';
import Fridge from './component/Fridge';

// Define the screens for navigation

export default class App extends Component {
  render() {
  return (
    <>
      <AppContainer />
      {/* <Header />
      <Partone />
      <Footer />
      <Fridge /> */}
    </>
  );
}
}
var AppNavigator = createSwitchNavigator({
  Header: Header,
  Partone: Partone,
  Fridge: Fridge,
  // Footer is not typically a part of navigation, so it's not included here
});

// Create the app container with the navigator
const AppContainer = createAppContainer(AppNavigator);
