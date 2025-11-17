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
            <span className="text-purple-400"> Full Stack Developer</span> with hands-on experience building
            real-world applications using the MERN stack. I hold an
            <span className="text-purple-400"> M.Tech in AI & Data Science</span> from VIT Bhopal University.
          </p>

          <p className="transition-all duration-500 delay-200">
            I am working as a <span className="text-purple-400">Software Development Instructor at NxtWave</span>,
            mentoring learners in HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js,
            MongoDB, SQL, and Git. My role includes evaluating assignments, resolving
            coding issues, and guiding students through full stack projects.
          </p>

          <p className="transition-all duration-500 delay-300">
            Previously, I worked as a <span className="font-semibold text-white">Full Stack Developer at NestBotics Pvt. Ltd.</span>,
            where I built responsive React interfaces, developed backend APIs using Node.js
            and Express, and worked with MySQL & MongoDB databases. I also have over
            <span className="text-purple-400 font-semibold"> 4 years of technical writing experience</span> at JavaTpoint,
            specializing in documentation for web development and programming.
          </p>

          <p className="transition-all duration-500 delay-400">
            I enjoy creating scalable applications, solving complex problems, and guiding
            aspiring developers. I'm always exploring new technologies to expand my skill set.
          </p>

          <p className="text-lg font-semibold text-white">
            🚀 Let’s connect and build impactful products together!
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

          {/* Experience Card */}
          
        </div>
      </div>
    </div>
  );
};

export default About;