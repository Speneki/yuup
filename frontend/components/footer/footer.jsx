import React from 'react';

class Footer extends React.Component {
    render() { 
    return (
        <div>
            <br/>
            <div className="footer-container">
                <div className="footer-info">
                    <ul>About
                        <li><a href="https://github.com/Speneki/yuup">About Yuup</a></li>
                    </ul> 
                    <ul>Discover</ul>
                    <ul>Other</ul>
                    <ul>Stuff</ul>
                </div>
                <img className = "footer" src = "assets/footer.png" />
                <p className="copythat">Many things on this site are inspired by or registered trademarks of Yelp ©.</p>
            </div>
        </div>
    )
    }
}

export default Footer;