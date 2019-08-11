import React, {Component} from 'react';


//test purpose
const ProfileComponent = ({uid,handleLogout}) => {
    return (
        <div>
            <h1>profile</h1>
            <h2>This is user ID {uid}</h2>
            <button onClick={handleLogout}
            >Logout</button>
        </div>
    )
}


export default ProfileComponent;
