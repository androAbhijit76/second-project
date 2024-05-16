// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )






import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './app/Store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={Store}>
    <ToastContainer />

<App />
    </Provider>
           
  </React.StrictMode>,
)
