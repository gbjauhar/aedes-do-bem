import
  { Container, Content, Subtitle, Title, 
  } from "./style"
import HeaderComponent from "../../components/HeaderComponent"
import confirm from "../../assets/confirm.svg"
export interface Form {
  city: string,
  neighbourhood: string,
  address: string,
  number: string,
  complement: string,
  destinatary: string,
  name: string,
  phone: string,
  email: string,
  cpf: string,
  cep: string,
  state: string,
  type: string,
}

const Confirm = () => {

  return(
    <Container>
    <HeaderComponent confirm />
    <Content>
      <img src={confirm} />
      <Title>Compra realizada com sucesso!</Title>
      <Subtitle>Entraremos em contato para mais informações sobre a entrega e demais informações</Subtitle>
    </Content>
    
    </Container>
  )
}

export default Confirm