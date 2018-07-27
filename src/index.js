import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize-css/normalize.css'
import './assets/app.css'

import Main from './components/Main.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
