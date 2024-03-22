import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding-bottom: 10rem;
`

export const Header = styled.div`
  width: 100%;
  background-color: #4DB358;
  height: 16rem;
  border-right: 1.875rem solid #028352;
  border-bottom: 1.125rem solid #028352;
  border-radius: 0 0 16rem 3.75rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderBorder = styled.div`
background-color: #028352;
height: 274px;
border-radius: 0 0 120px 20px;
`

export const ContainerInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-top: 15rem;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
  }
`



export const Product = styled.div<{page: number}>`
  width: 20rem;
  height: 10rem;
  border: 1px solid #D3D3D3;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-sizing: border-box;
  gap: 0.8rem;
  @media (max-width: 800px) {
    margin-bottom: 2rem;
    display: ${props => props.page === 2 || props.page === 3 ? 'none' : 'flex'};
  }
`

export const BackgroundImage = styled.div`
background-color: #EEEEEE;
    width: 6.375rem;
    height: 5.5rem;
    border-radius: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #A5A5A5;
`

export const ProductResume = styled.div`
  width: 20rem;
  height: 18rem;
  border-radius: 1.2rem;
  box-shadow: 0px 0px 4px 0px #00000040;
  margin-top: 5rem;
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputContainer = styled.div`
  display: flex;
  margin-top: 0.8rem;
`

export const Input = styled.input`
  width: 2.4rem;
  height: 1.9rem;
  border-radius: 0.125rem;
  border: 1px solid #D3D3D3;
  font-family: "Inter", sans-serif;
  color: #028352;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
`

export const Button = styled.button`
  border: none;
  background-color: #ffffff;
  font-family: "Inter", sans-serif;
  color: #028352;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`

export const ButtonNext = styled.button`
  width: 17rem;
  height: 2.4rem;
  background-color: #028352;
  border: 1px solid #38BD4A;
  border-radius: 0.125rem;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: #DBDBDB;
  margin: 0.5rem 0;
`

export const ImageWhatsapp = styled.img`
  position: fixed;
  z-index: 99999;
  bottom: 15px;
  right: 15px;
  width: 3rem;
`