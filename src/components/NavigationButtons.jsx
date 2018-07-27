import React from 'react'

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const buttonStyle = {}

const NavigationButtons = ({
  onPrevClick,
  onNextClick,
  currentPage,
  pages,
}) => (
  <div style={wrapperStyle}>
    <button
      style={buttonStyle}
      onClick={onPrevClick}
      disabled={currentPage <= 0}
    >
      Prev
    </button>
    <p style={{ width: '70px', textAlign: 'center' }}>
      {currentPage + 1} / {pages}
    </p>
    <button
      style={buttonStyle}
      onClick={onNextClick}
      disabled={currentPage >= pages - 1}
    >
      Next
    </button>
  </div>
)

export default NavigationButtons
