'use client'

import { useAngleToggled } from '@/context/angleToggledContext'
import headImg from '@/assets/headshot.webp'
import pfpImg from '@/assets/pfp.webp'
import Image from 'next/image'
import type { CSSProperties } from 'react'

interface HeadShotProps {
  hovered: boolean
}

export default function HeadShot({ hovered }: HeadShotProps) {
  const { angleToggled, setAngleToggled } = useAngleToggled()

  const striped: CSSProperties = {
    backgroundImage:
      'linear-gradient(-45deg, var(--secondary) 25%, var(--primary) 25%, var(--primary) 50%, var(--secondary) 50%, var(--secondary) 75%, var(--primary) 75%, var(--primary) 100%)',
    backgroundSize: '40px 40px',
    backgroundAttachment: 'scroll',
    border: '1px solid var(--primary)',
    transition: 'all',
  }

  const imgEle = angleToggled ? (
    <Image
      src={pfpImg}
      alt="Profile Picture"
      className="rounded-full object-cover"
      fill
      sizes="144px"
    />
  ) : (
    <Image
      src={headImg}
      className="relative left-1 -top-2 size-44 rounded-full object-cover"
      alt="Profile Picture"
      fill
      sizes="144px"
    />
  )

  return (
    <div
      className="size-36 animate-[moveStripes_2s_linear_infinite] rounded-full bg-text bg-fixed shadow-[inset_0_0_3px_3px_rgba(0,0,0,0.5)]"
      style={striped}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/prefer-button */}
      <div
        className={`relative size-36 animate-[startHead_1s_ease-in-out] cursor-pointer rounded-full border-2 border-[var(--primary)] bg-baseClr shadow shadow-mantle transition-all ${
          angleToggled ? 'hover:-left-1.5 hover:top-1.5' : 'hover:-top-2 hover:left-1.5'
        } active:-top-0.5 active:left-0 ${
          hovered
            ? angleToggled
              ? '-left-3 top-3'
              : '-top-3 left-3'
            : angleToggled
              ? '-left-2 top-2'
              : '-top-2 left-2'
        } overflow-hidden`}
        onClick={() => setAngleToggled(!angleToggled)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setAngleToggled(!angleToggled)
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Toggle profile image style"
      >
        {imgEle}
      </div>
    </div>
  )
}
