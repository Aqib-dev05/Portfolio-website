import './index.css'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import App from './App.jsx'
import ReactDom from "react-dom/client"
import { BrowserRouter } from 'react-router'
ReactDom.createRoot(
  document.getElementById('root')).render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  )