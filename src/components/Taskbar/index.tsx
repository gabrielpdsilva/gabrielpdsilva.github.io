import { useState } from 'react'
import { Container, Row, DateContainer } from './styles'
import { Button } from '../Button'

export function Taskbar() {
  const [currentYear] = useState(new Date().getFullYear())

  const onStartClick = () => console.log('Start...')

  return (
    <Container>
      <Row>
        <Button onClick={onStartClick}>Start</Button>
        <DateContainer>{currentYear}</DateContainer>
      </Row>
    </Container>
  )
}
