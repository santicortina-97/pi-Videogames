import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"

const Navbar = ({handleChange,handleSubmit, resetSearch}) => {

  return (
    <div className={style.container}>
      <form onChange={handleChange} className={style.containerForm}>
        <input type="text" />
        <button type='submit' onClick={handleSubmit} className={style.button}>Search</button>
{/*         <button onClick={resetSearch}>Reset</button> */}
      </form>
      <NavLink to={"/create"}><button className={style.button}>Create</button></NavLink>
    </div>
  )
}

export default Navbar