import
  { Container, 
  } from "./style"
import HeaderComponent from "../../components/HeaderComponent"

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
    <HeaderComponent />
    
    </Container>
  )
}

export default Confirm