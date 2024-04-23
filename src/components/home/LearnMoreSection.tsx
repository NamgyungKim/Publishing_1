import React from "react";
import styled from "@emotion/styled";
import img from "../../assets/images/section3.jpg";

const LearnMoreSection: React.FC = () => {
  return (
    <WrapLearnMoreSection>
      <TextArea>
        <h3 className="font-playfair">
          Changing the Way the World Does Business
        </h3>
        <p>Building Lasting Relationships</p>
        <button>Learn More</button>
      </TextArea>
      <Image bgImage={img}>
        <img src={img} />
        <div className="image" />
      </Image>
    </WrapLearnMoreSection>
  );
};

const WrapLearnMoreSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  line-height: 1.4;
  padding: 0 50px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;
const TextArea = styled.div`
  width: 40vw;
  h3 {
    font-size: 4vw;
    margin-bottom: 8px;
    line-height: 1.1;
  }
  p {
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
  }
  button {
    width: 134px;
    height: 46px;
    border: 1px solid black;
    background-color: black;
    color: white;
    transition: 0.3s;
    :hover {
      background-color: white;
      color: black;
    }
  }
  @media (max-width: 1000px) {
    width: auto;
    padding: 40px 45px;
    h3 {
      font-size: 34px;
      line-height: 1.2;
    }
    p {
    }
  }
`;
const Image = styled.div<{ bgImage: string }>`
  width: 60vw;
  flex-grow: 6;
  img {
    flex-grow: 1;
    width: 100%;
    border-radius: 5%;
  }
  @media (max-width: 1000px) {
    img {
      display: none;
    }
    .image {
      width: 100%;
      height: 243px;
      background-size: cover;
      background-position-y: 50%;
      background-image: url(${(props) => props.bgImage});
      border-radius: 5%;
    }
    object-fit: cover;
    object-position: 52% 47%;
    width: 100%;
  }
`;

export default LearnMoreSection;
