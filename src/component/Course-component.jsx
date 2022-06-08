import React from "react";
import { useNavigate } from "react-router-dom";

const CourseComponent = (props) => {
  const navigate = useNavigate();
  let { currentUser } = props;
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      {!currentUser && (
        <div style={{ padding: "3rem" }}>
          <p>You must login brfore to see your course</p>
          <button onClick={handleTakeToLogin} className="btn btn-primary">
            Login
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "student" && (
        <div>
          <p>This is {currentUser.user.role} 's page.</p>
        </div>
      )}
      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <p>This is {currentUser.user.role} 's page.</p>
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
