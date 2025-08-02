import type { ReactNode } from 'react'
import { StyledButton } from './styles'

interface ButtonProps {
  onClick: () => void
  children: ReactNode
  disabled?: boolean
}

export function Button({ onClick, children, ...rest }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}
