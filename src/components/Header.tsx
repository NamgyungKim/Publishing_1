import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import logo from "../assets/icons/logo.svg";

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <div className={"inner_wrap"}>
        <Link to={"/"}>
          <img src={logo} />
          <h1>Business Name</h1>
        </Link>
        <div>
          <Link className="home_link" to={"/"}>
            Home
          </Link>
          <button className="menu_btn">
            <Menu fontSize="large" />
          </button>
        </div>
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  font-size: 18px;
  .inner_wrap {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px;
    border-bottom: 1px solid;
    font-weight: 300;
    > div {
      display: flex;
      align-items: center;
    }
    a {
      display: flex;
      align-items: center;
      color: black;
      text-decoration: none;
    }

    img {
      width: 44px;
      margin-right: 10px;
    }
    .menu_btn {
      display: none;
    }

    @media (max-width: 1000px) {
      .home_link {
        display: none;
      }
      .menu_btn {
        display: block;
        background: none;
        border: none;
      }
    }
  }
`;

export default Header;
