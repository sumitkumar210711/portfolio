import React from "react";

const Experience = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Professional Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* NxtWave Experience */}
        <div className="relative p-6 bg-gray-900 rounded-xl shadow-xl transition-all duration-300 hover:shadow-purple-500/25 hover:-translate-y-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-2xl font-bold text-white">NxtWave</h3>
            <span className="text-purple-400 font-medium">June 2025 - Present</span>
          </div>

          <h4 className="text-xl text-gray-300 mb-4">Software Development Instructor</h4>

          <ul className="space-y-3 text-gray-300">
            {[
              "Currently mentoring students in full stack web development with hands-on training in MERN stack technologies.",
              "Delivering live coding sessions and guiding learners through real-world projects built with HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL.",
              "Explaining advanced concepts such as authentication, API integration, and deployment using tools like Git, GitHub, and Postman.",
              "Helping learners debug and improve their code by sharing industry best practices and clean code principles.",
              "Facilitating assessments and feedback to track progress and reinforce strong programming fundamentals."
            ].map((responsibility, index) => (
              <li
                key={index}
                className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
              >
                <span className="text-purple-400 mt-1.5">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        {/* NestBotics Experience */}
        <div className="relative p-6 bg-gray-900 rounded-xl shadow-xl transition-all duration-300 hover:shadow-purple-500/25 hover:-translate-y-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-2xl font-bold text-white">NestBotics Pvt Ltd</h3>
            <span className="text-purple-400 font-medium">Sept. 2024 - March 2025</span>
          </div>

          <h4 className="text-xl text-gray-300 mb-4">Full Stack Developer Intern</h4>

          <ul className="space-y-3 text-gray-300">
            {[
              "Designed and developed responsive user interfaces using modern frontend technologies like React.js, Tailwind CSS, and Material-UI, ensuring a seamless user experience across devices.",
              "Engineered and maintained robust backend APIs using Node.js and Express.js, integrating MySQL and MongoDB for efficient data management.",
              "Implemented RESTful APIs to facilitate smooth communication between frontend and backend systems, enhancing the application's performance and scalability.",
              "Streamlined project workflows by automating deployment processes with CI/CD pipelines, resulting in improved development efficiency and reduced deployment times.",
              "Worked in an Agile environment, collaborating with cross-functional teams and employing tools like Git and GitHub for version control, ensuring adherence to best practices in software development."
            ].map((responsibility, index) => (
              <li
                key={index}
                className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
              >
                <span className="text-purple-400 mt-1.5">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
