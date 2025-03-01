import React, {useState} from "react";

import tailwind from  '../../assets/skills/tailwind.png';
import vscode from '../../assets/skills/vscode.png';
import css from '../../assets/skills/css.png';
import nodejs from '../../assets/skills/nodejs.png';
import ubuntu from '../../assets/skills/ubuntu.png';
import reactjs from '../../assets/skills/reactjs.png';
import postman from '../../assets/skills/postman.png'; 
import html from '../../assets/skills/html.png';
import materialui from '../../assets/skills/material-ui.png';
import git from '../../assets/skills/git.png';
import github from '../../assets/skills/github.png';
import express from '../../assets/skills/expressjs.png';
import javascript from '../../assets/skills/javascript.png';
import mysql from '../../assets/skills/mysql.png';
import mongoDb from '../../assets/skills/mongodb.png';



const Skills  = ({isVisible})=>{

    const [activeTab, setActiveTab] = useState("Frontend");

    const skills = {
      Frontend: [
        { name: "React.js", image: reactjs },
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "JavaScript", image: javascript },
        { name: "Tailwind CSS", image: tailwind },
        { name: "Material-UI", image: materialui },
      ],
      Backend: [
        { name: "Node.js", image: nodejs },
        { name: "Express.js", image: express },
        {name: "MySQL", image:mysql},
        {  name: "MongoDB", image: mongoDb }
      ],
      Tools: [
        { name: "Visual Studio Code", image: vscode },
        { name: "Ubuntu", image: ubuntu },
        { name: "Postman", image: postman },
        { name: "Git", image: git },
        { name: "GitHub", image: github },
      ],
    };
  
  
    
  {/* Skill Card Component */}
  const SkillCard = ({ skill, index }) => (
    <div
      className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25"
      style={{
        transitionDelay: `${index * 50}ms`,
        opacity: isVisible.skills ? 1 : 0,
        transform: isVisible.skills ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="w-16 h-16 object-contain mb-3 transition-transform duration-300 hover:scale-110"
      />
      <span className="font-semibold text-white text-lg transition-colors duration-300 group-hover:text-purple-400">
        {skill.name}
      </span>
    </div>
  );
  

    return(

        <>

<div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Technical Expertise
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 lg:space-x-16 mb-8">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all 
                ${activeTab === tab ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
          {skills[activeTab].map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
        
        </>


    )

}


export default Skills;