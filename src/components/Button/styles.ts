import styled from '@emotion/styled'

export const StyledButton = styled.button`
  width: 120px; // TODO fix
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.base};
  border-color: ${({ theme }) => theme.colors.white}
    ${({ theme }) => theme.colors.neutral}
    ${({ theme }) => theme.colors.neutral} ${({ theme }) => theme.colors.white};

  :disabled {
    text-shadow: 1px 1px 0 ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.neutral};
  }

  :not(:disabled):active {
    border-color: ${({ theme }) => theme.colors.neutral}${({ theme }) =>
        theme.colors.white}${({ theme }) => theme.colors.white}
      ${({ theme }) => theme.colors.neutral};
  }
`
