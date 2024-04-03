import
  { BackgroundImage, 
    Button,
    ButtonNext,
    Column,
    Container, 
    ContainerInfo,
    Divisor,
    ImageWhatsapp,
    Input,
    InputContainer,
    Product,
    ProductResume,
    Row,
    Title
  } from "./style"
import box from "../../assets/caixa.svg"
import UserInfo from "../../components/Forms/UserInfo"
import { useState } from "react"
import AddressInfo from "../../components/Forms/AddressInfo"
import PaymentInfo from "../../components/Forms/PaymentInfo"
import HeaderComponent from "../../components/HeaderComponent"
import { cardTransaction, postUser } from "../../api/users"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import whatsapp from "../../assets/whatsapp.svg";
import { Link } from "react-router-dom";
import 'vite-plugin-radar';

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

const Checkout = ({ whatsAppLink }: { whatsAppLink: string }) => {
  const navigate = useNavigate()
  const [count, setCount] = useState(1)
  const [page, setPage] = useState(1)
  const [shipping, setShipping] = useState('0.00')
  const [prices, setPrices] = useState({ priceProducts: 280, total: 280})
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
    cpf: '',
    cep: '',
    state: '',
    type: ''
  })
  const [creditCard, setCreditCard] = useState<{
    holderName: string,
    cardNumber: string,
    securityCode: string,
    installments: string,
    date: string,
  }>({
    holderName: '',
    cardNumber: '',
    securityCode: '',
    installments: '',
    date: '',
  })

  const sendInfo = async () => {

    console.log(form?.type)
    const bodyCredit = {
      "amount": (prices.total * 100).toString(),
      "currency": "BRL",
      "description": "venda ",
      "customer_info": {
              "first_name": form?.name,
              "email": form?.email,
              "phone_number": form?.phone,
              "taxpayer_id": form?.cpf,
              "address" : {
                  "line1": form?.address,
                  "line2": form?.number,
                  "line3": form?.complement,
                  "neighborhood": form?.neighbourhood,
                  "city": form?.city,
                  "state": form?.state,
                  "postal_code": form?.cep,
                  "country_code": "BR"
              }
          },
      "statement_descriptor": "Aedes",
      "payment_type": "credit",
      "capture": true,
      "source": {
        "usage":"single_use",
          "amount": prices.total * 100,
          "currency": "BRL",
          "type": "card",
          "capture": true,
          "card": {
              "holder_name": creditCard?.holderName,
              "expiration_month": creditCard?.date.slice(5, 7),
              "expiration_year": creditCard?.date.slice(2, 4),
              "card_number": creditCard?.cardNumber,
              "security_code": creditCard?.securityCode
          },
          "installment_plan": {
              "mode": "interest_free",
              "number_installments": creditCard?.installments
          }
      }
  }


    if(form?.type === 'pix'){
      await postUser(form).then(res => {
        console.log(res)
        window.dataLayer.push({
          event: 'Finalizou compra no pix'
        })
        window.fbq('track', 'Finalizou compra no pix')
        navigate("/confirm")
      }).catch(err => {
        console.log(err)
        toast.error("Ocorreu um erro, tente novamente")
      })
    } else if(form?.type === 'credit') {
      await cardTransaction(bodyCredit).then(async res => {
        await postUser(form).then(res => {
          console.log(res)
          window.dataLayer.push({
            event: 'Finalizou compra no crédito'
          })
          window.fbq('track', 'Finalizou compra no crédito')
          navigate("/confirm")
        }).catch(err => {
          console.log(err)
          toast.error("Ocorreu um erro, tente novamente")
        })
        console.log(res)
      }).catch(err => console.log(err))
    }
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
    <HeaderComponent VideoShow />
    <ContainerInfo>
    <Product page={page}>
      <Column style={{width: '7rem'}}>
      <BackgroundImage>
        <img src={box} width={60} />
        </BackgroundImage>
        <InputContainer>
        <Button disabled={count === 0} onClick={() => {
          setCount(count -1)
          setPrices({total: ((count -1)  * 280) + Number(shipping), priceProducts: (count -1) * 280})
        }}>-</Button>
        <Input onChange={(e) => {
          setCount(Number(e.target.value))
          setPrices({total: (Number(e.target.value)  * 280) + Number(shipping), priceProducts: Number(e.target.value) * 280})
        }} value={count} />
        <Button onClick={() => {
          setCount(count +1)
          setPrices({total: ((count +1)  * 280) + Number(shipping), priceProducts: (count +1) * 280})
        }}>+</Button></InputContainer>
      </Column>
      <Column style={{gap: '1rem'}}>
        <Title style={{color: '#028352'}}>Caixa única</Title>
        <Title style={{fontSize: '0.7rem'}}>É perfeito para pessoas, para o meio ambiente e para os pets!</Title>
        <Title style={{color: '#028352', fontSize: '1.125rem'}}>R$ {prices.priceProducts},00</Title>
      </Column></Product>
      <Column>
      {page === 1 ? 
        <UserInfo 
          setPrices={setPrices}
          prices={prices}
          count={count}
          setShipping={setShipping}
          setForm={setForm}
          form={form}
        /> :
      page === 2 ?
        <AddressInfo setForm={setForm} form={form}/> : 
        <PaymentInfo prices={prices} setForm={setForm} form={form} creditCard={creditCard} setCreditCard={setCreditCard}/>}
   
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
    <ButtonNext onClick={nextPage}>{page === 3 ? 'Finalizar': 'Continuar'}</ButtonNext>
   </ProductResume>
   </Column>
    </ContainerInfo>
    <ToastContainer />
    <Link to={whatsAppLink}>
        <ImageWhatsapp src={whatsapp} />
      </Link>
    </Container>
  )
}

export default Checkout