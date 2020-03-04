import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            eius? Suscipit velit non dolore magni inventore odio modi dolorum!
            Quis reprehenderit praesentium itaque facilis nisi ipsa? Incidunt
            corporis voluptatibus necessitatibus.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by conspir0</div>
          <div>4th March, 11pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
