import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import text from "../../assets/icons/our_products.svg";
import product_1 from "../../assets/images/product_1.jpg";
import product_2 from "../../assets/images/product_2.jpg";
import product_3 from "../../assets/images/product_3.jpg";
import product_4 from "../../assets/images/product_4.jpg";
import product_5 from "../../assets/images/product_5.png";
import product_6 from "../../assets/images/product_6.jpg";
import { useMotionValueEvent, useScroll } from "framer-motion";
const ProductSection: React.FC = () => {
  const productsRef = useRef<HTMLTableSectionElement>();
  const productWrapRef = useRef<HTMLDivElement>();
  const ProductSectionWrapRef = useRef<HTMLTableSectionElement>();
  const [productWidth, useProductWidth] = useState<number>(0);
  const [productCardWidth, useProductCardWidth] = useState<number>(0);
  const [productScroll, setProductScroll] = useState<number>(0);
  const [productSectionHeight, setProductSectionHeight] = useState<number>(0);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const productHeight = productWrapRef.current.offsetHeight;
    const currentScroll = Math.floor(latest);
    // ProductSection 스크롤 위치를 0 ~ 1 로 표기
    const scrollProgress =
      (currentScroll - productHeight) / (productWidth + productHeight);
    if (scrollProgress >= 0 && scrollProgress <= 1) {
      setProductScroll(scrollProgress);
    } else if (scrollProgress < 0) {
      setProductScroll(0);
    } else if (scrollProgress > 1) {
      setProductScroll(1);
    }
    setProductSectionHeightstate();
  });

  useEffect(() => {
    const productsWidth = productsRef.current?.clientWidth;
    useProductWidth(productsWidth);
    setProductSectionHeightstate();
    window.addEventListener("resize", function () {
      // 아래서 두개 (footer,LearnMore컴포넌트의 높이)
      setProductSectionHeightstate();
    });
  }, []);

  const setProductSectionHeightstate = () => {
    const { childNodes } = ProductSectionWrapRef.current.parentNode;
    const footer = childNodes[childNodes.length - 1];
    const learnMore = childNodes[childNodes.length - 2];
    if (footer instanceof HTMLElement && learnMore instanceof HTMLElement) {
      const footerHeight = footer.offsetHeight;
      const learnMoreHeight = learnMore.offsetHeight;
      setProductSectionHeight(footerHeight + learnMoreHeight);
    }

    const prodctCard = productsRef.current.childNodes[0];
    if (prodctCard instanceof HTMLElement) {
      useProductCardWidth(prodctCard.offsetWidth);
    }
  };

  const products = [
    {
      bg_img: product_1,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_2,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_3,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_4,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_5,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    },
    {
      bg_img: product_6,
      type: "Facial Serums",
      product_name: "GlowElixir Radiance Serum"
    }
  ];

  return (
    <>
      <ProductSectionWrap ref={ProductSectionWrapRef}>
        <ProductWrap ref={productWrapRef}>
          <TextArea
            className="font-playfair"
            style={{ opacity: 1 - productScroll * 12 }}
          >
            <img src={text} alt="our products" />
          </TextArea>
          <Products
            productNum={products.length}
            ref={productsRef}
            productScroll={productScroll}
          >
            {products.map(({ bg_img, type, product_name }, i) => (
              <ProductCard bgImage={bg_img} key={i}>
                <div className="img"></div>
                <div className="product_data">
                  <p className="type">{type}</p>
                  <p className="product_nm font-playfair">{product_name}</p>
                </div>
              </ProductCard>
            ))}
          </Products>
        </ProductWrap>
        {/* 지금꺼 아래 자식 요소의 사이즈 hight에 넣기*/}
        <ProductSectionHeight
          hight={productSectionHeight}
        ></ProductSectionHeight>
      </ProductSectionWrap>
      <ProductSectionHeight hight={productWidth}></ProductSectionHeight>
    </>
  );
};

const ProductSectionWrap = styled.section`
  position: sticky;
  top: 0;
  overflow: hidden;
`;
const ProductSectionHeight = styled.div<{ hight: number }>`
  height: ${(props) => props.hight}px;
  z-index: -1;
`;
const ProductWrap = styled.div`
  position: relative;
  justify-self: stretch;
  display: flex;
  padding: 50px 0;
  box-sizing: border-box;
  top: 0;
`;
const TextArea = styled.div`
  width: 48%;
  padding: 0 0 0 50px;
  justify-self: start;
  img {
    width: 12vw;
  }
`;
const Products = styled.div<{ productNum: number; productScroll: number }>`
  display: flex;
  gap: 30px;
  margin-left: 300px;
  height: calc(100vh - 100px);
  transform: translateX(calc(-${(props) => 77 * props.productScroll}%));
  @media (max-width: 1000px) {
    display: grid;
    transform: translateX(calc(-${(props) => 70 * props.productScroll}%));
    grid-template-columns: ${(props) => {
      let result = "";
      for (let i = 0; i < Math.floor(props.productNum / 2); i++) {
        result += "1fr ";
      }
      return result;
    }};
  }
`;
const ProductCard = styled.div<{ bgImage: string }>`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 1.8vw;
  height: 100%;
  padding: 30px;
  width: 50vw;
  box-sizing: border-box;
  z-index: 10;
  .img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
    border-radius: 1.2vw;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .product_data {
    padding: 20px 20px 0 20px;
  }
  .type {
    line-height: 1.6;
    margin-bottom: 5px;
  }
  .product_nm {
    font-size: 30px;
    font-weight: bold;
  }
`;

export default ProductSection;
