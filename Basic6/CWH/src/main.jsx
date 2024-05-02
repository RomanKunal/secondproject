import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  // WE DISCUSS ABOUT THE PROPS USE IN THIS SECTION
  <React.StrictMode>
    <NavBar title="NO HOME" text='WE THE CHAMP'/> 
  </React.StrictMode>,
)
