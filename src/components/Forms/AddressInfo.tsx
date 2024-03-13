import { Column, ContainerForm, Input, Label, Row, Title } from "./style"
import { Form } from "../../pages/Checkout"
import { ChangeEvent } from "react"

const AddressInfo = ({ setForm, form }: { form: Form, setForm: React.Dispatch<React.SetStateAction<Form>> }) => {

  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <ContainerForm>
      <Title>Dados de Entrega</Title>
      <Row>
        <Column>
          <Label>Cidade</Label>
          <Input 
            style={{width: '9rem'}}
            onChange={handleChange}
            name="city"
            value={form?.city}
          />
        </Column>
        <Column>
          <Label>Bairro</Label>
          <Input 
            style={{width: '9rem'}}
            onChange={handleChange}
            name="neighbourhood"
            value={form?.neighbourhood}
          />
        </Column>
      </Row>
    
      
      <Label>Endereço</Label>
      <Input 
            onChange={handleChange}
            name="address"
            value={form?.address}
          />
      <Row>
        <Column>
          <Label>Número</Label>
          <Input 
            style={{width: '3.2rem'}}
            onChange={handleChange}
            name="number"
            value={form?.number}
          />
        </Column>
        <Column>
          <Label>Complemento</Label>
          <Input 
            style={{width: '14.8rem'}}
            onChange={handleChange}
            name="complement"
            value={form?.complement}
          />
        </Column>
      </Row>
      <Label>Destinatário</Label>
      <Input 
            onChange={handleChange}
            name="destinatary"
            value={form?.destinatary}
          />
      </ContainerForm>
  )
}

export default AddressInfo