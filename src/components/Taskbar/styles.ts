import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.white}${({ theme }) =>
      theme.colors.neutral}${({ theme }) => theme.colors.neutral}
    ${({ theme }) => theme.colors.white};

  bottom: 0;
  padding: 4px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DateContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  padding: 0 12px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutral}
    ${({ theme }) => theme.colors.white} ${({ theme }) => theme.colors.white}
    ${({ theme }) => theme.colors.neutral};
  border-width: 1px;
`
