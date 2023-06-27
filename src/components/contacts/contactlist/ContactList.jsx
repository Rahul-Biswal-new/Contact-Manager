import React from "react";
import { Link } from "react-router-dom";

export default function ContactList() {
  return (
    <>
    <section className="contact-search p-3">
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold">
                Contact Manager
                <Link to={"/contact/add"} className="btn btn-primary ms-2">
                  <i className="fa fa-plus-circle me-2" /> New
                </Link>{" "}
              </p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quisquam fugiat id ad iste incidunt neque eaque,
                dolorem veritatis facilis iure officia itaque. Dolorem
                consequatur aliquam odit cumque excepturi. Corrupti, eveniet
                nesciunt.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="" className="row">
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Names"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="btn btn-outline-dark"
                      placeholder="Search "
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contact-list">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center  ">
                <div className="col-md-10">
                  <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="" className="img-fluid contact-img"/>
                </div>
                </div>
                <div className="col-md-7">
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
                  </ul>
                </div>

                <div className="col-md-1 d-flex flex-column align-items-center ">
                  <Link to={`/contact/view/:contactid`} className="btn btn-warning my-1" >
                    <i className="fa fa-eye"/>
                  </Link>
                  <Link to={`/contact/edit/:contactid`} className="btn btn-primary my-1" >
                    <i className="fa fa-pen"/>
                  </Link>
                  <button  className="btn btn-danger my-1" >
                    <i className="fa fa-trash"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
