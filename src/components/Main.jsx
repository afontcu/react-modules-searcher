import React from 'react'
import Module from './Module.jsx'
import Aside from './Aside.jsx'
import Card from './Card.jsx'
import NavigationButtons from './NavigationButtons.jsx'
import chunk from 'lodash.chunk'

import { modules } from '../assets/data.json'

const ITEMS_PER_PAGE = 5

const mainStyles = {
  display: 'grid',
  gridTemplateRows: 'repeat(5, 70px)',
  marginBottom: '10px',
}

class Main extends React.Component {
  state = {
    currentPage: 0,
    modules,
    filterText: '',
    orderBy: 'stars',
  }

  render() {
    const filteredModules = this.state.modules
      .filter(({ name }) => name.includes(this.state.filterText))
      .sort(this.orderItems)
    const modulesChunks = chunk(filteredModules, ITEMS_PER_PAGE)

    return (
      <div className="App__main">
        <Card>
          <main style={mainStyles}>
            {modulesChunks.length ? (
              modulesChunks[this.state.currentPage].map(module => (
                <Module {...module} key={module.name} />
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                No modules found!
              </div>
            )}
          </main>
          {!!modulesChunks.length && (
            <NavigationButtons
              onPrevClick={this.handlePrevClick}
              onNextClick={this.handleNextClick}
              currentPage={this.state.currentPage}
              pages={Math.ceil(filteredModules.length / ITEMS_PER_PAGE)}
            />
          )}
        </Card>
        <Aside
          inputValue={this.state.filterText}
          onInput={this.handleInput}
          checkboxValue={this.state.orderBy}
          onCheckboxChange={this.handleCheckbox}
        />
      </div>
    )
  }

  handleNextClick = () => {
    this.setState(state => ({
      currentPage: (state.currentPage += 1),
    }))
  }

  handlePrevClick = () => {
    this.setState(state => ({
      currentPage: (state.currentPage -= 1),
    }))
  }

  handleInput = event => {
    this.setState({
      filterText: event.target.value,
      currentPage: 0,
    })
  }

  handleCheckbox = event => {
    this.setState({
      orderBy: event.target.value,
    })
  }

  orderItems = (a, b) => {
    const first = a[this.state.orderBy]
    const second = b[this.state.orderBy]

    if (this.state.orderBy === 'name') {
      if (first.toUpperCase() > second.toUpperCase()) return 1
      if (first.toUpperCase() < second.toUpperCase()) return -1
      return 0
    }

    if (first > second) return -1
    if (first < second) return 1
    return 0
  }
}

export default Main
