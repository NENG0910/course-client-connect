import React from "react";

const ProfileComponent = (props) => {
  let { currentUser } = props;

  return (
    <div>
      {!currentUser && <div>You must login to visit profile page.</div>}
      {currentUser && (
        <div>
          <h1>In profile</h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>{currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
