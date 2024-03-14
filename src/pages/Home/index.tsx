import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent";

const Home = () => {
  return (
    <Container>
      <HeaderComponent BannerBox={true} />
      teste
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
