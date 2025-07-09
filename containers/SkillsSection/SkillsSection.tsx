
import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { SkillCard } from "../../components";
import { ISkillsSectionProps } from "../../utils/typings/typings";
import { SKILLSET } from "../../utils/constants/constants";
import { useFilteredSkills } from "../../utils/hooks";
import styles from "./SkillsSection.module.scss";

const cx = classNames.bind(styles);

//const SkillsSection: NextPage<ISkillsSectionProps> = ({ skills }) => {
  //const languages = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.LANGUAGES));
  //const frontend = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.FRONTEND));
  //const uilibraries = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.UI_LIBRARIES));
  //const backend = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.BACKEND));
  //const database = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.DATABASE));
  //const deployment = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.DEPLOYMENT));
  //const ml = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.MACHINE_LEARNING));
  //const cv = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.COMPUTER_VISION));
  //const nlp = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.NLP));
  //const cloud = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.CLOUD));
  //const tools = useFilteredSkills(skills.filter(skill => skill.fieldType === SKILLSET.TOOLS));
  //const familiar = useFilteredSkills(skills.filter(skill => skill.proficient === false));

  return (
    <div className={cx("skills")}> 
      <h1 className={cx("skills-heading")}>Skills</h1>
      <div className={cx("skills-container")}> 
       // <SkillCard skills={languages.filteredSkill} skillName="Languages" />
        //<SkillCard skills={frontend.filteredSkill} skillName="Frontend" />
        //<SkillCard skills={uilibraries.filteredSkill} skillName="UI Libraries" />
        //<SkillCard skills={backend.filteredSkill} skillName="Backend" />
        //<SkillCard skills={database.filteredSkill} skillName="Database" />
        //<SkillCard skills={deployment.filteredSkill} skillName="Deployment" />
        //<SkillCard skills={ml.filteredSkill} skillName="Machine Learning" />
        //<SkillCard skills={cv.filteredSkill} skillName="Computer Vision" />
        //<SkillCard skills={nlp.filteredSkill} skillName="NLP" />
        //<SkillCard skills={cloud.filteredSkill} skillName="Cloud & DevOps" />
        //<SkillCard skills={tools.filteredSkill} skillName="Tools & Platforms" />
        //<SkillCard skills={familiar.filteredSkill} skillName="Familiar" />
      </div>
    </div>
  );
};

export default SkillsSection;
