import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/home/MainSection";
import ProductSection from "../components/home/ProductSection";
import LearnMoreSection from "../components/home/LearnMoreSection";
import styled from "@emotion/styled";

const Home: React.FC = () => {
  return (
    <Background>
      <Header />
      <MainSection />
      <ProductSection />
      <LearnMoreSection />
      <Footer />
    </Background>
  );
};

const Background = styled.div`
  background-color: #ece3da;
`;
export default Home;
