import PROJECTS from "./projectslist";
import React from "react";
import Project from "./project.js";
function Projects() {
  return (
    <div>
      {PROJECTS.map((PROJECT) => {
        return (
          <div>
            {console.log(PROJECT)}
            <Project project={PROJECT} />
          </div>
        );
      })}
    </div>
  );
}
export default Projects;
