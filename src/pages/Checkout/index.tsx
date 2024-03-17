import
  { BackgroundImage, 
    Button,
    ButtonNext,
    Column,
    Container, 
    ContainerInfo,
    Divisor,
    Input,
    InputContainer,
    Product,
    ProductResume,
    Row,
    Title } from "./style"
import box from "../../assets/caixa.svg"
import UserInfo from "../../components/Forms/UserInfo"
import { useState } from "react"
import AddressInfo from "../../components/Forms/AddressInfo"
import PaymentInfo from "../../components/Forms/PaymentInfo"
import HeaderComponent from "../../components/HeaderComponent"
import { postUser } from "../../api/users"

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
  const [shipping, setShipping] = useState('0.00')
  const [prices, setPrices] = useState({ priceProducts: 299, total: 299})
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

  const sendInfo = async () => {
    await postUser(form).then(res => console.log(res)).catch(err => console.log(err))
  }
  
  const nextPage = () => {
    if(page === 1) setPage(2)
    if(page === 2) setPage(3)
    if(page === 3) {
      sendInfo()
    }
  }

  return(
    <Container>
    <HeaderComponent />
    <ContainerInfo>
    <Product page={page}>
      <Column style={{width: '7rem'}}>
      <BackgroundImage>
        <img src={box} width={60} />
        </BackgroundImage>
        <InputContainer>
        <Button disabled={count === 0} onClick={() => {
          setCount(count -1)
          setPrices({total: ((count -1)  * 299) + Number(shipping), priceProducts: (count -1) * 299})
        }}>-</Button>
        <Input onChange={(e) => {
          setCount(Number(e.target.value))
          setPrices({total: (Number(e.target.value)  * 299) + Number(shipping), priceProducts: Number(e.target.value) * 299})
        }} value={count} />
        <Button onClick={() => {
          setCount(count +1)
          setPrices({total: ((count +1)  * 299) + Number(shipping), priceProducts: (count +1) * 299})
        }}>+</Button></InputContainer>
      </Column>
      <Column style={{gap: '1rem'}}>
        <Title style={{color: '#028352'}}>Caixa única</Title>
        <Title style={{fontSize: '0.7rem'}}>É perfeito para pessoas, para o meio ambiente e para os pets!</Title>
        <Title style={{color: '#028352', fontSize: '1.125rem'}}>R$ {prices.priceProducts},00</Title>
      </Column></Product>
      <Column>
      {page === 1 ? <UserInfo setPrices={setPrices} prices={prices} count={count} setShipping={setShipping} setForm={setForm} form={form}/> : page === 2 ? <AddressInfo setForm={setForm} form={form}/> : <PaymentInfo />}
   
   <ProductResume>
    <Title>Resumo do pedido</Title>
    <Row>
      <Title>Produto ({count})</Title>
      <Title style={{color: "#028352"}}>R$ {prices.priceProducts},00</Title>
    </Row>
    <Row>
      <Title>Frete</Title>
      <Title style={{color: "#028352"}}>R$ {shipping}</Title>
    </Row>
    <Divisor />
    <Row>
      <Title>Total</Title>
      <Title style={{fontSize: '1.125rem', color: "#028352"}}>R$ {prices.total}</Title>
    </Row>
    <ButtonNext onClick={nextPage}>Continuar</ButtonNext>
   </ProductResume>
   </Column>
    </ContainerInfo>
    </Container>
  )
}

export default Checkout