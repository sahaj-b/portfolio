'use client'

import type { CSSProperties } from 'react'
import StripedBox from './StripedBox'

interface EducationData {
  heading: string
  desc: string
  duration: string
}

export default function Education() {
  const striped: CSSProperties = {
    backgroundImage:
      'linear-gradient(-45deg, var(--secondary) 25%, var(--primary) 25%, var(--primary) 50%, var(--secondary) 50%, var(--secondary) 75%, var(--primary) 75%, var(--primary) 100%)',
    backgroundSize: '40px 40px',
    backgroundAttachment: 'scroll',
    border: '1px solid var(--primary)',
    transition: 'all',
  }

  const data: EducationData[] = [
    {
      heading: 'Bachelor of Technology (Information Technology)',
      desc: 'University School of Information, Communication and Technology (GGSIPU), Delhi',
      duration: '2024-2028',
    },
    {
      heading: 'Senior Secondary (10+2)',
      desc: 'Bal Mandir Sr. Sec. School, New Delhi',
      duration: '2012-2024',
    },
  ]

  return (
    <StripedBox padClass="p-16 group md:p-8">
      <div className="flex flex-col space-y-8">
        <div className="relative flex items-center space-x-3">
          <div className="absolute z-10 size-8 rounded-full bg-[var(--primary)]" />
          <div className="size-8" />

          <div
            className="absolute left-0 top-1/2 h-[calc(100%+3px)] w-2 animate-[moveStripesReverse_2s_linear_infinite] bg-[var(--primary)] opacity-60"
            style={striped}
          />

          <div className="rounded-xl bg-surface0 py-4 px-6 text-wrap max-w-2xl">
            <p className="text-2xl font-bold text-[var(--primary)] md:text-xl">{data[0].heading}</p>
            <p className="md:text-md mt-1 text-xl text-subtext1">{data[0].desc}</p>
            <p className="md:text-md mt-3 text-xl text-subtext0">{data[0].duration}</p>
          </div>
        </div>

        <div className="relative flex items-center space-x-3">
          <div className="absolute z-10 size-8 rounded-full bg-[var(--primary)] opacity-60 md:opacity-100" />
          <div className="size-8" />

          <div className="absolute left-0 top-[calc(50%+1rem)] z-10 h-1/2 w-2 animate-[moveStripesReverse_2s_linear_infinite] bg-baseClr" />

          <div className="rounded-xl bg-surface0 py-4 px-6">
            <p className="text-2xl font-bold text-[var(--primary)] md:text-xl">{data[1].heading}</p>
            <p className="md:text-md mt-1 text-xl text-subtext1">{data[1].desc}</p>
            <p className="md:text-md mt-3 text-xl text-subtext0">{data[1].duration}</p>
          </div>
        </div>
      </div>
    </StripedBox>
  )
}
