import React from "react";
import profileImage from '../../assets/Profile/sumitProfile.png';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-12 mt-4 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        About Me
      </h2>

      <div className="lg:pl-[100px] grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-lg text-gray-300 lg:pt-16">

          <p className="transition-all duration-500 delay-100">
            Hello! I'm <span className="font-semibold text-white">Sumit Kumar</span>, a 
            <span className="text-purple-400"> Full Stack / MERN Developer</span> with 1+ years of experience 
            building scalable, production-ready web applications using React.js, Node.js, Express.js, and MongoDB. 
            I hold an <span className="text-purple-400">M.Tech in AI & Data Science</span> from VIT Bhopal University 
            and an MCA from ABES Engineering College.
          </p>

          <p className="transition-all duration-500 delay-200">
            I am currently working as a <span className="text-purple-400">Software Development Engineer (MERN) at NxtWave</span>, 
            contributing to small full-stack projects, building frontend interfaces, developing backend APIs, integrating databases, 
            and deploying production-ready applications.
          </p>

          <p className="transition-all duration-500 delay-300">
            Previously, I worked as a <span className="font-semibold text-white">Full Stack Developer at NestBotics Pvt. Ltd.</span>, 
            where I designed responsive UI using React.js, Tailwind CSS, and Material-UI, developed RESTful APIs with 
            Node.js and Express, and managed MySQL and MongoDB databases. I collaborated in Agile teams to deliver 
            end-to-end features with clean code and proper state management.
          </p>

          <p className="transition-all duration-500 delay-400">
            I enjoy creating clean, scalable applications, solving complex problems, and continuously improving development workflows. 
            I am always learning new technologies to expand my skills and deliver impactful digital solutions.
          </p>

          <p className="text-lg font-semibold text-white">
            🚀 Let’s connect and build innovative products together!
          </p>

        </div>

        {/* Profile Section */}
        <div className="relative mb-1">
          <div className="mb-24 rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover lg:w-[350px] lg:h-[400px] transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
