import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutV1 = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="about-style-one bg-dark text-light" style={{ backgroundImage: "url(img/shape/7.png)" }}>
                                <ul className="check-list-item">
                                    <li>
                                        <h5>Professional Agency</h5>
                                        <p>Consectetur adipisci velitsed quia non numquam eius tempralabore et dolore magnam aliquam quaerat</p>
                                    </li>
                                    <li>
                                        <h5>Solutions Provider</h5>
                                        <p>Know more about digital direct response than virtually any digital marketing agency in the industry.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="about-style-one">
                                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">Providing the best service <br /> In <strong>digital</strong> marketing</h2>
                                <div className="thumb bg-cover" style={{ backgroundImage: "url(img/banner/2.jpg)" }}>
                                    
                                    <Link to="#" className="mfp-iframe popup-youtube video-play-button with-text mt-20" onClick={(e) => { e.preventDefault(); setOpen(true); }}>
                                        <div className="effect"></div>
                                        <span><i className="fa-solid fa-play"></i> OUR STORY</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Native Full-Screen Video Modal Container */}
            {isOpen && (
                <div 
                    onClick={() => setOpen(false)}
                    style={{
                        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', zIndex: 99999, transition: 'all 0.3s ease'
                    }}
                >
                    <div 
                        onClick={(e) => e.stopPropagation()} 
                        style={{ position: 'relative', width: '90%', maxWidth: '800px', aspectRatio: '16/9' }}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setOpen(false)}
                            style={{
                                position: 'absolute', top: '-40px', right: '0', background: 'none',
                                border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer'
                            }}
                        >
                            &times;
                        </button>
                        
                        {/* Embedded YouTube Frame */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://youtube.com"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '4px', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutV1;
