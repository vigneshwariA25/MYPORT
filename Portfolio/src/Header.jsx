import { Link } from "react-router-dom";
import PROFILE from "./assets/PROFILE.jpg";
import "./Header.css";
import Footer from './Footer';
export default function Header() {
  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <h1 className="title">Vigneshwari Portfolio</h1>

        <div className="profile-circle">
          <img src={PROFILE} alt="Vigneshwari" />
        </div>

        <h2>Hi, I'm Vigneshwari</h2>
        <p>Welcome to my creative space. Explore my journey and projects!</p>

        <div className="btn-group">
          <Link to="/about" className="btn blue">
            About
          </Link>
          <Link to="/skills" className="btn green">
            Skills
          </Link>
          <Link to="/projects" className="btn orange">
            Projects
          </Link>
          <Link to="/contact" className="btn purple">
            Contact
          </Link>
        </div>
        <div>
        <Footer />
      </div>
      </div>
    </section>
  );
}


// import React from "react";
// import "./Header.css";

// export default function Header() {
//   return (
//     <section className="hero" id="home">
//       <div className="hero-content fade-in">
//         <h1 className="title">Vinothini Portfolio</h1>

//         <div className="profile-circle">
//           <img
//             src="https://i.pravatar.cc/300"
//             alt="Vinothini"
//           />
//         </div>

//         <h2>Hi, I'm Vinothini</h2>
//         <p>Welcome to my creative space. Explore my journey and projects!</p>

//         <div className="btn-group">
//           <a href="#about" className="btn blue">About</a>
//           <a href="#projects" className="btn orange">Projects</a>
//           <a href="#contact" className="btn purple">Contact</a>
//         </div>
//       </div>
//     </section>
//   );
// }