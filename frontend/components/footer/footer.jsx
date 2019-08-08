import React from 'react';

class Footer extends React.Component {
    render() { 
    return (
        <>
            <br/>
            <div className="footer-container">
                <div className="footer-info">
                    <ul className="fooooter">About
                        <li><a href="https://github.com/Speneki/yuup">About Yuup</a></li>
                        <li><a href="">Get a reservation</a></li>
                    </ul> 

                    <ul className="fooooter">Discover
                        <li><a href="mailto:spencerwilliamtassone@gmail.com">Email me</a></li>
                        <li><a href="">Phone</a></li>
                    </ul>

                    <ul>Other</ul>
                    <ul>Stuff</ul>
                </div>
                <img className="footer" src={window.footer} />
                <p className="copythat">Many things on this site are inspired by or registered trademarks of Yelp ©.</p>
            </div>
        </>
    )
    }
}

export default Footer;