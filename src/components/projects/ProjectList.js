import React from "react";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  const projectList = projects.map(project => {
    return <ProjectSummary key={project.id} project={project} />;
  });
  return <div className="project-list section">{projects && projectList}</div>;
};

export default ProjectList;
