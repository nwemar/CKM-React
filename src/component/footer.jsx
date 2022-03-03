import React from 'react'
import '../style/footer.scss'
import 'font-awesome/css/font-awesome.min.css'


const footer = () => {
    return (
        <footer className='footer-section'>
            <div className='footer-contact'>

                <div className='footer-col'>
                    <h4>Find us</h4>

                </div>
                <div className='footer-col'>
                    <h4>Call us</h4>

                </div>
                <div className='footer-col'>
                    <h4>Mail us</h4>

                </div>
            </div>
            <div className='footer-contact'>
                <div className='footer-col'>

                    <i className='fa fa-map-marker'></i>
                    <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
                <div className='footer-col'>

                    <i className="fa fa-phone"></i>
                    <span>09 123456789</span>
                </div>
                <div className='footer-col'>

                    <i className="fa fa-envelope-open"></i>
                    <span>mail@info.com</span>
                </div>

            </div>
            <hr className='line-mg' />
            <div className='footer-logo'>

                {/* <div className='footer-image-logo'>
                    <img src='./images/logo.png' alt='CKM' />
                    <h4>Capital Knowledge</h4>
                </div> */}
                <div className='footer-social'>
                    <a href=""><i className="fa fa-facebook-f"></i></a>
                    <a href=""><i className="fa fa-twitter"></i></a>
                    <a href=""><i className="fa fa-instagram"></i></a>
                    <a href=""><i className="fa fa-linkedin-square"></i></a>
                    <a href=""><i className="fa fa-google-plus-square"></i></a>
                </div>
            </div>

            <div className='copyright'>
                <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                    <a href="#"> CKM</a>
                </p>
            </div>
        </footer >
    )
}

export default footer
