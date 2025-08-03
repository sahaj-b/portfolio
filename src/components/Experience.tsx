'use client'

import { useAngleToggled } from '@/context/angleToggledContext'
import StripedBox from './StripedBox'

export default function Experience() {
  const { angleToggled } = useAngleToggled()

  return (
    <StripedBox padClass="p-20">
      <div className="flex h-52 flex-col justify-center text-center text-3xl font-bold text-subtext0 opacity-80">
        {angleToggled ? 'Loading... Please wait for few months' : 'Error 404: Not Found'}
        <p className={`${angleToggled ? 'hidden' : ''} mt-2 font-play text-xl`}>(Yet)</p>
      </div>
    </StripedBox>
  )
}
