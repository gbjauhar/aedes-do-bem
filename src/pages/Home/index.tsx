import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent";
import icone from "../../assets/icone-mosquitos.svg"
import fluxograma from "../../assets/fluxograma.svg"
import background from "../../assets/background.svg"
import box from "../../assets/caixa.svg"
import leticia from "../../assets/leticia.svg"
import kleber from "../../assets/kleber.svg"
import emerson from "../../assets/emerson.svg"
import backgroundBigger from "../../assets/backgroundBigger.svg"
import biggerVertical from "../../assets/biggerVertical.svg"
import logoOxitec from "../../assets/logoOxitec.svg"
import newImage from "../../assets/newImage.svg"
import footer from "../../assets/footer.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = ({ whatsAppLink }: { whatsAppLink: string }) => {

  const navigate = useNavigate()

  useEffect(() => {
    window.dataLayer.push({
      event: 'pageview'
    })
    window.fbq('track', 'pageview')
  }), []

  const tracking = () => {
    window.dataLayer.push({
      event: 'Clicou para comprar a caixa'
    })
    window.fbq('track', 'Clicou para comprar a caixa')

    navigate("/checkout")
  }
  return (
    <Container>
      <HeaderComponent BannerBox={true} />
      <Content>
        <Title>É o mosquito combatendo o mosquito!</Title>
        <Subtitle>Uma solução inovadora, segura e altamente eficaz no combate ao Aedes aegypti.</Subtitle>
        <Video width={700} autoPlay controls muted>
          <source src={import.meta.env.VITE_FRONTEND_URL + '/video-home.mp4'} type="video/mp4" />
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
            <Title style={{fontSize: '1rem'}}>R$ 280,00</Title>
            <Button onClick={tracking}>Proteja sua família agora!</Button>
          </ContentBox>
        </Row>
        <NewText>
          <h1>Uma solução inovadora, segura e altamente eficaz no combate ao Aedes aegypti.</h1>
          <p>O Aedes do Bem™ MINI é uma versão com menor dosagem de mosquitos, suficiente para proteger uma residência ou pequenos estabelecimentos comerciais.</p>
          <p>Os Aedes do Bem™ são mosquitos Aedes aegypti machos autolimitante, desenvolvidos pela empresa britânica Oxitec, que são capazes de limitar a reprodução da própria espécie, ajudando na diminuição de fêmeas na área tratada.</p>
          <p>As fêmeas do Aedes aegypti que picam, pois precisam de sangue para maturar seus ovos, e nessa picada, se estiverem contaminadas, transmitem o vírus da dengue, zika, chikungunya, febre amarela e outras doenças perigosas.</p>
          <p>Os Aedes do Bem™ são machos, e assim como os machos dessa espécie, não picam e não transmitem doenças. Eles se alimentam de néctar das flores e, por isso, são mosquitos inofensivos aos serem humanos e pets.</p>
          <h1>São mosquitos do Bem combatendo mosquitos!</h1>
          <h1>Como funciona?</h1>
          <p>Você receberá sua Caixa do Bem MINI, contendo um pote de ovos do Aedes do Bem™, suporte plástico e conservantes e condicionantes de água.</p>
          <p>Ao ativar sua caixinha adicionando água potável, os mosquitos do Bem se desenvolverão até a atingir a fase adulta. Em cerca de 10 a 14 dias, Aedes do Bem™ adultos voarão da caixa para o ambiente urbano para se acasalar com as fêmeas do Aedes aegypti.</p>
          <p>Deste cruzamento, apenas novos mosquitos machos autolimitantes e inofensivos serão gerados. As fêmeas dessa prole não sobrevivem até a fase adulta.</p>
          <h1>E qual é o resultado do tratamento?</h1>
          <p>O resultado é a diminuição do número de fêmeas do Aedes aegypti, que picam e transmitem doenças, e, consequentemente, o controle populacional do Aedes aegypti na área tratada.</p>
          <p>Lembrando que os Aedes do Bem™ não causam danos ou desequilíbrio ao meio ambiente, não interferem em outros insetos e plantas benéficas.</p>
          <h1>Recomendações de uso do produto:</h1>
          <p>Assim que receber sua Caixa do Bem MINI, ative-a imediatamente.</p>
          <p>Use o aplicativo para registrar a ativação da sua Caixa do Bem MINI e receba lembretes da sua nova ativação.</p>
          <p>Ao finalizar a ativação, posicione sua Caixa do Bem MINI em uma área externa, como quintais ou jardins, em um local com sombra, sem incidência de luz natural direta ou fontes de calor.</p>
          <p>{'Não exponha o produto em altas temperaturas (> 30°C).'}</p>
          <p style={{fontWeight: 400}}>ANTES DE USAR, LEIA AS INSTRUÇÕES DE USO CONTIDAS NA EMBALAGEM.</p>
          <img src={newImage} />
        </NewText>
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
        <Link to={whatsAppLink} style={{textDecoration: 'none'}}>
          <Button
            style={{
              background: 'linear-gradient(122.45deg, #067474 26.86%, #58A08B 73.14%)', 
              marginTop: '3rem',
            }}>
              Conversar com um especialista!
          </Button>
        </Link>
      </DivBackground>
      <Link to={whatsAppLink}>
        <ImageWhatsapp src={whatsapp} />
      </Link>
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
    margin-bottom: 1rem;
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

const NewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 16px;
  margin: 5rem 0 2rem;
  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #000000;
    margin-top: 2rem;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: #000000;
  }

  @media (max-width: 800px) {
    margin: 7rem 0 2rem;
  }
`

const ImageWhatsapp = styled.img`
  position: fixed;
  z-index: 99999;
  bottom: 15px;
  right: 15px;
  width: 3rem;
`

export default Home;
