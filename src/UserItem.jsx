import React, { memo } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const { Meta } = Card;

const CardStyles = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

/**
 * @type {React.FC<Props>}
 * @return {React.ReactElement} - user card
 * @description Component for showing card with details of the user
 */

const UserItem = memo((props) => {
  const fullName = `${props.name.title} ${props.name.last} ${props.name.first}`;

  const avatarNode = () => {
    return <img alt='avatar' src={props.picture.medium} />;
  };

  return (
    <CardStyles hoverable cover={avatarNode()}>
      <Meta title={fullName} description={props.email} />
    </CardStyles>
  );
});

UserItem.displayName = 'UserItem';

export default UserItem;
