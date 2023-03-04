import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const { Meta } = Card;

const CardStyles = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;

const UserItem = forwardRef((props,ref) => {
  const fullName = `${props.name.title} ${props.name.last} ${props.name.first}`;

  const avatarNode = () => {
    return <img alt='avatar' src={props.picture.medium} />;
  };

  return (
    <CardStyles hoverable cover={avatarNode()} ref={ref}>
      <Meta title={fullName} description={props.email} />
    </CardStyles>
  );
});

export default UserItem;
