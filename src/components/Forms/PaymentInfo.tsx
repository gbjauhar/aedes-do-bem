import { pixTransaction } from "../../api/users"
import { Column, ContainerForm, Input, Label, MockPic, PaymentContainer, Row, Title } from "./style"
import { ChangeEvent, useState } from "react"

const PaymentInfo = ({setForm, form, creditCard, setCreditCard, prices}) => {

  const [type, setType] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreditCard({...creditCard, [e.target.name]: e.target.value})
  }

  const clickPix = async () => {
    const bodyPix = {
      "amount": prices.total,
      "currency": "BRL",
      "description": "venda de PIX",
      "statement_descriptor": "AEDES",
      "payment_type": "pix"
  }
    await pixTransaction(bodyPix).then(res => console.log(res)).catch(err => console.log(err))
    setType('pix')
  }

  return (
    <ContainerForm style={{alignItems: 'center'}}>
      <Title>Dados de Pagamento</Title>
      <PaymentContainer onClick={clickPix}>
        <MockPic />
        <p>Pix</p>
      </PaymentContainer>
      <PaymentContainer onClick={() => setType('credit')}>
        <MockPic />
        <p>Cartão de Crédito</p>
      </PaymentContainer>
      {type === 'credit' ?  <ContainerForm>
        <Label>Nome impresso no cartão</Label>
        <Input 
            onChange={handleChange}
            name="holderName"
            value={creditCard?.holderName}
          />
        <Label>Número do cartão</Label>
        <Input 
            onChange={handleChange}
            name="cardNumber"
            value={creditCard?.cardNumber}
          />
        <Row>
          <Column>
        <Label>Vencimento</Label>
        <Input style={{width: '5.3rem'}} />
      </Column>
      <Column>
        <Label>CVV</Label>
        <Input 
        style={{width: '5.3rem'}}
            onChange={handleChange}
            name="securityCode"
            value={creditCard?.securityCode}
          />
        </Column>
        <Column>
        <Label>Parcelamento</Label>
        <Input  style={{width: '5.3rem'}}/>
        </Column>
        </Row>
      </ContainerForm>
      : type === 'pix' ?
      <Input /> : <></>}
     
      </ContainerForm>
  )
}

export default PaymentInfo