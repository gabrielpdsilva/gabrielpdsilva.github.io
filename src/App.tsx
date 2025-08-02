import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { Taskbar } from './components/Taskbar'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Tahoma', sans-serif;
`

const MainArea = styled.div`
  flex: 1;
  padding: 8px;
  overflow: auto;
`

function App() {
  const theme = useTheme()

  return (
    <Container>
      <MainArea>
        <p style={{ color: theme.colors.primary }}>Hello, world!</p>
      </MainArea>
      <Taskbar />
    </Container>
  )
}

export default App
