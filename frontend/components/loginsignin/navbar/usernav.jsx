import React from 'react'

const UserNav = (props) => {

    debugger
    return (
        <div className="navBar">
            <div>
                <p>links to my stuff</p>
            </div>
            <div className="user-nav">
                <img className="profile-icon" src="yelp icon" alt="default icon" />
                <button onClick={props.logout}>	▾ </button>
            </div>
        </div>
    )
}

export default UserNav