import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider as UIProvider } from "./components/ui/provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
 <UIProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 </UIProvider>
 
)
