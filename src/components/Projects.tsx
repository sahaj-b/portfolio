'use client'

import { Icon } from '@iconify/react'
import projects from '@/data/projects.json'
import ProjectCard, { type Project } from './ProjectCard'
import StripedBox from './StripedBox'

interface ProjectsProps {
  setHoveredProjectSkills: (skills: string[]) => void
}

export default function Projects({ setHoveredProjectSkills }: ProjectsProps) {
  return (
    <StripedBox>
      <h1 className="absolute left-0 top-0 w-full rounded-t-xl bg-[var(--primary)] py-2 text-center font-poppins text-3xl font-semibold text-baseClr">
        Projects <Icon icon="ph:hand-tap-bold" className="relative -top-0.5 hidden md:inline" />
      </h1>
      <div className="mb-2 mt-14 text-center text-3xl font-bold text-subtext0 opacity-80">
        Web Dev
      </div>
      <div className="flex w-[50rem] flex-wrap gap-10 p-5 md:w-full md:flex-col">
        {projects.WebDev.map((project: Project, index: number) => (
          <ProjectCard
            project={project}
            key={project.name || index}
            setHoveredProjectSkills={setHoveredProjectSkills}
          />
        ))}
      </div>
      <div className="mb-2 mt-10 text-center text-3xl font-bold text-subtext0 opacity-80">
        Other Stuff
      </div>
      <div className="flex w-[50rem] flex-wrap gap-10 p-5 md:w-full md:flex-col">
        {projects.other.map((project: Project, index: number) => (
          <ProjectCard
            project={project}
            key={project.name || index}
            setHoveredProjectSkills={setHoveredProjectSkills}
          />
        ))}
      </div>
    </StripedBox>
  )
}
