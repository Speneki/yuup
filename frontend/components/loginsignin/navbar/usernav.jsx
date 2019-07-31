import React from 'react'

const UserNav = (props) => {
    return (
        <div className="navBar">
            <div>
                <p>links to my stuff</p>
            </div>
            <div className="user-nav">
                <img className="profile-icon" src="https://ask.libreoffice.org/m/default/media/images/nophoto.png?v=20" alt="default icon" />
                <button onClick={props.logout}>	▾ </button>
            </div>
        </div>
    )
}
    
export default UserNav