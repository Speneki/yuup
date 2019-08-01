import React from 'react'

const UserNav = (props) => {
    return (
        <div className="navBar">
            <div className="buttons">
                <a href="#">My Site</a>
                <a href="https://github.com/Speneki">Git Hub</a>
                <a href="https://www.linkedin.com/in/spencer-tassone-80a6218b/">LinkedIn</a>
            </div>
            <div className="rightSide">
                <a href=""><i className="fas fa-comment-alt"></i></a>
                <a href=""><i className="fas fa-bell"></i></a>    
                <a className="user-nav">
                    <img className="profile-icon" src="https://ask.libreoffice.org/m/default/media/images/nophoto.png?v=20" alt="default icon" />
                    <button className="profile-button" onClick={props.logout}>	▾ </button>
                </a>
            </div>
        </div>
    )
}
    
export default UserNav