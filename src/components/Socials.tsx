'use client'

import { Icon } from '@iconify/react'
import type { CSSProperties } from 'react'
import { useAngleToggled } from '@/context/angleToggledContext'

interface SocialsProps {
  link: string
  iconClass: string
  accent: string
  parentHovered: boolean
}

export default function Socials({ link, iconClass, accent, parentHovered }: SocialsProps) {
  const { angleToggled } = useAngleToggled()

  const striped: CSSProperties = {
    backgroundImage: `repeating-linear-gradient(-45deg, var(--secondary), var(--secondary) 7px, var(--${accent}) 7px, var(--${accent}) 12px)`,
    backgroundAttachment: 'scroll',
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.5)] border-0 bg-transparent p-0 block"
      style={striped}
    >
      <div
        className={`relative animate-[startSocials_0.5s_ease-in-out] cursor-pointer rounded-full bg-baseClr px-2.5 py-1.5 transition-all duration-150 active:left-0 active:top-0 ${
          parentHovered ? (angleToggled ? '-left-1 top-1' : '-top-1 left-1') : 'left-0 top-0'
        } ${angleToggled ? 'hover:-left-0.5 hover:top-0.5' : 'hover:-top-0.5 hover:left-0.5'}`}
      >
        <Icon icon={iconClass} className="text-2xl my-1" style={{ color: `var(--${accent})` }} />
      </div>
    </a>
  )
}
