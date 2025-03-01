import React from "react";


const Education =({isVisible})=>{


    return(

        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              institution: "VIT Bhopal University",
              degree: "M.Tech in Artificial Intelligence and Data Science",
              duration: "Aug. 2023 - June 2025",
            },
            {
              institution: "ABES Engineering College, Ghaziabad",
              degree: "Master of Computer Applications (MCA)",
              duration: "Aug. 2018 - June 2020",
            },
          
          ].map((education, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-purple-500/25 hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible.education ? 1 : 0,
                transform: isVisible.education ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{education.institution}</h3>
                  <p className="text-purple-400">{education.degree}</p>
                </div>
                {education.duration && (
                  <span className="text-gray-400 font-medium">{education.duration}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    )

}


export default Education;