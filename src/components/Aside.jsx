import React from 'react'

const Aside = props => {
  const handleChange = e => {
    props.onCheckboxChange(e)
  }

  const handleInputChange = e => {
    props.onInput(e)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>
        <strong>Search by name</strong>
      </p>
      <input
        value={props.inputValue}
        placeholder="Module name"
        onChange={handleInputChange}
        style={{ padding: '10px' }}
      />
      <p style={{ marginTop: '40px' }}>
        <strong>Order by</strong>
      </p>
      {['stars', 'forks', 'name'].map(checkboxName => (
        <label key={checkboxName} style={{ marginBottom: '10px' }}>
          <input
            type="radio"
            value={checkboxName}
            name="order"
            checked={props.checkboxValue === checkboxName}
            onChange={handleChange}
          />{' '}
          {checkboxName}
        </label>
      ))}
    </div>
  )
}

export default Aside
