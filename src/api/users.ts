import { Form } from "../pages/Checkout";
import { instance } from "./api";

export async function getShipping(cep: string) {
  try {
    const data = await instance.post("/frete", { cepTo: cep })

    return data.data
  } catch (err) {
    console.log(err)
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

export async function cardTransaction(body) {
  try {
    const data = await instance.post("/card", body)

    return data
  } catch (err) {
    console.log(err)
  }
}

export async function pixTransaction(body) {
  try {
    const data = await instance.post("/pix", body)

    return data
  } catch (err) {
    console.log(err)
  }
}