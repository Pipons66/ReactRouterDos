import {NavLink} from 'react-router-dom'
import React from 'react'

function NavBar() {
    const setActive = ({isActive}) => isActive ? 'active' : 'inActive'
  return (
    <div className='BgStyle '>
        <NavLink to='/' className={setActive}>
            Home
        </NavLink>
        <NavLink to='/pokemon' className={setActive}>
            Pokemon
        </NavLink>
    </div>
  )
}

export default NavBar