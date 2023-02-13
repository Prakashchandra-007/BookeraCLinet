import React from "react";
import "./courseCard.css";
function CourseCard({image,style,children,children2,children3}) {

  return (
    <div className="courseCard">
      
      <img src={image} alt="course1img" className="course1img" />
      <h1 style={style}>{children}</h1>
      {/* <p style={style}>{children2}</p> */}
      {/* <h1 style={style}>Groking Coding Interview Patterns in Python</h1> */}
    </div>
  );
}

export default CourseCard;
