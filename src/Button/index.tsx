import type { ReactNode } from 'react'
import { StyledButton } from './styles'

interface ButtonProps {
  onClick: () => void
  children: ReactNode
  disabled?: boolean
}

function Button({ onClick, disabled, children }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default Button
