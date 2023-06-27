import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
  ];

  const sortedSkills = skills.sort();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" border-2 border-red-300 my-2 py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/344237094_624479322879155_6353452616827709443_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFVo8W2IJmkK_Xn8Rf3rNb-isXvFakxJx-Kxe8VqTEnH4hMTAnxirHF_F0YcX6qsfOX8f4HuLZ1aSicjH4whZAp&_nc_ohc=deQZpr0FRcYAX8X-mpd&_nc_ht=scontent.fdac5-2.fna&oh=00_AfB1UEnwRI-ajcrghUFz2_W3ER6U6hk_ZlTpMDjblikkqw&oe=64928518"
              alt="About Us"
              className="w-8/12 border-4 border-red-400 mx-auto h-auto rounded-full"
            />
          </div>
          <div className="md:w-1/2 md:ml-4">
            <p className="text-gray-700">
              Welcome to our website! We are a team of passionate developers who
              love building web applications with React and Tailwind CSS.
            </p>
            <p className="text-gray-700 mt-4">
              Our goal is to create modern, user-friendly, and visually
              appealing web experiences for our clients. With React, we can
              build highly interactive and dynamic UIs, while Tailwind CSS
              allows us to quickly style and customize our components.
            </p>
            <p className="text-gray-700 mt-4">
              Whether you need a simple landing page or a complex web
              application, we have the expertise to bring your ideas to life.
              Our team follows best practices and stays up-to-date with the
              latest trends in web development, ensuring that your project is of
              the highest quality.
            </p>
            <p className="text-gray-700 mt-4">
              Contact us today to discuss your project requirements and let us
              help you create an amazing web application with React and Tailwind
              CSS!
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Our Skills:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sortedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-2 rounded shadow text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
