import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
         <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
