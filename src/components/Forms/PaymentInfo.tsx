import { Column, ContainerForm, Input, Label, MockPic, PaymentContainer, Row, Title } from "./style"
import { useState } from "react"

const PaymentInfo = () => {

  const [type, setType] = useState('pix')



  return (
    <ContainerForm style={{alignItems: 'center'}}>
      <Title>Dados de Pagamento</Title>
      <PaymentContainer onClick={() => setType('pix')}>
        <MockPic />
        <p>Pix</p>
      </PaymentContainer>
      <PaymentContainer onClick={() => setType('credit')}>
        <MockPic />
        <p>Cartão de Crédito</p>
      </PaymentContainer>
      {type === 'credit' ?  <ContainerForm>
        <Label>Nome impresso no cartão</Label>
        <Input />
        <Label>Número do cartão</Label>
        <Input />
        <Row>
          <Column>
        <Label>Vencimento</Label>
        <Input style={{width: '5.3rem'}} />
      </Column>
      <Column>
        <Label>CVV</Label>
        <Input  style={{width: '5.3rem'}}/>
        </Column>
        <Column>
        <Label>Parcelamento</Label>
        <Input  style={{width: '5.3rem'}}/>
        </Column>
        </Row>
      </ContainerForm>
      : <></>}
     
      </ContainerForm>
  )
}

export default PaymentInfo