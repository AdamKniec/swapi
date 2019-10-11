import React from 'react';

const ProfileView = () => {
    return (
        <div className="col-8">
            <h2>Luke Skywalker</h2>
            <h3>Human</h3>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                </li>
            </ul>
        </div>
    )
}

export default ProfileView;