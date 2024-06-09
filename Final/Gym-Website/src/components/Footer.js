import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer() {
    // 使用 useState(false) 宣告了一個名為 showBackToTop 的狀態變數
    const [showBackToTop, setShowBackToTop] = useState(false);

    // useEffect used to trace the up-to-down page，according to the position of the page to update the showBackToTop state
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 550) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        // 添加滾動event的監聽器，在組件卸載時使用 window.removeEventListener 來移除監聽器
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="footer container-fluid text-white">
                <div className="row pt-5">
                {/* This is Bootstrap's grid system format */}
                    <div className="contact col-lg-3 col-sm-6 mb-5 ps-sm-5 ps-lg-0">
                        <h4 className="mb-4">Get In Touch</h4>
                        <p><i className="fa fa-map-marker-alt me-2"></i>新竹市大學路1001號</p>
                        <p><i className="fa fa-phone-alt me-2"></i>+886 091234567</p>
                        <p><i className="fa fa-envelope me-2"></i>info@example.com</p>
                    </div>
                    <div className="links col-lg-3 col-sm-6 mb-5">
                        <h4 className="mb-4">Quick Links</h4>
                        <div className="d-flex flex-column justify-content-start link">
                            {/* Link is from react router */}
                            {/* to = "/" is back to home page */}
                            <Link className="text-white mb-2" to="/"><i className="fa fa-angle-right me-2"></i>Home</Link>
                            <Link className="text-white mb-2" to="/about"><i className="fa fa-angle-right me-2"></i>About Us</Link>
                            <Link className="text-white mb-2" to="/features"><i className="fa fa-angle-right me-2"></i>Our Features</Link>
                            <Link className="text-white" to="/contact"><i className="fa fa-angle-right me-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    <div className="hours col-lg-3 col-sm-6 mb-5">
                        <h4 className="mb-4">Opening Hours</h4>
                        <h5 className="text-white">Monday - Friday</h5>
                        <p>8.00 AM - 9.00 PM</p>
                        <h5 className="text-white">Saturday - Sunday</h5>
                        <p>10.00 AM - 8.00 PM</p>
                    </div>
                </div>
                <div className="container border-top border-dark pt-5">
                    <p className="m-0 text-center text-white">
                        &copy; <Link className="text-white fw-bold " to="/">Your Site Name</Link>. All Rights Reserved. Designed by
                        <Link className="text-white fw-bold " to="/"> ED314</Link>
                    </p>
                </div>
            </div>

            {/* showBackToTop is boolean value */}
            {showBackToTop && (
                <button onClick={scrollToTop} className="back-to-top btn ">
                    <i className="fa fa-angle-double-up"></i>
                </button>
            )}
        </>
    );
}

