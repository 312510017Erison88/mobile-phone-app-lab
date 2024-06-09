import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function GymClass() {
    return (
        <div className="gym-class mb-5">
            <div className="row px-lg-3 pt-lg-0 pt-4 mt-5 mt-lg-0">
                <div className="col-md-6 p-0">
                    <div id="box-1" className="gym-box d-flex flex-column align-items-sm-start align-items-center align-items-md-end justify-content-center text-right text-white px-5">
                        <i className="flaticon-six-pack"></i>
                        <h3 className="display-4 mb-3 text-white">減脂</h3>
                        <p>
                        減脂不只是吃得少的飲食控制，同時還要兼顧營養均衡、蛋白質的攝取，吃對就能夠讓減脂事半功倍！
                        </p>
                        <Link to="/register" className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0">Join Now</Link>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div id="box-2" className="gym-box d-flex flex-column align-items-sm-start align-items-center justify-content-center text-left text-white px-5">
                        <i className="flaticon-bodybuilding"></i>
                        <h3 className="display-4 mb-3 text-white">增肌</h3>
                        <p className='text-center text-sm-start'>
                        肌肉可以燃燒更多熱量、幫助減脂、促進代謝；將儲存吃下去的澱粉變成肝醣儲存在肌肉，就不會變成肥肉堆起來
                        </p>
                        <Link to="/register" className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0">Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
