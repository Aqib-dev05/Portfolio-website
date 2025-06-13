
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom from "react-dom/client"
import { BrowserRouter } from 'react-router'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDom.createRoot(
  document.getElementById('root')).render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  )