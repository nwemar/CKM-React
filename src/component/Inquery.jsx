import React from 'react';
import emailjs from '@emailjs/browser';
import '../style/inquery.scss'

const Inquery = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_ccrbvja', 'template_xzvdqh6', e.target, 'vkmLZq0nBWmCp_gl7')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // var email = require('emailjs');

        var server = emailjs.server.connect({
            user: 'capital.nwemarwin@gmail.com',
            password: 'nwemarwin123!',
            host: 'smtp.gmail.com',
            ssl: true
        });

        server.send({
            text: 'Hey howdy',
            from: 'NodeJS',
            to: 'capital.ohnmarkyi@gmail.com',
            cc: '',
            subject: 'Greetings'
        }, function (err, message) {
            console.log(err || message);
        });
    };
    return (
        <form className='inquery' onSubmit={sendEmail}>
            <div className="input-container">
                <label>Your Name </label>
                <input type="text" name='username' placeholder='enter your name' />
            </div>
            <div className="input-container">
                <label>Your Email </label>
                <input type="email" name='useremail' placeholder='enter your email' />
            </div>
            <div className="input-container">
                <label>Leave Message </label>
                <textarea name="message" placeholder='enter leave message'></textarea>
            </div>
            <input type="submit" className='inquery-button' value="Send" />
        </form>
    )
}

export default Inquery