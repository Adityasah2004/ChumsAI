import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
