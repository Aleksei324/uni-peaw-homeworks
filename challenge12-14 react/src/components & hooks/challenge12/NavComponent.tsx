import { NavLink } from "react-router-dom"
import './style.css'

export const NavComponent = () => {
  return (
    <div className="nav">
      <h1>Challenge 12: <small>routes</small></h1>
      <div>
        <NavLink 
          className={(x) => x.isActive ? 'activeNav' : ''} 
          to='/challenge13public'>Challenge 13 (público)
        </NavLink>

        <NavLink 
          className={(x) => x.isActive ? 'activeNav' : ''} 
          to='/challenge13private'>Challenge 13 (privado)
        </NavLink>

        <NavLink 
          className={(x) => x.isActive ? 'activeNav' : ''} 
          to='/challenge14'>Challenge 14
        </NavLink>
      </div>
    </div>
  )
}
