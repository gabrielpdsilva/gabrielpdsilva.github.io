import type { ReactNode } from 'react'
import { StyledButton } from './styles'

interface ButtonProps {
  onClick: () => void
  children: ReactNode
  disabled?: boolean
}

export function Button({ onClick, disabled, children }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
