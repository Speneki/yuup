import React from 'react'

const UserNav = (props) => {
    return (
        <div className="navBar">
            <div className="buttons">
                <a href="#">Yuup</a>
                <a target ="_blank" href="https://speneki.github.io/">Portfolio</a>
                <a target="_blank" href="https://github.com/Speneki">Git Hub</a>
                <a target="_blank" href="https://www.linkedin.com/in/spencer-tassone-80a6218b/">LinkedIn</a>
            </div>
            <div className="rightSide">
                <a><i className="fas fa-comment-alt"></i></a>
                <a><i className="fas fa-bell"></i></a>    
                <div className="user-nav">
                    <img className="profile-icon" src={props.currentUser.photoUrl} alt="default icon" />
                    <button className="profile-button" onClick={props.logout}>	▾ </button>
                </div>
            </div>
        </div>
    )
}
    
export default UserNav