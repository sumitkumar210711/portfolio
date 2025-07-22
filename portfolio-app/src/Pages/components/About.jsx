import React from "react";


import profileImage from '../../assets/Profile/sumitProfile.png';

const About  = ()=>{

    return(
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 mt-4 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="lg:pl-[100px] grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-6 text-lg text-gray-300 lg:pt-16">
  <p className="transition-all duration-500 delay-100">
    Hello! I'm <span className="font-semibold text-white">Sumit Kumar</span>, a 
    <span className="text-purple-400"> Full Stack Developer</span> and educator with a passion for building scalable, high-quality web applications. 
    I’ve recently completed my <span className="text-purple-400">M.Tech in AI & Data Science</span> from VIT Bhopal University and am currently 
    working as a <span className="text-purple-400">Software Development Instructor at NxtWave</span>.
  </p>

  <p className="transition-all duration-500 delay-200">
    I specialize in full stack development using technologies like 
    <span className="text-purple-400"> React.js, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS</span>. 
    With experience from both academic projects and professional environments like 
    <span className="font-semibold text-white">NestBotics Pvt. Ltd.</span>, I focus on building responsive UIs, crafting secure APIs, 
    and delivering intuitive user experiences.
  </p>

  <p className="transition-all duration-500 delay-300">
    As an instructor, I’m passionate about <span className="text-purple-400 font-semibold">mentoring future developers</span> and 
    sharing industry-relevant skills through real-world MERN stack projects. 
    I enjoy solving complex problems, exploring new technologies, and contributing to the tech community.
  </p>

  <p className="text-lg font-semibold text-white">🚀 Let’s connect and grow together through knowledge and code!</p>
</div>


          
          {/* Profile image with hover effect */}
          <div className="relative mb-1">
            <div className="mb-24 rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
              <img 
                src={profileImage} 
                alt="Profile"
                className="object-cover lg:w-[350px] lg:h-[400px] transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            {/* Experience card with hover effect */}
            <div className="absolute bottom-12 lg:right-52 lg:bottom-16
            bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p className="font-bold text-2xl">6+</p>
              <p className="text-sm">Months Experience</p>
            </div>
          </div>
        </div>
      </div>
    )


}


export default About;