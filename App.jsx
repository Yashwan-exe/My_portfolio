import React, { useState } from 'react';
import {
  User,
  Code,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Award,
  Book,
  Menu,
  X,
} from 'lucide-react';

// Main App component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navbar = () => (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Sri Yashwanthan</h1>
        {/* Hamburger menu button for mobile */}
        <button className="menu-toggle-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
        {/* Navigation links, hidden by default on mobile, shown when menu is open */}
        <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#about" onClick={toggleMenu}><User className="icon" />Who am I?</a></li>
          <li><a href="#projects" onClick={toggleMenu}><Briefcase className="icon" />My Work</a></li>
          <li><a href="#skills" onClick={toggleMenu}><Code className="icon" />Expertise</a></li>
          <li><a href="#education" onClick={toggleMenu}><Book className="icon" />Education</a></li>
          <li><a href="#certifications" onClick={toggleMenu}><Award className="icon" />Certifications</a></li>
          <li><a href="#contact" onClick={toggleMenu}><Mail className="icon" />Get in touch</a></li>
        </ul>
      </div>
    </nav>
  );

  const About = () => (
    <div className="section about-me">
      <div className="container about-container">
        <div className="about-image">
          {/*
            FIX: Correctly reference the image.
            
            1. Move your 'My_picture.jpeg' file to the 'public' folder of your React project.
            2. Then, you can change the 'src' attribute below to:
               src={process.env.PUBLIC_URL + '/My_picture.jpeg'}
            
            For now, we'll keep a placeholder.
          */}
          <img
            src={process.env.PUBLIC_URL + '/My_picture.jpeg'}
            alt="Sri Yashwanthan"
            className="profile-photo"
          />
        </div>
        <div className="about-content">
          <h2 className="section-title">Who am I?</h2>
          <p className="text-lg">
            With a strong passion for software development, I'm Sri Yashwanthan, and I love building scalable, real-world tech solutions. I have a unique background that combines knowledge of digital circuit design with hands-on experience in cloud-based CRM platforms and modern web technologies. My skills range from C and SQL to modern frontend development with React, all backed by a solid understanding of version control with Git and GitHub. I'm always looking for new challenges and opportunities to apply my diverse skill set.
          </p>
        </div>
      </div>
    </div>
  );

  const Projects = () => {
    const projectList = [
      { name: 'SmarTeens Initiative', description: 'As the team lead for SmarTeens, I was responsible for both the technical direction and team coordination. I managed version control with GitHub, handled hosting on Hostinger, and guided the project from its initial concept to a fully functional prototype.' },
      { name: 'Salesforce Development & Administration', description: 'I built a strong foundation in Salesforce by working with Lightning Web Components, Apex triggers, Visualforce pages, and key administrative features like object configuration and flows. This experience was validated when I earned the Salesforce Expeditioner badge.' },
      { name: 'Interactive Portfolio Website', description: 'I developed this responsive and dynamic portfolio website using React. It serves as a live demonstration of my front-end development skills, including my proficiency in building component-based UIs and my attention to detail in creating a clean, modern user experience.' },
    ];

    return (
      <section className="section projects">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="projects-grid">
            {projectList.map((proj, idx) => (
              <div key={idx} className="project-card">
                <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
                <p className="text-gray-300">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Skills = () => (
    <div className="section skills">
      <div className="container">
        <h2 className="section-title">Expertise</h2>
        <ul className="skills-list">
          <li className="skill-item"><Code className="icon" />React.js</li>
          <li className="skill-item"><Code className="icon" />HTML & CSS</li>
          <li className="skill-item"><Code className="icon" />JavaScript (ES6+)</li>
          <li className="skill-item"><Code className="icon" />Salesforce (LWC, Apex)</li>
          <li className="skill-item"><Code className="icon" />C Programming</li>
          <li className="skill-item"><Code className="icon" />SQL</li>
          <li className="skill-item"><Briefcase className="icon" />RESTful APIs</li>
          <li className="skill-item"><Github className="icon" />Git & GitHub</li>
        </ul>
      </div>
    </div>
  );

  const Education = () => (
    <div className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3 className="text-xl font-semibold">B.E. in Electronics and Communication Engineering</h3>
            <p className="text-gray-300">Loyola-Icam College of Engineering and Technology</p>
            <p className="text-gray-400">2022 - 2026</p>
            <p className="text-gray-400">CGPA: 6.65 (VI Semester)</p>
          </div>
          <div className="education-item">
            <h3 className="text-xl font-semibold">High School</h3>
            <p className="text-gray-300">St.Bede's Anglo Indian Higher Secondary School</p>
            <p className="text-gray-400">2009 - 2022</p>
            <p className="text-gray-400">12th: 93.16%, 10th: 83%</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Certifications = () => (
    <div className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <ul className="certifications-list">
          <li className="cert-item"><Award className="icon" />Salesforce Expeditioner Badge</li>
        </ul>
      </div>
    </div>
  );

  const Contact = () => (
    <div className="section contact">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <p className="text-lg mb-6">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me!
        </p>
        <div className="contact-info">
          <h3 className="text-xl font-semibold">Email: <a href="mailto:gdyash2003@gmail.com" className="email-link">gdyash2003@gmail.com</a></h3>
          <a href="https://www.linkedin.com/in/yashwanth2109" target="_blank" rel="noopener noreferrer" className="contact-btn secondary-btn">
            <Linkedin className="icon" /> LinkedIn
          </a>
          <a href="https://github.com/Yashwan-exe/" target="_blank" rel="noopener noreferrer" className="contact-btn secondary-btn">
            <Github className="icon" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Sri Yashwanthan. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/yashwanth2109" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="icon" /></a>
          <a href="https://github.com/Yashwan-exe/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="icon" /></a>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="app-container">
      <style>{`
        /* This is a simulation of a SASS stylesheet with nesting and variables */
        /* SASS Variables */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        
        :root {
          --primary-color: #6366f1; /* indigo-500 */
          --secondary-color: #a5b4fc; /* indigo-300 */
          --bg-dark: #0f172a; /* slate-900 */
          --bg-light: #1e293b; /* slate-800 */
          --text-light: #f8fafc; /* slate-50 */
          --text-muted: #94a3b8; /* slate-400 */
          --card-bg: #334155; /* slate-700 */
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        /* --- Global styles for a stable layout --- */
        html, body {
          /* Remove default margins and padding */
          margin: 0;
          padding: 0;
          /* Ensure padding and borders don't add to element width */
          box-sizing: border-box;
          /* FIX: Explicitly set width to 100% and hide overflow */
          width: 100%;
          height: 100%;
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }

        body {
          /* FIX: Explicitly hide horizontal overflow */
          overflow-x: hidden;
        }
        /* --- End of Global styles for a stable layout --- */


        /* Base styles and imports */
        .app-container {
          background-color: var(--bg-dark);
          color: var(--text-light);
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
          scroll-behavior: smooth;
          /* FIX: Ensure the entire app container also hides overflow */
          overflow-x: hidden;
        }
        
        .icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
          display: inline-block;
          vertical-align: middle;
        }

        .container {
          /* Re-added max-width to constrain content */
          max-width: 1280px; 
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          /* FIX: Prevent overflow on the container itself */
          box-sizing: border-box;
          width: 100%;
        }

        /* Navbar */
        .navbar {
          width: 100%;
          z-index: 1000;
          background-color: var(--bg-dark);
          padding: 1rem;
          box-shadow: var(--shadow-lg);
          border-bottom: 1px solid rgba(100, 116, 139, 0.2);
          
          /* FIX: Make navbar fixed to the top */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;

          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .navbar-brand {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 0;
          }

          .menu-toggle-btn {
            display: none; /* Hidden by default */
            background: none;
            border: none;
            color: var(--text-light);
            cursor: pointer;
            padding: 0;
            font-size: 1.5rem;
            
            @media (max-width: 768px) {
              display: block; /* Show on mobile */
            }
          }

          .navbar-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 1.5rem;
            align-items: center;

            a {
              color: var(--text-muted);
              transition: color 0.3s ease;
              display: flex;
              align-items: center;
              &:hover {
                color: var(--primary-color);
              }
            }
            
            @media (max-width: 768px) {
              display: none; /* Hide on mobile by default */
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background-color: rgba(15, 23, 42, 0.95);
              box-shadow: var(--shadow-lg);
              padding: 1rem 0;
              gap: 1rem;
              /* FIX: Ensure mobile menu also uses border-box to prevent overflow */
              box-sizing: border-box;
              &.show {
                display: flex; /* Show when 'show' class is present */
              }
            }
          }
        }
        
        /* Add padding to the main content to clear the fixed navbar */
        main {
          padding-top: 5rem; /* Adjust this value if the navbar height changes */
        }

        /* Sections */
        .section {
          padding-top: 4rem;
          padding-bottom: 4rem;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        /* FIX: Applying background colors to the sections directly, which fill the full width */
        .about-me, .skills, .certifications {
          background-color: var(--bg-dark);
        }
        .projects, .education, .contact {
          background-color: var(--bg-light);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 2rem;
          text-align: center;
        }
        
        /* About Section */
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;

          @media (min-width: 768px) {
            flex-direction: row;
            text-align: left;
            gap: 4rem;
          }
        }
        
        .about-image {
          display: flex;
          justify-content: center;
          width: 100%;
          @media (min-width: 768px) {
            width: 40%;
          }
        }

        .profile-photo {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--primary-color);
          box-shadow: var(--shadow-lg);
          
          @media (min-width: 768px) {
            width: 250px;
            height: 250px;
          }
        }

        .about-content {
          width: 100%;
          @media (min-width: 768px) {
            width: 60%;
            text-align: left;
          }
        }
        
        .about-content > p {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          @media (min-width: 768px) {
            margin: 0;
          }
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .project-card {
          background-color: var(--card-bg);
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: var(--shadow-lg);
          transition: transform 0.3s ease;
          text-align: left;
          &:hover {
            transform: scale(1.05);
          }
        }

        /* Skills Section */
        .skills-list {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        .skill-item {
          background-color: var(--bg-light);
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: var(--shadow-lg);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          &:hover {
            transform: scale(1.05);
          }
        }

        /* Education & Certifications */
        .education-list, .certifications-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
          list-style: none;
          padding: 0;
          
          .education-item, .cert-item {
            background-color: var(--card-bg);
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-lg);
            text-align: left;
            transition: transform 0.3s ease;
            &:hover {
              transform: scale(1.05);
            }
            
            & > h3, & > p {
              margin: 0;
            }
            & > h3 {
              margin-bottom: 0.5rem;
            }
          }
        }
        
        /* Contact Section */
        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        
        .email-link {
          color: var(--primary-color);
          text-decoration: none;
          transition: color 0.3s ease;
          &:hover {
            text-decoration: underline;
            color: var(--secondary-color);
          }
        }
        
        @media (min-width: 640px) {
          .contact-info {
            flex-direction: row;
          }
        }

        .contact-btn {
          padding: 0.75rem 1.5rem;
          font-weight: 700;
          border-radius: 9999px;
          transition: transform 0.3s ease, background-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          
          &:hover {
            transform: scale(1.05);
          }
        }

        .primary-btn {
          background-color: var(--primary-color);
          color: var(--bg-dark);
          &:hover {
            background-color: #4f46e5;
          }
        }

        .secondary-btn {
          background-color: var(--card-bg);
          color: var(--text-light);
          &:hover {
            background-color: #475569;
          }
        }

        /* Footer */
        .footer {
          background-color: var(--bg-dark);
          text-align: center;
          padding: 1.5rem;
          color: var(--text-muted);
          border-top: 1px solid rgba(100, 116, 139, 0.2);

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            @media (min-width: 640px) {
              flex-direction: row;
              justify-content: space-between;
            }
          }
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          a {
            color: var(--text-muted);
            transition: color 0.3s ease;
            &:hover {
              color: var(--primary-color);
            }
          }
        }
      `}</style>
      <Navbar />
      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
