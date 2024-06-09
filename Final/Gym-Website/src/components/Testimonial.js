import React from 'react'
import testimonial1 from '../assets/image/testimonial-1.jpg'
import testimonial2 from '../assets/image/testimonial-2.jpg'
import testimonial3 from '../assets/image/testimonial-3.jpg'

export default function Testimonial() {

    const myStyle = {
        minHeight: '450px'
    };

    return (
        <div id="testimonial" className="container-fluid-lg position-relative my-5">
            <div className="container-lg">
                <div className="row px-lg-3 align-items-center">
                    <div className="col-md-6 bg-secondary">
                        <div className="d-flex align-items-center px-3" style={myStyle}>
                            {/* 跑馬燈結構: Bookstrap內的功能(classname 也是)，carousel-indicators：Buttons to switch走馬燈的項目。
                                                                carousel-item：每個項目包含客戶的圖片和文本。*/}
                            <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            <img className="rounded-circle bg-dark p-2 img-fluid" src={testimonial1} alt="Image" />
                                            <div className="ps-4">
                                                <h4>Client Name</h4>
                                                <p className="m-0">邦哥</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        這是我遇過最舒適的健身環境，設備完善又乾淨，每次來都讓我心情愉快
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            {/* src is img source, alt is alter option */}
                                            <img className="rounded-circle bg-dark p-2 img-fluid" src={testimonial2} alt="Image" />
                                            <div className="ps-4">
                                                <h4>Client Name</h4>
                                                <p className="m-0">宋哥</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        這裡的教練專業又友善，讓我很快就愛上運動了
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            <img className="rounded-circle bg-dark p-2 img-fluid" src={testimonial3} alt="Image" />
                                            <div className="ps-4">
                                                <h4>Client Name</h4>
                                                <p className="m-0">小朱</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                        我進步很大是因為這裡的訓練方案很有效，也有很棒的社群氛圍，大家一起努力真的很有動力！
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-md-3 d-none d-md-block">
                            <h4 className="display-xl-4 display-5 mb-4 text-white">What Our Clients Say?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
