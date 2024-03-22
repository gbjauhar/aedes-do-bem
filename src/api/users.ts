import { Form } from "../pages/Checkout";
import { instance } from "./api";

interface Pix {
  "id": string,
  "payment_method": {
    "id": string,
    "type": string,
    "is_active": boolean,
    "is_verified": boolean,
    "debitable": boolean,
    "expiration_date": string,
    "provider": string,
    "version": string,
    "reusable": boolean,
    "allow_update": boolean,
    "key": {
      "type": string,
      "value": string
    },
    "pix_link": string,
    "qr_code": {
      "emv": string
    }
  },
  "status"?: string
}

interface CreditBody {
  "amount": number,
  "currency": string,
  "description": string,
  "customer_info": {
          "first_name": string,
          "email": string,
          "phone_number":string,
          "taxpayer_id":string,
          "address" : {
              "line1": string,
              "line2":string,
              "line3": string,
              "neighborhood":string,
              "city": string,
              "state": string,
              "postal_code": string,
              "country_code": string,
          }
      },
  "statement_descriptor": string
  "payment_type":string
  "capture": boolean,
  "source": {
    "usage":string,
      "amount": number,
      "currency": string,
      "type": string,
      "capture": boolean,
      "card": {
          "holder_name": string,
          "expiration_month": string,
          "expiration_year": string,
          "card_number": string,
          "security_code": string
      },
      "installment_plan": {
          "mode": string,
          "number_installments": string
      }
  }
}

interface PixBody  {
  "amount": number,
  "currency": string,
  "description": string,
  "statement_descriptor": string,
  "payment_type": string
}

export async function getShipping(cep: string) {
  try {
    const data = await instance.post("/frete", { cepTo: cep })

    return data.data
  } catch (err) {
    console.log(err)
    throw (err)
  }
}

export async function postUser(body: Form) {
  try {
    const data = await instance.post("/users", body)

    return data
  } catch (err) {
    console.log(err)
  }
}

export async function cardTransaction(body: CreditBody) {
  try {
    const data = await instance.post("/card", body)

    return data
  } catch (err) {
    console.log(err)
  }
}

export async function pixTransaction(body: PixBody): Promise<Pix> {
  try {
    const { data } = await instance.post("/pix", body)

    return data
  } catch (err) {
    console.log(err)
    throw (err)
  }
}