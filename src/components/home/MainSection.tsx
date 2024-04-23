import React from "react";
import styled from "@emotion/styled";
import main_1 from "../../assets/images/main_1.jpg";
import main_2 from "../../assets/images/main_2.jpg";
import main_3 from "../../assets/images/main_3.jpg";

const MainSection: React.FC = () => {
  return (
    <MainSectionWrap>
      <TextArea>
        <h2 className="font-playfair">Elevate Your Beauty Routine</h2>
        <p>It's Time to Glow</p>
        <p className="description">
          This is a space to welcome visitors to the site. Grab their attention
          with copy that clearly states what the site is about, and add an
          engaging image or video.
        </p>
        <button className="start_now_btn">Start Now</button>
      </TextArea>
      <Images>
        <div>
          <img className="main_1" src={main_1} />
        </div>
        <div>
          <img className="main_2" src={main_2} />
        </div>
        <div>
          <img className="main_3" src={main_3} />
        </div>
      </Images>
    </MainSectionWrap>
  );
};

const MainSectionWrap = styled.section`
  padding: 30px;
  height: calc(100vh - 61px);
  box-sizing: border-box;
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  text-align: center;

  h2 {
    font-size: 4vw;
    margin-bottom: 36px;
    @media (max-width: 1000px) {
      font-size: 6vw;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 24px;
  }
  .description {
    width: 58%;
    font-size: 16px;
    font-weight: 300;
  }
  .start_now_btn {
    width: 140px;
    height: 40px;
    border: 1px solid;
    border-radius: 40px;
    background-color: transparent;
    transition: 0.3s;
    :hover {
      color: white;
      background-color: black;
    }
  }
`;
const Images = styled.div`
  margin-top: 54px;
  display: flex;
  justify-content: center;
  .main_1 {
    width: 25vw;
    max-width: 500px;
    border-radius: calc(2vw);
    transform: translate(30%, 0);
  }
  .main_2 {
    width: 40vw;
    max-width: 700px;
    border-radius: calc(2vw);
    transform: translate(0, 10%);
  }
  .main_3 {
    width: 20vw;
    max-width: 350px;
    border-radius: calc(2vw);
    transform: translate(-40%, -20px);
  }
`;

export default MainSection;
