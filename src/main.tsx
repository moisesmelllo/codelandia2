import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles.css'
import Header from './components/HeaderandFooter/Header.tsx'
import Footer from './components/HeaderandFooter/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <body>
      <Header />
        <App />
      <Footer />
    </body>
  </React.StrictMode>,
)
