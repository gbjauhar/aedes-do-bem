/* eslint-disable @typescript-eslint/no-explicit-any */
import { pixTransaction } from "../../api/users"
import { ButtonCopy, Column, ContainerForm, Input, Label, MockPic, PaymentContainer, Row, Select, Subtitle, Title } from "./style"
import { ChangeEvent, useState } from "react"
import { Form } from "../../pages/Checkout";
import QRCode from "qrcode";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

interface Props {
  creditCard: {
    holderName: string,
    cardNumber: string,
    securityCode: string,
    installments: string,
    date: string,
  },
  setCreditCard: React.Dispatch<React.SetStateAction<{
    holderName: string;
    cardNumber: string;
    securityCode: string;
    installments: string;
    date: string;
}>>,
prices: {
  total: number,
  priceProducts: number
},
form: Form,
setForm: React.Dispatch<React.SetStateAction<Form>>
}
const PaymentInfo = ({form, setForm, creditCard, setCreditCard, prices}: Props) => {

  const [loading, setLoading] = useState(false)
  const [qrCode, setQrCode] = useState('')

  const options = [
    {name: '1x', value: '1'},
    {name: '2x', value: '2'},
    {name: '3x', value: '3'},
    {name: '4x', value: '4'},
    {name: '5x', value: '5'},
    {name: '6x', value: '6'},
    {name: '7x', value: '7'},
    {name: '8x', value: '8'},
    {name: '9x', value: '9'},
    {name: '10x', value: '10'},
    {name: '11x', value: '11'},
    {name: '12x', value: '12'},
  ]
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreditCard({...creditCard, [e.target.name]: e.target.value})
  }

  const handleChangeSelect = (e: any) => {
    setCreditCard({...creditCard, [e.target.name]: e.target.value})
  }

  const generateQRCode = async (text: string): Promise<string> => {
    try {
        return await QRCode.toDataURL(text);
    } catch (error) {
        console.error('Error generating QR code:', error);
        return '';
    }
};

  const clickPix = async () => {
    setLoading(true)
    const bodyPix = {
      "amount": prices.total * 100,
      "currency": "BRL",
      "description": "venda de PIX",
      "statement_descriptor": "AEDES",
      "payment_type": "pix"
  }
    await pixTransaction(bodyPix).then(async res => {
      if(res.status !== "failed") {
        await generateQRCode(res?.payment_method?.qr_code?.emv).then(data => {
          setQrCode(data)
          setForm({...form, type: 'pix'})
          setLoading(false)
        })
      } else {
        toast.error("Ocorreu um erro, tente novamente")
      }
      
    }).catch(err => {
      toast.error("Ocorreu um erro, tente novamente")
      console.log(err)
      setLoading(false)
    })
    
  }

  return (
    <ContainerForm style={{alignItems: 'center'}}>
      <Title>Dados de Pagamento</Title>
      <PaymentContainer disabled={loading} onClick={clickPix}>
        {loading ? 
          <ThreeDots
          visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          /> : 
          <>
            <MockPic />
            <p>Pix</p>
          </>}
        
      </PaymentContainer>
      <PaymentContainer disabled={loading}  onClick={() => setForm({...form, type: 'credit'})}>
        <MockPic />
        <p>Cartão de Crédito</p>
      </PaymentContainer>
      {form?.type === 'credit' ?  <ContainerForm>
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
        <Input
          type="date"
          name="date"
          style={{paddingLeft: 0, width: '6.3rem'}}
          onChange={handleChange}
        />
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
        <Select onChange={handleChangeSelect} name="installments">
          {options.map(option => 
            <option value={option.value}>{option.name}</option>)}
        </Select>
        </Column>
        </Row>
      </ContainerForm>
      : form?.type === 'pix' ?
      <>
      <Row>
      <Input
        style={{width: '13rem', height: '2.2rem', borderRadius: '0.625rem'}}
        value={qrCode}
      />
      <ButtonCopy onClick={() => navigator.clipboard.writeText(qrCode)}>copiar</ButtonCopy>
      </Row>
      <img src={qrCode} />
      <Subtitle>Acesse o aplicativo do seu banco e realize o <br/>pagamento através dos dados desse QRCODE!</Subtitle>
      </>
       : <></>}
     
      </ContainerForm>
  )
}

export default PaymentInfo