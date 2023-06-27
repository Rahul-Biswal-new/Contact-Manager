import React from 'react'
import { Link } from 'react-router-dom'

export default function AddContact() {
  return (
    <div>
      <section className='add-contact p-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid eum animi asperiores incidunt perferendis illo expedita labore neque aspernatur.</p>

            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form action="">
                <div className="mb-2">
                  <input type="text" className='form-control' placeholder='Name' />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' placeholder='Photo URL' />
                </div>
                <div className="mb-2">
                  <input type="number" className='form-control' placeholder='Mobile' />
                </div>
                <div className="mb-2">
                  <input type="email" className='form-control' placeholder='Email' />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' placeholder='Company' />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' placeholder='title' />
                </div>
                <div className="mb-2">
                  <select name="" className='form-control' id="">
                    <option value="">Select a Group</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input type="submit" className='btn btn-success' value='Create' />
                  <Link to={'/contact/list'} className='btn btn-dark ms-2'>Close</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
