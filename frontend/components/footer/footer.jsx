import React from 'react';
// import footer from '../../../app/assets/images/footer.png';

class Footer extends React.Component {
    render() { 
    return (
        <>
            <br/>
            <div className="footer-container">
                <div className="footer-info">
                    <ul>About
                        <li><a href="https://github.com/Speneki/yuup">About Yuup</a></li>
                        <li><a href="">Get a reservation</a></li>
                    </ul> 
                    <ul>Discover</ul>
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