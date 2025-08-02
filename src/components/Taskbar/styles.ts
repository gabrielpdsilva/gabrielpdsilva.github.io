import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.white}${({ theme }) => theme.colors.neutral}${({ theme }) => theme.colors.neutral}
    ${({ theme }) => theme.colors.white};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const DateContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  padding: 7px;
  border-style: solid;
  border-color:${({ theme }) => theme.colors.neutral} ${({ theme }) => theme.colors.white} ${({ theme }) => theme.colors.white}
   ${({ theme }) => theme.colors.neutral};
  border-width: 1px;
  margin-left: auto;
  margin-right: 5px;
`
