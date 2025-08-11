import React from "react";

import pocketNotes from '../../assets/Projects/pocketNotes.png';
import lifeDiary from '../../assets/Projects/lifeDiary.PNG';
import Portfolio from "../../assets/Projects/portfolio.PNG";
import CourseMgmt from '../../assets/Projects/CourseImage.png';

const Projects  = ()=>{

    return(

        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
           
             {
                title: "Course Management System - RBAC",
                description: "A Full-Stack Student Management System featuring Role-Based Dashboards for Students, Teachers, and Admins.",
                tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bcrypt.js"],
                image: CourseMgmt
              },
             {
                title: "My Portfolio",
                description: "A responsive and modern portfolio website showcasing my skills, projects, and contact details.",
                tech: ["React.js", "TailwindCSS", "Email-Js"],
                image: Portfolio
              },
              {
                title: "Pocket Notes Application",
                description: "A MERN stack note-taking app with group organization, real-time updates, and search functionality.",
                tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
                image: pocketNotes
              },
              
            
            
          ].map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-300 transition-colors duration-300 hover:bg-purple-500/20 hover:text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )


}


export default Projects;