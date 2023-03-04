import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import UsersList from "./UsersList";

const { Header, Footer, Content } = Layout;

const HeaderStyles = styled(Header)`
  text-align: center;
  background-color: #c2d5e7;
  top: 0;
  position: fixed;
  width: 100%;
`;

const ContentStyles = styled(Content)`
  min-height: 100%;
  padding-top: 70px;
  columns: 3;
`;

const FooterStyles = styled(Footer)`
  text-align: center;
  background-color: #c2d5e7;
  bottom: 0;
  position: fixed;
  width: 100%;
`;

const App = () => {
  return (
    <Layout>
      <HeaderStyles>Infinity Scroll...</HeaderStyles>
      <ContentStyles>
        <UsersList />
      </ContentStyles>
      <FooterStyles>...Infinity Scroll</FooterStyles>
    </Layout>
  );
};

export default App;
