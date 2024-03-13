import { ContainerForm, Input, Label } from "./style"

const UserInfo = () => {
  return (
    <ContainerForm>
    <Label>Nome Completo</Label>
      <Input placeholder="José Carlos da Silva" />
      <Label>CPF/CNPJ</Label>
      <Input placeholder="000.000.000-00" />
      <Label>Telefone</Label>
      <Input placeholder="(00) 9 1234-5678" />
      <Label>E-mail</Label>
      <Input placeholder="seuemail@email.com" />
      <Label style={{marginTop: '2rem'}}>Digite seu CEP para calcular o frete</Label>
      <Input placeholder="José Carlos da Silva" />
      </ContainerForm>
  )
}

export default UserInfo