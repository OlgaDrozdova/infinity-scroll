import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';
import { getUser } from './api/getUser';

const Container = styled.div`
  margin-bottom: 20px;
`;

/**
 * @type {React.FC<Props>}
 * @return {React.ReactElement} - users list
 * @description Container component for user's card
 */
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [lastUser, setLastUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
  * @description observer increase the page when last mapped user is displayed
  */
  const observer = useRef(
      new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setCountPage((count) => count + 1);
        }
      }),
  );

  /**
  * @description call getUser when changing countPage
  */
  useEffect(() => {
    if (countPage) {
      getUser(countPage, setLoading)
          .then((response) => {
            const allUsers = new Set([...users, ...response.results]);
            setLoading(false);
            setUsers([...allUsers]);
            return;
          })
          .catch((err) => {
            alert('Произошла ошибка ' + err);
          });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countPage]);

  /**
  * @description pass element to observer when changing lastUser
  */
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
      {users.length > 0 &&
        users.map((item, index) => {
          if (index + 1 === users.length && !loading) {
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
