import styled from '@emotion/styled'

const Desktop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #008080; /* Windows 95 teal */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Tahoma', sans-serif;
`;

const Taskbar = styled.div`
  height: 40px;
  background-color: #c0c0c0;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const MainArea = styled.div`
  flex: 1;
  padding: 8px;
  overflow: auto;
`;

function App() {
  return (
  <Desktop>
      <MainArea>
        <p>Hello, world!</p>
      </MainArea>
      <Taskbar>
        <button>Start</button>
      </Taskbar>
    </Desktop>
  )
}

export default App
