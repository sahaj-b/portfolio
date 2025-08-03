'use client'

import { useState } from 'react'
import skills from '@/data/skills.json'
import SkillButton, { type Skill } from './SkillButton'
import StripedBox from './StripedBox'

interface SkillsProps {
  hoveredProjectSkills: string[]
}

export default function Skills({ hoveredProjectSkills }: SkillsProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="sticky top-20 z-10 md:-top-12">
      <StripedBox setHovered={setHovered} hovered={hovered}>
        <h1 className="absolute left-0 top-0 w-full rounded-t-xl bg-[var(--primary)] py-2 text-center font-poppins text-3xl font-semibold text-baseClr">
          Skills
        </h1>
        <div className="mx-2 mt-20 flex w-60 flex-wrap items-center gap-x-8 gap-y-12 md:mx-0 md:mt-16 md:w-full md:gap-x-5 md:gap-y-8">
          {skills.map((skill: Skill, index: number) => (
            <SkillButton
              key={skill.name || index}
              skill={skill}
              parentHovered={hovered || hoveredProjectSkills.includes(skill.name)}
            />
          ))}
        </div>
      </StripedBox>
    </div>
  )
}
