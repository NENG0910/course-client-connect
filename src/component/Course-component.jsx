import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = (props) => {
  const navigate = useNavigate();
  let { currentUser } = props;
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    CourseService.get(_id)
      .then((data) => {
        setCourseData(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ padding: "3rem" }}>
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
      {currentUser && courseData && courseData.length != 0 && (
        <div>
          <p>Here's the data from sever</p>
          {courseData.map((course) => (
            <div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <p className="card-text">
                    Student count: {course.students.length}
                  </p>
                  <button className="btn btn-primary">
                    Price: NT{course.price}
                  </button>
                </div>
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseComponent;