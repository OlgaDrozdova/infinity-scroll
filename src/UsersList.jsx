import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';
import { getUser } from './api/getUser';

const Container = styled.div`
  margin: 20px;
`;

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser(setUsers);
  }, []);

  return (
    <>
      {users.results &&
        users.results.map((item, index) => {
          return (
            <Container key={index}>
              <UserItem
                key={index}
                name={item.name}
                picture={item.picture}
                email={item.email}
              />
            </Container>
          );
        })}
    </>
  );
};

export default UsersList;
