import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import UsersList from './UsersList';

const { Header, Content } = Layout;

const HeaderStyles = styled(Header)`
  text-align: center;
  background-color: #c2d5e7;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
`;

const ContentStyles = styled(Content)`
  padding: 0 70px;
  margin-top: 20px;
`;

const App = () => {
  return (
    <Layout>
      <HeaderStyles>Infinity Scroll...</HeaderStyles>
      <ContentStyles>
        <UsersList />
      </ContentStyles>
    </Layout>
  );
};

export default App;
