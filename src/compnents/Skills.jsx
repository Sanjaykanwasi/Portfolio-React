import React from "react";
import { useRef } from "react";
import { SKILLS } from "../constants";

const Skills = () => {
  const skillsReff = useRef(false);
  return (
    <div>
      <section className="py-16" id="skills" ref={skillsReff}>
        <div className="px-4">
          <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-8  md:grid-cols-3 lg:grid-cols-4">
            {SKILLS.map((skill, index) => (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="mb-2 text-lg font-medium lg:text-xl">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
