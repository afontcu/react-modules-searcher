import React from 'react'

const titleStyles = {
  fontWeight: 100,
  color: '#999',
  display: 'flex',
  alignSelf: 'center',
}

const Header = () => (
  <header className="App__header">
    <h1 style={titleStyles}>Module Searcher</h1>
  </header>
)

export default Header
