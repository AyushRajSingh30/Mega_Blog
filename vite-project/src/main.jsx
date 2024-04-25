import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/login/login.jsx'
import Signup from "./components/signup/signup.jsx"
import Home from "./components/Home/Home.jsx"
import store from "./store/store.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/login",
            element: (
               
                    <Login/>
               
            ),
        },
        {
            path: "/signup",
            element: (
               
                    <Signup/>

            ),
        },
      ]
    }
       
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

