import React from 'react'
import team1 from '../assets/image/tea-1.jpg'
import team2 from '../assets/image/tea-2.jpg'
import team3 from '../assets/image/tea-3.jpg'
import team4 from '../assets/image/tea-4.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Team() {

    return (
        // container: Bootstrap's container，provide appropriate width and distance
        <div className="container pt-5 team">
            <div id="heading" className="d-flex flex-column text-center mb-5">
                <h4 className="font-weight-bold">Our Trainers</h4>
                <h3 className="display-4 font-weight-bold">Meet Our Expert Trainers</h3>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team1} alt="" />
                        <div className="card-social d-flex align-items-center justify-content-center">
                            {/* set the default link to home */}
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="card-body bg-secondary">
                            <h4 className="card-title">Trainer Name</h4>
                            <p className="card-text">Bojhih</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team2} alt="" />
                        <div className="card-social d-flex align-items-center justify-content-center">
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="card-body bg-secondary">
                            <h4 className="card-title">Trainer Name</h4>
                            <p className="card-text">Caterpie</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team3} alt="" />
                        <div className="card-social d-flex align-items-center justify-content-center">
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="card-body bg-secondary">
                            <h4 className="card-title ">Trainer Name</h4>
                            <p className="card-text">Ajaja</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team4} alt="" />
                        <div className="card-social d-flex align-items-center justify-content-center">
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0" to="/home"><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="card-body bg-secondary">
                            <h4 className="card-title ">Trainer Name</h4>
                            <p className="card-text">Arbok</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
