import React from 'react'

import '../assets/module.css'

const Module = ({ name, stars, forks }) => (
  <div className="Module">
    <h2 className="Module__name">{name}</h2>
    <div className="Module__attr Module__attr--stars">
      {stars}
      <img
        width="16"
        style={{ marginLeft: '10px' }}
        alt="stars icon"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE5LjQ4MSAxOS40ODEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE5LjQ4MSAxOS40ODEiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgogIDxnPgogICAgPHBhdGggZD0ibTEwLjIwMSwuNzU4bDIuNDc4LDUuODY1IDYuMzQ0LC41NDVjMC40NCwwLjAzOCAwLjYxOSwwLjU4NyAwLjI4NSwwLjg3NmwtNC44MTIsNC4xNjkgMS40NDIsNi4yMDJjMC4xLDAuNDMxLTAuMzY3LDAuNzctMC43NDUsMC41NDFsLTUuNDUyLTMuMjg4LTUuNDUyLDMuMjg4Yy0wLjM3OSwwLjIyOC0wLjg0NS0wLjExMS0wLjc0NS0wLjU0MWwxLjQ0Mi02LjIwMi00LjgxMy00LjE3Yy0wLjMzNC0wLjI4OS0wLjE1Ni0wLjgzOCAwLjI4NS0wLjg3Nmw2LjM0NC0uNTQ1IDIuNDc4LTUuODY0YzAuMTcyLTAuNDA4IDAuNzQ5LTAuNDA4IDAuOTIxLDB6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgo8L3N2Zz4K"
      />
    </div>
    <div className="Module__attr Module__attr--forks">
      {forks}
      <img
        width="16"
        style={{ marginLeft: '10px' }}
        alt="fork icon"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xNiA0aC0xNnYzaDMuMmwzLjggMy42YzEuNiAxLjUgMy42IDIuNCA1LjggMi40aDMuMnYtM2gtMy4yYy0xLjQgMC0yLjctMC41LTMuNy0xLjVsLTEuNi0xLjVoOC41di0zeiIvPgo8L3N2Zz4K"
      />
    </div>
  </div>
)

export default Module
