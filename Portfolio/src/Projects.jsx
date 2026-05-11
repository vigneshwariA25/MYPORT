// import "./Projects.css";
// import Gamingapp from "./assets/Gaming app.jpg";
// import  Reactportfolio from "./assets/React portfolio.png";
// import Todo from "./assets/Todo.png";


// function Projects() {
//   // Use the imported images here
//   const projects = [
//     {
//       title: "Gaming App",
//       image: Gamingapp,
//        description:
//       "A gaming application with attractive UI, game listings, and interactive components. Built to explore UI design and user interaction concepts.",
//     tech: "HTML, CSS, JavaScript",
//     },
//     {
//       title: "React Portfolio Website",
//       image: Reactportfolio,
//        description:
//       "A personal portfolio built using React as a Single Page Application (SPA). Includes projects, skills, and contact sections.",
//     tech: "React, CSS, Vite",
//     },
//     {
//       title: "Todo App",
//       image: Todo,
//       description:
//       "A Todo application to add, delete, and manage daily tasks. Focused on CRUD operations and state management.",
//     tech: "React, JavaScript",
//     },
//     // add more projects as needed
//   ];

//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-card">
//         <h2>My Projects</h2>
//         <hr />
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div key={index} className="project-item">
//               <img src={project.image} alt={project.title} />
//               <h3>{project.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import { useState } from "react";
import "./Projects.css";
import Gamingapp from "./assets/Gaming app.jpg";
import Reactportfolio from "./assets/React portfolio.png";
import Todo from "./assets/Todo.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Gaming App",
      image: Gamingapp,
      description:
        "A gaming application with attractive UI, game listings, and interactive components. Built to explore UI design and user interaction concepts.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "React Portfolio Website",
      image: Reactportfolio,
      description:
        "A personal portfolio built using React as a Single Page Application (SPA). Includes projects, skills, and contact sections.",
      tech: "React, CSS, Vite",
    },
    {
      title: "Todo App",
      image: Todo,
      description:
        "A Todo application to add, delete, and manage daily tasks. Focused on CRUD operations and state management.",
      tech: "React, JavaScript",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-card fade-in">
        <h2>My Projects</h2>
        <hr />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 POPUP MODAL */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p>
              <strong>Technologies:</strong> {selectedProject.tech}
            </p>
            <button onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
