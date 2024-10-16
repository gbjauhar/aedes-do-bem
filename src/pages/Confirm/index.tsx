import
  { Container, Content, ImageWhatsapp, Subtitle, Title, 
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
import whatsapp from "../../assets/whatsapp.svg";
import { Link } from "react-router-dom";

const Confirm = ({ whatsAppLink }: { whatsAppLink: string }) => {

  return(
    <Container>
    <HeaderComponent confirm />
    <Content>
      <img src={confirm} />
      <Title>Compra realizada com sucesso!</Title>
      <Subtitle>Entraremos em contato para mais informações sobre a entrega e demais informações</Subtitle>
    </Content>
    <Link to={whatsAppLink}>
        <ImageWhatsapp src={whatsapp} />
      </Link>
    </Container>
  )
}

export default Confirm