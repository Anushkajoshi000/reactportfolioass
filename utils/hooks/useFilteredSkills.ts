import { useRef } from "react";
import { ISkills } from "../typings/typings";


// export const useFilteredSkills = (skills: ISkills[], skillType?: string | string[]) => {
//   const filteredSkillRef = useRef<{ filteredSkill: ISkills[] }>({ filteredSkill: [] });

//   if (typeof skillType === "string") {
//     filteredSkillRef.current.filteredSkill = skills?.filter(skill => skill?.fieldType?.toLowerCase() === skillType);
//   } else if (Array.isArray(skillType)) {
//     filteredSkillRef.current.filteredSkill = skills.filter(skill =>
//       skillType.includes(skill.fieldType?.toLowerCase() as string),
//     );
//   } else {
//     filteredSkillRef.current.filteredSkill = skills?.filter(skill => skill?.proficient === false);
//   }

//   return { filteredSkill: filteredSkillRef.current.filteredSkill };
// };
// export const useFilteredSkills = (skills: ISkills[], skillType?: string | string[]) => {
export const useFilteredSkills = (skills: ISkills[]) => {
  const filteredSkillRef = useRef<{ filteredSkill: ISkills[] }>({ filteredSkill: [] });

  filteredSkillRef.current.filteredSkill = skills;

  return { filteredSkill: filteredSkillRef.current.filteredSkill };
};
