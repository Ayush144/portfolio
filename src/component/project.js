import React from "react";
function Project(props) {
  return (
    <div key={props.project.id}>
      <div>{props.project.title}</div>
      <div>{props.project.description}</div>
    </div>
  );
}
export default Project;
