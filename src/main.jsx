import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QuoteContextProvider } from './contexts/QuoteContext'
import { AuthContextProvider } from './contexts/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QuoteContextProvider>
        <App />
      </QuoteContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
