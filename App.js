import React from 'react';
import { Provider } from 'react-redux';
import store from './src/publics/redux/store'
import MainNavigation from './src/publics/navigations/mainNavigation';
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App;