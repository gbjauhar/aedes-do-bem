import styled from "styled-components"

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const Input = styled.input`
  width: 20rem;
  height: 2.4rem;
  border-radius: 0.125rem;
  border: 1px solid #D3D3D3;
  font-family: "Inter", sans-serif;
  padding-left: 1rem;
`

export const Label = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  color: #A5A5A5;
`

export const Row = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #028352;
  margin-bottom: 2rem;
`

export const PaymentContainer = styled.button`
  border: none; 
  background-color: #FFFFFF;
  width: 18rem;
  height: 2.7rem;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 4px 0px #00000040;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding: 1rem;
  box-sizing: border-box;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  p {
    font-family: "Inter", sans-serif;
    color: #A5A5A5;
    font-weight: 600;
    font-size: 1rem;
  }
`

export const MockPic = styled.div`
  width: 2rem;
  height: 1.75rem;
  background-color: #EEEEEE;
  box-shadow: 0px 0px 4px 0px #00000040;
  border-radius: 0.625rem;
`

export const Button = styled.button`
  width: 7.188rem;
  height: 2.438rem;
  background-color: #028352;
  border-radius: 0.125rem;
  border: 1px solid #38BD4A;
  font-size: 0.875rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
`

export const Select = styled.select`
  width: 6.8rem;
  height: 2.4rem;
  border-radius: 0.125rem;
  border: 1px solid #D3D3D3;
  font-family: "Inter", sans-serif;
`

export const ButtonCopy = styled.button`
  width: 3rem;
  height: 2.2rem;
  border-radius: 0.625rem;
  background-color: #028352;
  box-shadow: 0px 0px 4px 0px #00000040;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  border: none;
`

export const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #a5a5a5;
`