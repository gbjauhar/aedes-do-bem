import { instance } from "./api";

export async function postUsers(cep: string) {
  try {
    const data = await instance.post("/frete", { cepTo: cep })

    return data.data
  } catch (err) {
    console.log(err)
  }
}