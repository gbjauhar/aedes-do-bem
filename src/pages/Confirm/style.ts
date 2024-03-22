import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 10rem;
  background-color: #028352;
  height: 100vh;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  @media (max-width: 800px){
    padding: 2rem;
    box-sizing: border-box;
  }
`

export const Title = styled.p`
font-family: 'Inter', sans-serif;
font-size: 24px;
font-weight: 600;
text-align: center;
color: #FFFFFF;
`

export const Subtitle = styled.p`
font-family: 'Inter', sans-serif;
font-size: 18px;
font-weight: 400;
text-align: center;
color: #BEBEBE;

`

export const ImageWhatsapp = styled.img`
  position: fixed;
  z-index: 99999;
  bottom: 15px;
  right: 15px;
  width: 3rem;
`