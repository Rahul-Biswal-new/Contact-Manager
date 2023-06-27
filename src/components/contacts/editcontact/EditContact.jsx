import React from 'react'
import { Link } from 'react-router-dom'

export default function EditContact() {
  return (
    <div>
      <section className='view-contact-intro p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='h3 text-warning fw-bold'>Edit Contact</p>
              <p className='fst-italic'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque neque quia, reprehenderit, aliquam voluptates ipsa saepe culpa, aut nisi placeat consectetur sapiente.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='view-contact mt-3'>
        <div className="container"> 
          <div className="row align-item-center">
           
            <div className="col-md-8">
            <div className="list-group">
                    <input value={'Name'} className="list-group-item list-group-item-action"/>

                    <input value={'Photo URL'} className="list-group-item list-group-item-action"/>

                    <input value={'Mobile'} className="list-group-item list-group-item-action"/>
                      
                    <input value={'Email'} className="list-group-item list-group-item-action"/>
                      
                    <input value={'Company'} className="list-group-item list-group-item-action"/>
                      
                    <input value={'Ttitle'} className="list-group-item list-group-item-action"/>
                     
                    <input value={'Group'} className="list-group-item list-group-item-action"/>
                      
                  </div>
            </div>

            <div className="col-md-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={'/contact/list'} className='btn btn-warning'>Back</Link>
              <button className='btn btn-primary ms-3'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
