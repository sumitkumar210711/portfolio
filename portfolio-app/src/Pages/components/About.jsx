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
            {/* Added staggered animation to paragraphs */}
            <p className="transition-all duration-500 delay-100">
        Hello! I'm <span className="font-semibold text-white">Sumit Kumar</span>, a passionate/results-driven 
        <span className="text-purple-400"> Full Stack Developer</span> with expertise in modern web technologies. 
        Currently pursuing an <span className="text-purple-400">M.Tech in AI & Data Science</span>, 
        I blend strong technical foundations with creative problem-solving to build high-quality, scalable applications.
      </p>
      <p>
        With <span className="font-semibold text-white">over 6 months of hands-on experience</span>, 
        I specialize in developing <span className="text-purple-400">responsive and efficient</span> web applications using 
        <span className="text-purple-400"> React.js, Node.js, MongoDB, and Tailwind CSS</span>. 
        My expertise lies in crafting intuitive user interfaces, optimizing backend systems, and implementing RESTful APIs to deliver seamless user experiences.
      </p>
      <p className="transition-all duration-500 delay-300">

        I am always eager to <span className="text-purple-400 font-semibold">learn, innovate, and collaborate</span> on impactful projects. 
        Currently, I am seeking <span className="text-purple-400">full-time opportunities</span> where I can apply my skills in software developmemt or 
        full-stack development to build cutting-edge applications and contribute to a dynamic team.
      </p>
      <p className="text-lg font-semibold text-white">🚀 Let's connect and build something amazing together!</p>
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