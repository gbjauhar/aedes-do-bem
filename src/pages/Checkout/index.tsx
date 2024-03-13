import
  { BackgroundImage, 
    Button,
    ButtonNext,
    Column,
    Container, 
    ContainerInfo,
    Divisor,
    Header,
    Input,
    InputContainer,
    Product,
    ProductResume,
    Row,
    Title } from "./style"
import logo from "../../assets/logo.png"
import box from "../../assets/caixa.png"
import UserInfo from "../../components/Forms/UserInfo"
import { useState } from "react"
import AddressInfo from "../../components/Forms/AddressInfo"
import PaymentInfo from "../../components/Forms/PaymentInfo"

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
  cpf: string
}

const Checkout = () => {
  const [count, setCount] = useState(1)
  const [page, setPage] = useState(1)
  const [form, setForm] = useState<Form>({
    city: '',
    neighbourhood: '',
    address: '',
    number: '',
    complement: '',
    destinatary: '',
    name: '',
    phone: '',
    email: '',
    cpf: ''
  })
  
  const nextPage = () => {
    if(page === 1) setPage(2)
    if(page === 2) setPage(3)
    console.log(form)
  }


  return(
    <Container>
    <Header><img src={logo}/></Header>
    <ContainerInfo>
    <Product>
      <Column style={{width: '7rem'}}>
      <BackgroundImage>
        <img src={box}/>
        </BackgroundImage>
        <InputContainer>
        <Button disabled={count === 0} onClick={() => setCount(count -1)}>-</Button>
        <Input onChange={(e) => setCount(Number(e.target.value))}value={count} />
        <Button onClick={() => setCount(count + 1)}>+</Button></InputContainer>
      </Column>
      <Column style={{gap: '1rem'}}>
        <Title style={{color: '#028352'}}>Caixa única</Title>
        <Title style={{fontSize: '0.7rem'}}>É perfeito para pessoas, para o meio ambiente e para os pets!</Title>
        <Title style={{color: '#028352', fontSize: '1.125rem'}}>R$299,00</Title>
      </Column></Product>
      <Column>
      {page === 1 ? <UserInfo setForm={setForm} form={form}/> : page === 2 ? <AddressInfo setForm={setForm} form={form}/> : <PaymentInfo />}
   
   <ProductResume>
    <Title>Resumo do pedido</Title>
    <Row>
      <Title>Produto ({count})</Title>
      <Title style={{color: "#028352"}}>R$ {count * 299},00</Title>
    </Row>
    <Row>
      <Title>Frete</Title>
      <Title style={{color: "#028352"}}>R$ 299,00</Title>
    </Row>
    <Divisor />
    <Row>
      <Title>Total</Title>
      <Title style={{fontSize: '1.125rem', color: "#028352"}}>R$ 299,00</Title>
    </Row>
    <ButtonNext onClick={nextPage}>Continuar</ButtonNext>
   </ProductResume>
   </Column>
    </ContainerInfo>
    </Container>
  )
}

export default Checkout