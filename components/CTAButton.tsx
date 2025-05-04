
'use client'

import React from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'accent'
  className?: string
}

export default function CTAButton({ children, onClick, variant = 'primary', className = '' }: Props) {
  const baseStyles = "px-6 py-3 rounded-md font-semibold border-2 transition animate-pulse-scale shadow-md"

  const variantStyles = {
    primary: "border-primary text-primary bg-transparent",
    accent: "border-accent text-accent bg-transparent",
  }

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  )
}
