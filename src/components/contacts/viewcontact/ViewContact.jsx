import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewContact() {
  return (
    <div>
      <section className='view-contact-intro p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='h3 text-warning fw-bold'>View Contact</p>
              <p className='fst-italic'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque neque quia, reprehenderit, aliquam voluptates ipsa saepe culpa, aut nisi placeat consectetur sapiente.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='view-contact mt-3'>
        <div className="container"> 
          <div className="row align-item-center">
            <div className="col-md-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU" alt="" />
            </div>
            <div className="col-md-8">
            <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Name: <span className="fw-bold">Rahul</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Mobile: <span className="fw-bold">867597659</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Email: <span className="fw-bold">Rahul@emsil.com</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Company: <span className="fw-bold">Rahul@emsil.com</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Title: <span className="fw-bold">Rahul@emsil.com</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Group: <span className="fw-bold">Rahul@emsil.com</span>
                    </li>
                  </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={'/contact/list'} className='btn btn-warning'>Back</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
