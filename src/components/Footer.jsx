import React from 'react'

const Footer = () => (
  <footer className="App__footer">
    <a href="http://fontcuberta.cat" target="_blank" rel="noopener noreferrer">
      Adrià Fontcuberta
    </a>
    <p>{new Date().getFullYear()}</p>
  </footer>
)

export default Footer
