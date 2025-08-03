'use client'

import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  color: string
}

export default function DotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const colors = [
    'rosewater',
    'flamingo',
    'pink',
    'mauve',
    'red',
    'maroon',
    'peach',
    'yellow',
    'green',
    'teal',
    'sky',
    'sapphire',
    'blue',
    'lavender',
    'text',
  ]

  const dotSize = 3
  const space = 40
  const radius = 50
  const fadeDistance = 200
  const maxOpacity = 0.7
  const minOpacity = 0.05
  const defaultColor = '#242438'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dots: Dot[] = []
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const root = document.documentElement

    function handleResize() {
      if (!canvas) return
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      dots = []
      for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
          dots.push({
            x,
            y,
            color: getComputedStyle(root).getPropertyValue(
              `--${colors[Math.floor(Math.random() * colors.length)]}`
            ),
          })
        }
      }
    }

    handleResize()

    const drawDots = (mouseX = -1000, mouseY = -1000) => {
      ctx.clearRect(0, 0, width, height)
      for (const { x, y, color } of dots) {
        const dx = x - mouseX
        const dy = y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        let opacity = 0

        if (distance > fadeDistance) {
          ctx.globalAlpha = 1
          ctx.fillStyle = defaultColor
        } else {
          if (distance < radius) {
            opacity = maxOpacity
          } else {
            opacity = maxOpacity * (1 - (distance - radius) / (fadeDistance - radius))
          }
          ctx.globalAlpha = Math.max(minOpacity, opacity)
          ctx.fillStyle = color
        }

        ctx.beginPath()
        ctx.arc(x, y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
    }

    let animationFrameId: number
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      animationFrameId = requestAnimationFrame(() => drawDots(mouseX, mouseY))
    }

    drawDots()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 -z-10 h-full w-full bg-mantle md:hidden"
    />
  )
}
