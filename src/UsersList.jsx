import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';
import { getUser } from './api/getUser';

const Container = styled.div`
  margin-bottom: 20px;
  break-inside: avoid;
`;

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [countUsers, setCountUsers] = useState(1);
  const [lastUser, setLastUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setCountUsers((count) => count + 1);
      }
    })
  );

  useEffect(() => {
    if (countUsers <= 15) {
      getUser(setUsers, setLoading);
    }
  }, [countUsers]);

  useEffect(() => {
    const currentElement = lastUser;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastUser]);

  return (
    <>
        {users.results &&
          users.results.map((item, index) => {
            if (
              index + 1 === users.results.length &&
              countUsers <= 15 &&
              !loading
            ) {
              return (
                <Container key={index} ref={setLastUser}>
                  <UserItem
                    key={index}
                    name={item.name}
                    picture={item.picture}
                    email={item.email}
                  />
                </Container>
              );
            }
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
      {loading && <div>loading...</div>}
    </>
  );
};

export default UsersList;
