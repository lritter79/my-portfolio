import React from "react";
import { skillsArray } from "../data/technicalSkillsArray";
import { colorByClassArr } from "../data/colorArray";
import skillsStyles from "../styles/Skills.module.sass";
import RainbowSpans from "./RainbowSpans";

const Skills = () => {
  return (
    <div>
      <div className={skillsStyles.mySkills}>
        <RainbowSpans word="My Skills" />
      </div>

      {skillsArray.map((skill, index) => {
        return (
          <div key={index}>
            <div className={skillsStyles.nesBadge}>
              {(() => {
                let classNumber = index % 4;
                switch (classNumber) {
                  case 0:
                    return (
                      <span className={skillsStyles.isPrimary}>
                        {skill.title}
                      </span>
                    );
                  case 1:
                    return (
                      <span className={skillsStyles.isSuccess}>
                        {skill.title}
                      </span>
                    );
                  case 2:
                    return (
                      <span className={skillsStyles.isError}>
                        {skill.title}
                      </span>
                    );
                  case 3:
                    return (
                      <span className={skillsStyles.isWarning}>
                        {skill.title}
                      </span>
                    );
                  default:
                    return <span>{skill.title}</span>;
                }
              })()}
            </div>
            <ul className="nes-list is-circle">
              {skill.skills.map((name, i) => {
                return <li key={i}>{name}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Skills);
