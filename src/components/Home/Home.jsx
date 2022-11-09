import React from 'react'
import { Container, Filter, Title, Paragraph, Button} from './style'

const Home = (props) => {
  return (
    <Container>
      <Filter>
        <Title>cloudbudget</Title>
        {
          props.language==='usa'?
          <>
            <Paragraph>
                Cloud budget management for everyone. 
                Only €69.95 a Month After a 7 Day Trial of 
                Up to €4.99
            </Paragraph>
            <Button>sign up</Button>
          </>
          :
          <>
            <Paragraph>
            Управление CloudBudget для всех. 
            Всего 69,95 евро в месяц после 7-дневной 
            пробной версии до 4,99 евро
            </Paragraph>
            <Button>зарегистрироваться</Button>
          </>
        }
      </Filter>
    </Container>
  )
}

export default Home