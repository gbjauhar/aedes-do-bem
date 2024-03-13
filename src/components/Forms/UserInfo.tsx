import { ChangeEvent } from "react"
import { Form } from "../../pages/Checkout"
import { ContainerForm, Input, Label } from "./style"

const UserInfo = ({ setForm, form }: { form: Form, setForm: React.Dispatch<React.SetStateAction<Form>> }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
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
      <Input placeholder="José Carlos da Silva" />
      </ContainerForm>
  )
}

export default UserInfo