import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from './assets/theme';
import App from '@/App';
// 引入图片懒加载 
import LazyLoad from 'react-lazyload';
import 'normalize.css';
import '@/assets/css/style.less'
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './store'
LazyLoad.defaultProps = {
  height: 200,
  offset: 100,
  once: true,
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);

