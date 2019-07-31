import React from 'react';

class Footer extends React.Component {
    render() { 
    return (
        <div>
            <br/>
            <div className="footer-container">
                <div className="footer-info">
                    <p>About</p>
                    <p>Discover</p>
                    <p>Other</p>
                    <p>Stuff</p>
                </div>
                <img className = "footer" src = "assets/footer.png" />
                <p className="copythat">Many things on this site are inspired by or registered trademarks of Yelp ©.</p>
            </div>
        </div>
    )
    }
}

export default Footer;