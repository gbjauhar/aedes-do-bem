import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent";
import icone from "../../assets/icone-mosquitos.svg"
import fluxograma from "../../assets/fluxograma.svg"
import logoBackground from "../../assets/logoBackground.svg"
import marketing from "../../assets/marketing.svg"
import background from "../../assets/background.svg"
import box from "../../assets/caixa.svg"
import leticia from "../../assets/leticia.svg"
import kleber from "../../assets/kleber.svg"
import emerson from "../../assets/emerson.svg"
import backgroundBigger from "../../assets/backgroundBigger.svg"
import biggerVertical from "../../assets/biggerVertical.svg"
import logoOxitec from "../../assets/logoOxitec.svg"
import footer from "../../assets/footer.svg";

const Home = () => {
  return (
    <Container>
      <HeaderComponent BannerBox={true} />
      <Content>
        <Title>É o mosquito combatendo o mosquito!</Title>
        <Subtitle>Uma solução inovadora, segura e altamente eficaz no combate ao Aedes aegypti.</Subtitle>
        <Video width={700} autoPlay controls muted>
          <source src={import.meta.env.VITE_FRONTEND_URL + '/video.MP4'} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <img src={icone} width={80} />
        <Title>Nossos mosquitos não picam!</Title>
        <Subtitle>
          Assim como mosquitos Aedes aegypti machos presentes do ambiente, os Aedes do Bem™ não
          picam e por isso, não transmitem doenças. É perfeito para pessoas, para o meio ambiente e
          para os pets!
        </Subtitle>
        <Image src={fluxograma} />
        <Row>
          <ImageAbsolute src={background} />
          <ContentBox>
            <Title style={{fontWeight: 600, fontSize: '1rem'}}>Caixa única</Title>
            <img src={box} width={130} />
            <Title style={{fontSize: '1rem'}}>R$ 299,00</Title>
            <Button href="/checkout">Proteja sua família agora!</Button>
          </ContentBox>
        </Row>
        <Image src={marketing} style={{ width: '50%', marginTop: '10rem'}}/>
        <Image src={logoBackground}/>
        <RowScrolling>
          <InfoBox>
            <img src={leticia} />
            <Title style={{color: '#000000', fontWeight: 700, fontSize: '1rem'}}>Dra. Letícia Souza</Title>
            <Title style={{color: '#000000', fontWeight: 300, fontSize: '1rem'}}>PhD</Title>
            <Title style={{color: '#000000', fontWeight: 300, fontSize: '1rem'}}>Essa é a melhor solução para eleminar as fémeas do aedes, em todos os meus 20 anos de
              profissão, nunca tinha visto algo igual a essa solução inovadora!</Title>
          </InfoBox>
          <InfoBox>
            <img src={kleber} />
            <Title style={{color: '#000000', fontWeight: 700, fontSize: '1rem'}}>Dr. João Kleber</Title>
            <Title style={{color: '#000000', fontWeight: 300, fontSize: '1rem'}}>PhD</Title>
            <Title style={{color: '#000000', fontWeight: 300, fontSize: '1rem'}}>Essa é a melhor solução para eleminar as fémeas do aedes, em todos os meus 20 anos de
              profissão, nunca tinha visto algo igual a essa solução inovadora!</Title>
          </InfoBox>
          <InfoBox>
            <img src={emerson} />
            <Title style={{color: '#000000', fontWeight: 700, fontSize: '1rem'}}>Dr. Emerson Luís</Title>
            <Title style={{color: '#000000', fontWeight: 300, fontSize: '1rem'}}>PhD</Title>
            <Title style={{color: '#000000', fontWeight: 300, fontSize: '1rem'}}>Essa é a melhor solução para eleminar as fémeas do aedes, em todos os meus 20 anos de
              profissão, nunca tinha visto algo igual a essa solução inovadora!</Title>
          </InfoBox>
        </RowScrolling>
        <Row style={{marginTop: '4rem'}}>
          <Bigger src={window.innerWidth < 800 ? biggerVertical : backgroundBigger}  />
          <DivContent>
            <Title
              style={{fontWeight: 600, fontSize: '1rem', color: "#FFFFFF", marginBottom: '1rem'}}>
                Confira as vantagens <br /> de usar o Aedes do Bem!
            </Title>
            <div className="inside-div">
              <InfoBoxSmall>Mosquitos seguros, que não picam e não transmitem doenças</InfoBoxSmall>
              <InfoBoxSmall>Não oferecem riscos para outros insetos benéficos, pessoas e animais de estimação</InfoBoxSmall>
              <InfoBoxSmall>Simples e fácil de usar, mantendo as liberações a cada 28 dias</InfoBoxSmall>
              <InfoBoxSmall>Certificado pela Autoridade regulatória brasileira de Biossegurança - CTNBio</InfoBoxSmall>
              <InfoBoxSmall>Eficácia de 100% no controle da proliferação de fêmeas do Aedes aegypti nas áreas tratadas</InfoBoxSmall>
            </div>
          </DivContent>
        </Row>
  
      </Content>
      <DivBackground>
        <img width={300} src={logoOxitec} />
        <FooterTitle>
          Fundada em 2002 na Universidade de Oxford, Reino Unido, a Oxitec é pioneira e líder global
          em soluções biológicas disruptivas e inovadoras para o controle de insetos que transmitem
          doenças e destroem plantações.
        </FooterTitle>
        <Button style={{background: 'linear-gradient(122.45deg, #067474 26.86%, #58A08B 73.14%)',  marginTop: '3rem'}}>Conversar com um especialista!</Button>
      </DivBackground>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
font-family: "Inter", sans-serif;
font-weight: 600;
color: #028352;
font-size: 30px;
@media (max-width: 800px){
  font-size: 16px;
}
`

const Subtitle = styled.p`
font-family: "Inter", sans-serif;
font-weight: 300;
color: #4DB358;
font-size: 24px;
@media (max-width: 800px){
  font-size: 14px;
}
`

const FooterTitle = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #FFFFFF;
  font-size:24px;
  @media (max-width: 800px){
    font-size: 12px;
  }
`

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  gap: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    padding: 8rem 2rem;
    box-sizing: border-box;

  }
`

const InfoBox = styled.div<{ scroll?: boolean }>`
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 18.813rem;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 1.25rem;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 800px) {
    width: 100%; /* Set width to 100% on smaller screens */
    flex-shrink: 0;
  }
`;

const InfoBoxSmall = styled(InfoBox)`
  width: 12rem;
  height: 4rem;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
`

const ContentBox = styled(InfoBox)`
position: relative;
top: 5rem;
@media (max-width: 800px) {
    top: 7rem;
    
  }
`

const ImageAbsolute = styled.img`
  position: absolute;
   @media (max-width: 800px) {
    width: 100%;
  }
`
const Bigger = styled(ImageAbsolute)`
width: 80%;
`
const Image = styled.img`
  width: 80%;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const RowScrolling = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  @media (max-width: 800px) {
    flex-wrap: nowrap;
  }
`
const Button = styled.a`
  background: linear-gradient(122.45deg, #6BCF7B 26.86%, #3E8652 73.14%);
  width: 15rem;
  height: 3rem;
  border-radius: 0.625rem;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  color: #FFFFFF;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

const DivContent = styled.div`
position: relative;
text-align: center;

.inside-div
{
  display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 1rem;
}`

const DivBackground = styled.div`
  width: 100%;
  background-image: url(${footer});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 20rem;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 3rem;
  }
`

const Video = styled.video`
width: 100%;
`

export default Home;
