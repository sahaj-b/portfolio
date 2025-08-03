'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'

interface AngleToggledContextType {
  angleToggled: boolean
  setAngleToggled: (toggled: boolean) => void
}

const AngleToggledContext = createContext<AngleToggledContextType | undefined>(undefined)

export const useAngleToggled = () => {
  const context = useContext(AngleToggledContext)
  if (!context) {
    throw new Error('useAngleToggled must be used within AngleToggledProvider')
  }
  return context
}

interface AngleToggledProviderProps {
  children: ReactNode
}

export const AngleToggledProvider = ({ children }: AngleToggledProviderProps) => {
  const [angleToggled, setAngleToggled] = useState(false)

  return (
    <AngleToggledContext.Provider value={{ angleToggled, setAngleToggled }}>
      {children}
    </AngleToggledContext.Provider>
  )
}
