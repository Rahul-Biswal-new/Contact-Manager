import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className="container">
            <Link to={'/'} className='navbar-brand'>
                <i className='fa fa-mobile text-warning'/> Contact <span className='text-warning'>Manager</span></Link>
        </div>
    </div>
  )
}
