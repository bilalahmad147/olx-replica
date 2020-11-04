import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/Redux/Store'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import AddProducts from './components/AddProducts/AddProducts';
import SingleProduct from './components/SingleProduct/SingleProduct';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<App />} path='/' />
        <Route element={<AddProducts />} path='/sell' />
        <Route element={<SingleProduct />} path='/:name' />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
