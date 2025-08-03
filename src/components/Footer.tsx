'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex w-full justify-around bg-crust p-5 text-sm text-subtext1 md:text-xs">
      <span>
        Colorscheme:{' '}
        <a
          href="https://catppuccin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          Catppuccin{' '}
        </a>
        <Image
          src="https://avatars.githubusercontent.com/u/93489351?s=200&v=4"
          alt="Catppuccin Logo"
          className="inline size-4 rounded-full"
          width={16}
          height={16}
        />
      </span>
      <span>
        Made with <Icon icon="mdi:heart" className="inline relative -top-[0.08rem] text-red" />{' '}
        using{' '}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          React
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          Tailwind
        </a>
      </span>
      <span>
        Email:{' '}
        <a
          href="mailto:sahajb0606@gmail.com"
          className="font-bold text-[var(--primary)] hover:opacity-80"
        >
          sahajb0606@gmail.com
        </a>
      </span>
    </div>
  )
}
