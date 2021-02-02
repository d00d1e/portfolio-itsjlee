import React from 'react'

export default function CategoryNav() {
  return (
    <div className="container category-container pt-4">
      <ul className="nav justify-content-center text-uppercase">
        <li className="nav-item">
          <a className="nav-link" activeClassName="active" href="/#">/All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" activeClassName="active" href="/#">/Frontend</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" activeClassName="active" href="/#">/Backend</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" activeClassName="active" href="/#">/Other</a>
        </li>
      </ul>
    </div>
  )
}
