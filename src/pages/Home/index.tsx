import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent";
import video from "../../assets/video.svg"
import icone from "../../assets/icone-mosquitos.svg"
import fluxograma from "../../assets/fluxograma.svg"
import logoBackground from "../../assets/logoBackground.svg"
import marketing from "../../assets/marketing.svg"
import background from "../../assets/background.svg"
const Home = () => {
  return (
    <Container>
      <HeaderComponent BannerBox={true} />
      <Content>
      <Title>É o mosquito combatendo o mosquito!</Title>
      <Title style={{fontSize: '1.5rem', color: '#4DB358'}}>Uma solução inovadora, segura e altamente eficaz no combate ao Aedes aegypti.</Title>
      <img src={video} width={700} />
      <img src={icone} width={80} />
      <Title>Nossos mosquitos não picam!</Title>
      <Title style={{fontSize: '1.5rem', color: '#4DB358', fontWeight: 300}}>Assim como mosquitos Aedes aegypti  machos presentes do ambiente, os Aedes do Bem™ não picam e por isso, não transmitem doenças. É perfeito para pessoas, para o meio ambiente e para os pets!</Title>
      <img src={fluxograma} width={500} />
      <Row>
      <Image src={background}/>
      <ContentBox />
      </Row>
      <img src={marketing} style={{  marginTop: '10rem'}}/>
      <img src={logoBackground}/>
      <Row style={{gap: '4rem'}}>
      <InfoBox />
      <InfoBox />
      <InfoBox />
      </Row>
      
    </Content>
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
font-size: 1.875rem;
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
`

const InfoBox = styled.div`
box-shadow: 0px 4px 4px 0px #00000040;
width: 18.813rem;
height: 22rem;
background-color: #FFFFFF;

border-radius: 1.25rem;
`

const ContentBox = styled(InfoBox)`
position: relative;
top: 5rem;
`

const Image = styled.img`
  position: absolute;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Home;
