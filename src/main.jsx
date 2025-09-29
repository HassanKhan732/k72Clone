import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/stairs.jsx'
// import ReactDOM from 'react-router-dom'
// ReactDOM.createRoot(document.getElementById('root')).render(
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <Stairs/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
