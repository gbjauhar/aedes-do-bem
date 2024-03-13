import { Column, ContainerForm, Input, Label, MockPic, PaymentContainer, Row, Title } from "./style"
import { Form } from "../../pages/Checkout"
import { ChangeEvent, useState } from "react"

const PaymentInfo = ({ setForm, form }: { form: Form, setForm: React.Dispatch<React.SetStateAction<Form>> }) => {

  const [type, setType] = useState('pix')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

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