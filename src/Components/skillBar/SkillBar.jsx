import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';

const skills = [
  { icon: faReact, className: 'reactIcon', color: '#61DBFB' },
  { icon: faHtml5, className: 'htmlIcon', color: '#E34F26' },
  { icon: faCss3Alt, className: 'cssIcon', color: '#1572B6' },
  { icon: faJs, className: 'jsIcon', color: '#F7DF1E' },
  { icon: faJava, className: 'javaIcon', color: '#007396' },
  { icon: faNodeJs, className: 'nodeIcon', color: '#3C873A' },
  { icon: faLeaf, className: 'mongoIcon', color: '#56A14B' },
];

const SkillBar = () => {
  return (
    <div className="skillsBar">
      <div>
        {skills.map((skill, index) => (
          <FontAwesomeIcon
            key={index}
            icon={skill.icon}
            className={`icon ${skill.className}`}
            style={{ color: skill.color }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
