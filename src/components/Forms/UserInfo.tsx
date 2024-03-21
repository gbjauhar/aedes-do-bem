import { ChangeEvent, useState } from "react"
import { Form } from "../../pages/Checkout"
import { Button, ContainerForm, Input, Label, Row } from "./style"
import { getShipping } from "../../api/users"

interface Props {
   form: Form,
   setForm: React.Dispatch<React.SetStateAction<Form>>,
   setPrices: React.Dispatch<React.SetStateAction<{
    total: number,
    priceProducts: number
   }>>,
   prices: {
    total: number,
    priceProducts: number
   },
   count: number,
   setShipping: React.Dispatch<React.SetStateAction<string>>,
}
const UserInfo = ({ setForm, form, setShipping, setPrices, prices, count }: Props) => {
  const [cep, setCep] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const getShippingAPI = async () => {
    setForm({...form, cep: cep})
    if(cep !== ''){
      await getShipping(cep)
      .then(res => {
        setShipping(res.custom_price)
        setPrices({...prices, total: (count * 299) + Number(res.custom_price)})
      })
      .catch(err => console.log(err))
    }
   
  }
  return (
    <ContainerForm>
    <Label>Nome Completo</Label>
      <Input
        placeholder="José Carlos da Silva"
        onChange={handleChange}
        value={form?.name}
        name="name"
        type="text"
      />
      <Label>CPF/CNPJ</Label>
      <Input
        placeholder="000.000.000-00"
        onChange={handleChange}
        value={form?.cpf}
        name="cpf"
      />
      <Label>Telefone</Label>
      <Input
        placeholder="(00) 9 1234-5678"
        onChange={handleChange}
        value={form?.phone}
        name="phone"
      />
      <Label>E-mail</Label>
      <Input
        placeholder="seuemail@email.com"
        onChange={handleChange}
        value={form?.email}
        name="email"
        type="email"
      />
      <Label style={{marginTop: '2rem'}}>Digite seu CEP para calcular o frete</Label>
      <Row>
      <Input
        style={{width: '11.625rem'}}
        onChange={(e) => setCep(e.target.value)}
        value={cep}
        name="cep"
      />
      <Button onClick={getShippingAPI}>Calcular</Button>
      </Row>
      </ContainerForm>
  )
}

export default UserInfo