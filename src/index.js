// React Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';

import store from './app/store';
import App from './App';

// Ant Design global styles
import 'antd/dist/antd.css';

ReactDOM.render(
    <>
        <Router>
            <Provider store={store}>
            <App />
            </Provider>
        </Router>
    </>, document.getElementById('root'));